
import type { RequestBody } from '../types.ts';

export async function processVideo(videoData: string, settings: RequestBody): Promise<string> {
  console.log("Processing video with settings:", settings);
  
  try {
    if (!videoData || !videoData.startsWith('data:video/')) {
      console.error("Invalid video data format");
      return videoData;
    }
    

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return videoData;
  } catch (error) {
    console.error("Error processing video:", error);
    return videoData;
  }
}
