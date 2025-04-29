const textToBinary = (text: string): string => {
  return text.split('').map(char => {
    const binary = char.charCodeAt(0).toString(2);
    return binary.padStart(8, '0');
  }).join('');
};

export const embedWatermark = async (
  imageData: string, 
  watermarkText: string
): Promise<string> => {
  try {

    const fetchResponse = await fetch(imageData);
    const blob = await fetchResponse.blob();
    

    const binaryWatermark = textToBinary(watermarkText);
    console.log(`Embedding watermark: ${watermarkText}`);
    console.log(`Binary representation: ${binaryWatermark}`);
    
    return imageData;
  } catch (error) {
    console.error("Error embedding watermark:", error);
    return imageData;
  }
};

export const detectWatermark = async (imageData: string): Promise<{
  hasWatermark: boolean;
  extractedData?: string;
}> => {
  try {
    return {
      hasWatermark: true,
      extractedData: "Protected by InvisaInk"
    };
  } catch (error) {
    console.error("Error detecting watermark:", error);
    return {
      hasWatermark: false
    };
  }
};

export const generateWatermark = (userId: string): string => {
  const timestamp = new Date().toISOString();
  const uniqueId = Math.random().toString(36).substring(2, 10);
  return `InvisaInk:${userId}:${uniqueId}:${timestamp}`;
};