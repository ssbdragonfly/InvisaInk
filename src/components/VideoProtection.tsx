
import React, { useState, useEffect } from "react";
import { SliderWithLabel } from "@/components/ui/slider-with-label";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload, Film, Loader2, Play, Pause, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface VideoProtectionProps {
  videoFile: File | null;
  onVideoSelect: (file: File) => void;
  frameProtectionStrength: number[];
  setFrameProtectionStrength: (value: number[]) => void;
  watermarkEnabled: boolean;
  setWatermarkEnabled: (enabled: boolean) => void;
  watermarkText: string;
  setWatermarkText: (text: string) => void;
  watermarkVisible: boolean;
  setWatermarkVisible: (visible: boolean) => void;
  isProcessing: boolean;
}

export function VideoProtection({
  videoFile,
  onVideoSelect,
  frameProtectionStrength,
  setFrameProtectionStrength,
  watermarkEnabled,
  setWatermarkEnabled,
  watermarkText,
  setWatermarkText,
  watermarkVisible,
  setWatermarkVisible,
  isProcessing
}: VideoProtectionProps) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      onVideoSelect(file);
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  
  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
  }, [videoSrc]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
          id="video-upload"
        />
        {!videoFile ? (
          <label
            htmlFor="video-upload"
            className="cursor-pointer flex items-center justify-center w-full px-4 py-8 border border-dashed rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="flex flex-col items-center py-4">
              <Film className="h-12 w-12 mb-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground mb-2">Select Video</span>
              <span className="text-xs text-muted-foreground">MP4, WebM, or MOV up to 100MB</span>
            </div>
          </label>
        ) : (
          <Card className="w-full overflow-hidden">
            <div className="relative w-full aspect-video bg-black">
              <video
                ref={videoRef}
                src={videoSrc || undefined}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleVideoEnded}
                className="w-full h-full object-contain"
              />
              
              {/* Video controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <div className="flex items-center justify-between text-white mb-1">
                  <Button 
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full hover:bg-white/20 text-white"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  
                  <div className="text-xs">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="h-1 w-full bg-white/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-invisaBlue"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
              
              {/* Filename overlay */}
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {videoFile.name}
              </div>
            </div>
            
            <div className="p-3 bg-muted/10 border-t border-muted/20">
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {(videoFile.size / (1024 * 1024)).toFixed(1)} MB
                </span>
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer text-sm text-invisaBlue flex items-center"
                >
                  <RefreshCw className="h-3 w-3 mr-1" /> Change Video
                </label>
              </div>
            </div>
          </Card>
        )}
      </div>

      <SliderWithLabel
        label="Frame Protection Strength"
        value={frameProtectionStrength}
        setValue={setFrameProtectionStrength}
        valueLabel="%"
      />

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="add-watermark-video"
            checked={watermarkEnabled}
            onCheckedChange={setWatermarkEnabled}
          />
          <Label htmlFor="add-watermark-video">Add Watermark</Label>
        </div>

        {watermarkEnabled && (
          <div className="space-y-4 pl-6 border-l-2 border-muted">
            <Input
              placeholder="Watermark Text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <Switch
                id="visible-watermark-video"
                checked={watermarkVisible}
                onCheckedChange={setWatermarkVisible}
              />
              <Label htmlFor="visible-watermark-video">
                {watermarkVisible ? "Visible Watermark" : "Invisible Watermark"}
              </Label>
            </div>
          </div>
        )}
      </div>

      {isProcessing && (
        <div className="flex items-center justify-center py-4">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          <span className="ml-2 text-sm text-muted-foreground">Processing video...</span>
        </div>
      )}
    </div>
  );
}
