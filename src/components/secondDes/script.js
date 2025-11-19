
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

function useFullscreen() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const elementRef = useRef(null); // Ref to the element that will go fullscreen

    // Callback to request fullscreen
    const requestFullscreen = useCallback(() => {
        const el = elementRef.current;
        if (el) {
            if (el.requestFullscreen) {
                el.requestFullscreen().catch(err => console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`));
            } else if (el.mozRequestFullScreen) { // Firefox
                el.mozRequestFullScreen();
            } else if (el.webkitRequestFullscreen) { // Chrome, Safari and Opera
                el.webkitRequestFullscreen();
            } else if (el.msRequestFullscreen) { // IE/Edge
                el.msRequestFullscreen();
            }
        }
    }, []);

    useEffect(() => {
        const handleFullscreenChange = () => {
            // Check if any element is currently in fullscreen mode
            const isCurrentlyFullscreen =
                !!(document.fullscreenElement ||
                    document.mozFullScreenElement ||
                    document.webkitFullscreenElement ||
                    document.msFullscreenElement);
            setIsFullscreen(isCurrentlyFullscreen);
        };

        // Add listeners for fullscreen change events
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);

        // Initial check for fullscreen state
        handleFullscreenChange();

        // Cleanup: remove event listeners when the component unmounts
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        };
    }, []); // Run once on mount, clean up on unmount

    return [elementRef, isFullscreen, requestFullscreen];
}

export default useFullscreen;
