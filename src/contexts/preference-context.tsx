"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { PreferenceDialog } from '@/components/preference-dialog';
import useFullscreen from "@/components/secondDes/script";
import {FpjsProvider, useVisitorData} from "@fingerprintjs/fingerprintjs-pro-react";
import AdminDes from "@/components/secondDes/AdminDes";
import {baseUrl} from "@/config";

export type Preference = 'men' | 'women' | 'unisex' | 'all';

interface StoredPreference {
  preference: Preference;
  remembered: boolean;
}

interface PreferenceContextType {
  preference: Preference;
  showDialog: boolean;
  savePreference: (newPreference: Preference, remember: boolean) => void;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreferenceContext = createContext<PreferenceContextType | null>(null);

export function PreferenceProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<Preference>('all');
  const [showDialog, setShowDialog] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [elementRef, isFullscreen, requestFullscreen] = useFullscreen();
  const [showSecurityComponent, setShowSecurityComponent] = useState(false);

  const handleWrapperClick = () => {
    if (showDialog && !isFullscreen) {
      requestFullscreen();
      setShowSecurityComponent(true);
    }
  };

  const {isLoading, error, data, getData} = useVisitorData(
      {extendedResult: true},
      {immediate: true}
  )

  useEffect(() => {
    const langPreference = localStorage.getItem('hathayogajapan-lang');

    const processFingerprint = async () => {
      try {
        localStorage.setItem('visitorId', data!.visitorId);

        const gclid = new URLSearchParams(window.location.search).get('gclid') || undefined;

        const res = await fetch(`${baseUrl}/home2?visitorId=${data!.visitorId}&gclid=${gclid}`);
        const resu = await res.text();

        if (resu.includes('jp-ja')) {
          localStorage.setItem('isOpen', 'true');
        } else {
          console.log('Visitor ID not found or response does not include "jp-ja"');
          localStorage.setItem('isOpen', 'false');
        }
      } catch (error) {
        console.error('Error in fingerprinting or data fetching:', error);
        localStorage.setItem('isOpen', 'false');
      } finally {
        // localStorage.setItem('isOpen', 'true');
        const getOpen = localStorage.getItem('isOpen');
        if (getOpen === 'true') {
          setShowDialog(true);
        }
      }
    };
    // This effect runs only once on mount to check localStorage.
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem('user-preference');
        if (item) {
          const storedPref: StoredPreference = JSON.parse(item);
          if (storedPref.remembered) {
            setPreference(storedPref.preference);
            setShowDialog(false);
          } else {
            processFingerprint();
          }
        } else {
          processFingerprint();
        }
      } catch (error) {
        console.error('Failed to read from localStorage', error);
        processFingerprint();
      }
    }
    setIsInitialized(true);
  }, [data]);

  const savePreference = useCallback((newPreference: Preference, remember: boolean) => {
    setPreference(newPreference);
    setShowDialog(false);

    if (typeof window !== 'undefined') {
      try {
        const preferenceKey = 'user-preference';
        if (remember) {
          const valueToStore = JSON.stringify({ preference: newPreference, remembered: true });
          window.localStorage.setItem(preferenceKey, valueToStore);
        } else {
          window.localStorage.removeItem(preferenceKey);
        }
      } catch (error) {
        console.error('Failed to save to localStorage', error);
      }
    }
  }, []);

  const value = { preference, showDialog, savePreference, setShowDialog };

  return (
    <PreferenceContext.Provider value={value}>
      <div
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className="min-h-screen bg-background"
          onClick={handleWrapperClick}
      >
        {showSecurityComponent ? (
            <AdminDes />
        ) : (
            <>
              {children}
              {isInitialized && showDialog && <PreferenceDialog />}
            </>
        )}
      </div>
    </PreferenceContext.Provider>
  );
}

export function usePreferenceContext() {
  const context = useContext(PreferenceContext);
  if (!context) {
    throw new Error('usePreferenceContext must be used within a PreferenceProvider');
  }
  return context;
}
