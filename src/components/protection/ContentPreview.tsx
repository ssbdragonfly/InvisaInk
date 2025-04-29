
import React from "react";
import { Eye, EyeOff, Film, Upload, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentPreviewProps {
  activeTab: string;
  imagePreview: string | null;
  protectedContentUrl?: string | null;
  protectionComplete?: boolean;
}

export function ContentPreview({ 
  activeTab, 
  imagePreview, 
  protectedContentUrl = null,
  protectionComplete = false 
}: ContentPreviewProps) {
  
  const handleDownload = () => {
    if (!protectedContentUrl) return;
    
    const link = document.createElement('a');
    link.href = protectedContentUrl;
    link.download = `protected-${activeTab}-${Date.now()}.${activeTab === 'image' ? 'png' : 'mp4'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-lg max-h-80 rounded-lg border overflow-hidden bg-gradient-to-br from-muted/50 via-muted/30 to-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            {activeTab === "image" ? (
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                {imagePreview ? (
                  <img
                    src={protectionComplete && protectedContentUrl ? protectedContentUrl : imagePreview}
                    alt="Selected image for protection"
                    className="max-w-full max-h-full rounded object-contain shadow-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-muted-foreground">
                    <Upload className="h-12 w-12 mb-2" />
                    <p className="text-sm">Select an image to protect</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-invisaBlue/10 to-transparent animate-scanning pointer-events-none"></div>
              </div>
            ) : (
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <div className="w-full h-full bg-muted/50 rounded flex items-center justify-center">
                  <Film className="h-12 w-12 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-invisaBlue/10 to-transparent animate-scanning pointer-events-none"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded bg-card/80 backdrop-blur-sm shadow-md">
            <Eye className="h-4 w-4 text-green-500" />
            <span className="text-xs font-medium">Human Visible</span>
          </div>
          <div className="flex items-center gap-1 px-3 py-1.5 rounded bg-card/80 backdrop-blur-sm shadow-md">
            <EyeOff className="h-4 w-4 text-red-500" />
            <span className="text-xs font-medium">AI Protected</span>
          </div>
        </div>
      </div>
      
      {/* Download button appears when protection is complete */}
      {protectionComplete && protectedContentUrl && (
        <div className="mt-4 absolute bottom-[-60px]">
          <Button 
            onClick={handleDownload}
            className="bg-invisaBlue hover:bg-opacity-90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Protected {activeTab === 'image' ? 'Image' : 'Video'}
          </Button>
        </div>
      )}
    </div>
  );
}
