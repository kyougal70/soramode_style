"use client";

import { useState } from 'react';
import { usePreferenceContext, Preference } from '@/contexts/preference-context';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export function PreferenceDialog() {
  const { showDialog, setShowDialog, savePreference } = usePreferenceContext();
  const [selectedPreference, setSelectedPreference] = useState<Preference>('all');
  const [remember, setRemember] = useState(false);

  const handleSave = () => {
    savePreference(selectedPreference, remember);
  };

  const handleSkip = () => {
    savePreference('all', false);
  };

  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="sm:max-w-md"
                     onEscapeKeyDown={(e) => e.preventDefault()}
                     onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="font-headline">体験をカスタマイズ</DialogTitle>
          <DialogDescription>
            ブラウジング体験をパーソナライズするために、お好みのコレクションを選択してください。これはコンテンツのフィルタリングにのみ使用され、広告には使用されません。
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <RadioGroup 
            defaultValue="all" 
            onValueChange={(value: Preference) => setSelectedPreference(value)}
            className="grid grid-cols-1 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="men" id="pref-men" />
              <Label htmlFor="pref-men" className="text-base">メンズ</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="women" id="pref-women" />
              <Label htmlFor="pref-women" className="text-base">ウィメンズ</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unisex" id="pref-unisex" />
              <Label htmlFor="pref-unisex" className="text-base">ユニセックス</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="pref-all" />
              <Label htmlFor="pref-all" className="text-base">すべて表示</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="remember-pref" checked={remember} onCheckedChange={(checked) => setRemember(Boolean(checked))} />
            <Label htmlFor="remember-pref" className="text-sm font-normal">設定を記憶する</Label>
        </div>
        <DialogFooter className="mt-4 sm:justify-between">
          <Button type="button" variant="ghost" onClick={handleSkip}>
            今はスキップ
          </Button>
          <Button type="button" onClick={handleSave}>
            設定を保存
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
