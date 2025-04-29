import * as React from "react";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, ArrowRight, Loader2, Download } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Image, Film } from "lucide-react";
import { AIAdvisor } from "@/components/AIAdvisor";
import { VideoProtection } from "@/components/VideoProtection";
import { ImageProtectionForm } from "./protection/ImageProtectionForm";
import { ContentPreview } from "./protection/ContentPreview";

export function ProtectionDemo() {
  const [imageProtectionLevel, setImageProtectionLevel] = useState([60]);
  const [videoProtectionLevel, setVideoProtectionLevel] = useState([50]);
  const [styleProtection, setStyleProtection] = useState([70]);
  const [addWatermark, setAddWatermark] = useState(false);
  const [watermarkText, setWatermarkText] = useState("Protected by InvisaInk");
  const [watermarkVisible, setWatermarkVisible] = useState(false);
  const [metadataProtection, setMetadataProtection] = useState(true);
  const [blockchainProvenance, setBlockchainProvenance] = useState(true);
  const [activeTab, setActiveTab] = useState("image");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showAdvisor, setShowAdvisor] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [frameProtectionStrength, setFrameProtectionStrength] = useState([60]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isProcessingVideo, setIsProcessingVideo] = useState(false);
  const [protectedContentUrl, setProtectedContentUrl] = useState<string | null>(null);
  const [protectionComplete, setProtectionComplete] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }
    
    setSelectedFile(file);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleVideoSelect = (file: File) => {
    setVideoFile(file);
  };

  const handleProtectContent = async () => {
    try {
      if (!title) {
        toast.error("Please enter a title");
        return;
      }

      if ((!selectedFile && !imagePreview) && !videoFile) {
        toast.error("Please select content to protect");
        return;
      }

      setIsSubmitting(true);
      setProtectionComplete(false);
      setProtectedContentUrl(null);

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        toast.error("Please sign in to protect content");
        navigate("/auth");
        return;
      }

      const mediaType = activeTab;
      let mediaData;
      
      if (mediaType === 'image') {
        mediaData = imagePreview;
      } else if (videoFile) {
        // For video, we need to read the file as a data URL
        mediaData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(videoFile);
        });
      }

      if (!mediaData) {
        throw new Error("Failed to prepare media data");
      }

      const { data, error } = await supabase.functions.invoke("protect-content", {
        body: {
          mediaType,
          mediaData,
          title,
          description,
          aiDisruptionStrength: mediaType === "image" ? imageProtectionLevel[0] : null,
          styleProtectionStrength: mediaType === "image" ? styleProtection[0] : null,
          frameProtectionStrength: mediaType === "video" ? frameProtectionStrength[0] : null,
          addWatermark,
          watermarkText,
          watermarkVisible,
          addMetadata: metadataProtection,
          addBlockchainProvenance: blockchainProvenance
        }
      });

      if (error) {
        throw new Error(`Function error: ${error.message}`);
      }

      if (!data.success) {
        throw new Error(data.error || "Protection failed");
      }

      toast.success("Content protected successfully!");
      
      setProtectedContentUrl(data.data.protected_url);
      setProtectionComplete(true);
      
    } catch (error: unknown) {
      console.error("Protection error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to protect content");
    } finally {
      setIsSubmitting(false);
    }
  };  return (    
  <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Protect Your Visual Content
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Protect your media with easy-to-use controls while maintaining visual quality.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              variant="outline" 
              className={`${!showAdvisor ? "bg-muted" : ""}`}
              onClick={() => setShowAdvisor(false)}
            >
              Protection Tools
            </Button>
            <Button 
              variant="outline" 
              className={`${showAdvisor ? "bg-muted" : ""}`}
              onClick={() => setShowAdvisor(true)}
            >
              AI Advisor
            </Button>
          </div>
        </div>

        {showAdvisor ? (
          <AIAdvisor />
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <Input
                type="text"
                placeholder="Title for your protected content"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full"
              />
              
              <Textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full"
                rows={3}
              />

              <Tabs defaultValue="image" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="image" className="flex gap-2">
                    <Image className="h-4 w-4" />
                    Image Protection
                  </TabsTrigger>
                  <TabsTrigger value="video" className="flex gap-2">
                    <Film className="h-4 w-4" />
                    Video Protection
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="image">
                  <ImageProtectionForm
                    imagePreview={imagePreview}
                    onFileSelect={handleFileChange}
                    imageProtectionLevel={imageProtectionLevel}
                    setImageProtectionLevel={setImageProtectionLevel}
                    styleProtection={styleProtection}
                    setStyleProtection={setStyleProtection}
                    addWatermark={addWatermark}
                    setAddWatermark={setAddWatermark}
                    watermarkText={watermarkText}
                    setWatermarkText={setWatermarkText}
                    watermarkVisible={watermarkVisible}
                    setWatermarkVisible={setWatermarkVisible}
                    metadataProtection={metadataProtection}
                    setMetadataProtection={setMetadataProtection}
                    fileInputRef={fileInputRef}
                  />
                </TabsContent>
                <TabsContent value="video">
                  <VideoProtection
                    videoFile={videoFile}
                    onVideoSelect={handleVideoSelect}
                    frameProtectionStrength={frameProtectionStrength}
                    setFrameProtectionStrength={setFrameProtectionStrength}
                    watermarkEnabled={addWatermark}
                    setWatermarkEnabled={setAddWatermark}
                    watermarkText={watermarkText}
                    setWatermarkText={setWatermarkText}
                    watermarkVisible={watermarkVisible}
                    setWatermarkVisible={setWatermarkVisible}
                    isProcessing={isProcessingVideo}
                  />
                </TabsContent>
              </Tabs>
              <Button 
                className="bg-invisaPurple hover:bg-opacity-90 w-full"
                disabled={isSubmitting || (activeTab === 'image' && !selectedFile) || (activeTab === 'video' && !videoFile)}
                onClick={handleProtectContent}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Shield className="mr-2 h-5 w-5" />
                    Apply Protection
                  </>
                )}
              </Button>
            </div>

            <ContentPreview 
              activeTab={activeTab} 
              imagePreview={imagePreview} 
              protectedContentUrl={protectedContentUrl}
              protectionComplete={protectionComplete}
            />
          </div>
        )}

        <div className="mt-12 text-center">
          <Button variant="link" className="text-invisaBlue group" asChild>
            <a href="/how-it-works">
              Learn more about how our protection works
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
