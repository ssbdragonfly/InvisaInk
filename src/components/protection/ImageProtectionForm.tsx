
import React from "react";
import { Button } from "@/components/ui/button";
import { SliderWithLabel } from "@/components/ui/slider-with-label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface ImageProtectionFormProps {
  imagePreview: string | null;
  onFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageProtectionLevel: number[];
  setImageProtectionLevel: (value: number[]) => void;
  styleProtection: number[];
  setStyleProtection: (value: number[]) => void;
  addWatermark: boolean;
  setAddWatermark: (value: boolean) => void;
  watermarkText: string;
  setWatermarkText: (value: string) => void;
  watermarkVisible: boolean;
  setWatermarkVisible: (value: boolean) => void;
  metadataProtection: boolean;
  setMetadataProtection: (value: boolean) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

export function ImageProtectionForm({
  imagePreview,
  onFileSelect,
  imageProtectionLevel,
  setImageProtectionLevel,
  styleProtection,
  setStyleProtection,
  addWatermark,
  setAddWatermark,
  watermarkText,
  setWatermarkText,
  watermarkVisible,
  setWatermarkVisible,
  metadataProtection,
  setMetadataProtection,
  fileInputRef,
}: ImageProtectionFormProps) {
  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={onFileSelect}
          className="hidden"
          ref={fileInputRef}
        />
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="mr-2 h-4 w-4" /> 
          Select Image
        </Button>
      </div>
      
      <SliderWithLabel
        label="AI Disruption Strength"
        value={imageProtectionLevel}
        setValue={setImageProtectionLevel}
        valueLabel="%"
      />
      <SliderWithLabel
        label="Style Cloaking"
        value={styleProtection}
        setValue={setStyleProtection}
        valueLabel="%"
      />
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="add-watermark"
            checked={addWatermark}
            onCheckedChange={setAddWatermark}
          />
          <Label htmlFor="add-watermark">Add Watermark</Label>
        </div>
        
        {addWatermark && (
          <div className="space-y-4 pl-6 border-l-2 border-muted">
            <Input
              placeholder="Watermark Text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <Switch
                id="visible-watermark"
                checked={watermarkVisible}
                onCheckedChange={setWatermarkVisible}
              />
              <Label htmlFor="visible-watermark">
                {watermarkVisible ? "Visible Watermark" : "Invisible Watermark"}
              </Label>
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-muted-foreground">Additional Protections</label>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between py-2 border-b border-muted">
            <span className="text-sm">IPTC "Do Not Train" Metadata</span>
            <Button
              variant={metadataProtection ? "default" : "outline"}
              size="sm"
              onClick={() => setMetadataProtection(!metadataProtection)}
              className={metadataProtection ? "bg-invisaBlue hover:bg-opacity-90" : ""}
            >
              {metadataProtection ? "Enabled" : "Disabled"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
