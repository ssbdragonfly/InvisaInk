
import type { RequestBody } from '../types.ts';

export async function processImage(imageData: string, settings: RequestBody): Promise<string> {
  let processedImage = imageData;

  if (settings.aiDisruptionStrength && settings.aiDisruptionStrength > 0) {
    console.log(`Applying AI disruption with strength: ${settings.aiDisruptionStrength}`);
    processedImage = await applyAdversarialProtection(processedImage, settings.aiDisruptionStrength);
  }

  if (settings.styleProtectionStrength && settings.styleProtectionStrength > 0) {
    console.log(`Applying style protection with strength: ${settings.styleProtectionStrength}`);
    processedImage = await applyStyleProtection(processedImage, settings.styleProtectionStrength);
  }

  if (settings.addWatermark && settings.watermarkText) {
    console.log(`Applying ${settings.watermarkVisible ? 'visible' : 'invisible'} watermark`);
    processedImage = await applyWatermark(processedImage, settings.watermarkText, settings.watermarkVisible);
  }

  if (settings.addMetadata) {
    console.log('Adding Do Not Train metadata');
    processedImage = await addDoNotTrainMetadata(processedImage);
  }

  return processedImage;
}

async function applyAdversarialProtection(imageData: string, strength: number): Promise<string> {
  // Implement adversarial protection by adding subtle noise patterns
  const base64Data = imageData.split(',')[1];
  const rawData = atob(base64Data);
  const array = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; i++) {
    const byte = rawData.charCodeAt(i);
    // Add subtle perturbations based on position and strength
    const perturbation = Math.sin(i * 0.1) * (strength / 100) * 2;
    array[i] = Math.max(0, Math.min(255, byte + perturbation));
  }
  
  const processedData = btoa(String.fromCharCode.apply(null, array as unknown as number[]));
  return `data:image/png;base64,${processedData}`;
}

async function applyStyleProtection(imageData: string, strength: number): Promise<string> {
  // Apply style-based protection with different patterns
  const base64Data = imageData.split(',')[1];
  const rawData = atob(base64Data);
  const array = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; i++) {
    const byte = rawData.charCodeAt(i);
    // Add style-based variations using a different pattern
    const variation = Math.cos(i * 0.05) * (strength / 100) * 3;
    array[i] = Math.max(0, Math.min(255, byte + variation));
  }
  
  const processedData = btoa(String.fromCharCode.apply(null, array as unknown as number[]));
  return `data:image/png;base64,${processedData}`;
}

async function applyWatermark(imageData: string, text: string, visible: boolean): Promise<string> {
  if (visible) {
    return applyVisibleWatermark(imageData, text);
  } else {
    return applyInvisibleWatermark(imageData, text);
  }
}

async function applyVisibleWatermark(imageData: string, text: string): Promise<string> {
  // Create canvas to draw the image and watermark
  const img = new Image();
  const canvas = new ImageBitmap();
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    console.error("Canvas context not available");
    return imageData;
  }
  
  // Draw the image on the canvas
  await new Promise(resolve => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      resolve(null);
    };
    img.src = imageData;
  });
  
  // Add the watermark text
  const fontSize = Math.max(12, Math.min(canvas.width, canvas.height) * 0.05);
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Position at the bottom right corner
  const x = canvas.width * 0.85;
  const y = canvas.height * 0.85;
  
  // Add a slight shadow for better visibility
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  // Draw the text
  ctx.fillText(text, x, y);
  
  // Convert back to base64
  return canvas.toDataURL('image/png');
}

async function applyInvisibleWatermark(imageData: string, text: string): Promise<string> {
  // Implement LSB (Least Significant Bit) steganography
  const base64Data = imageData.split(',')[1];
  const rawData = atob(base64Data);
  const array = new Uint8Array(rawData.length);
  
  // Convert watermark text to binary
  const binaryText = textToBinary(text);
  const binaryLength = binaryText.length;
  
  // Copy original image data
  for (let i = 0; i < rawData.length; i++) {
    array[i] = rawData.charCodeAt(i);
  }
  
  // Store the length of the watermark in the first few bytes
  const lengthBytes = 4; // Use 4 bytes to store length (up to 4GB)
  for (let i = 0; i < lengthBytes; i++) {
    const lengthByte = (binaryLength >> (i * 8)) & 0xFF;
    array[i] = (array[i] & 0xFE) | ((lengthByte >> 7) & 1);
    array[i + 1] = (array[i + 1] & 0xFE) | ((lengthByte >> 6) & 1);
    array[i + 2] = (array[i + 2] & 0xFE) | ((lengthByte >> 5) & 1);
    array[i + 3] = (array[i + 3] & 0xFE) | ((lengthByte >> 4) & 1);
    array[i + 4] = (array[i + 4] & 0xFE) | ((lengthByte >> 3) & 1);
    array[i + 5] = (array[i + 5] & 0xFE) | ((lengthByte >> 2) & 1);
    array[i + 6] = (array[i + 6] & 0xFE) | ((lengthByte >> 1) & 1);
    array[i + 7] = (array[i + 7] & 0xFE) | (lengthByte & 1);
  }
  
  // Embed the watermark data using LSB
  // Skip the header bytes, start embedding after the length info
  const startOffset = lengthBytes * 8;
  for (let i = 0; i < binaryText.length; i++) {
    const bitPosition = startOffset + i;
    if (bitPosition < array.length) {
      // Replace the least significant bit with our watermark bit
      array[bitPosition] = (array[bitPosition] & 0xFE) | parseInt(binaryText[i]);
    }
  }
  
  const processedData = btoa(String.fromCharCode.apply(null, array as unknown as number[]));
  return `data:image/png;base64,${processedData}`;
}

function textToBinary(text: string): string {
  let binary = '';
  for (let i = 0; i < text.length; i++) {
    // Convert each character to its binary representation
    const charCode = text.charCodeAt(i);
    const bin = charCode.toString(2).padStart(8, '0');
    binary += bin;
  }
  return binary;
}

function extractWatermark(imageData: string): string {
  // Implementation for extracting watermark from an image
  // This would be used in a verification feature
  const base64Data = imageData.split(',')[1];
  const rawData = atob(base64Data);
  
  // First extract the length (stored in first 4 bytes)
  let length = 0;
  for (let i = 0; i < 4; i++) {
    const byte = rawData.charCodeAt(i);
    length |= ((byte & 1) << (i * 8));
  }
  
  // Extract the binary watermark
  let binaryWatermark = '';
  const startOffset = 4 * 8;
  for (let i = 0; i < length; i++) {
    const bitPosition = startOffset + i;
    if (bitPosition < rawData.length) {
      binaryWatermark += rawData.charCodeAt(bitPosition) & 1;
    }
  }
  
  // Convert binary back to text
  let watermarkText = '';
  for (let i = 0; i < binaryWatermark.length; i += 8) {
    const byte = binaryWatermark.substr(i, 8);
    watermarkText += String.fromCharCode(parseInt(byte, 2));
  }
  
  return watermarkText;
}

async function addDoNotTrainMetadata(imageData: string): Promise<string> {
  // Add IPTC metadata to prevent AI training
  // For simplicity in this implementation, we'll add custom headers to the image data
  // In a production environment, proper IPTC/XMP metadata would be added
  
  // For now, we'll embed a simple marker in the image data
  const base64Data = imageData.split(',')[1];
  const rawData = atob(base64Data);
  const array = new Uint8Array(rawData.length + 48); // Add space for our metadata
  
  // Add "DONOTTRAINAI" marker to specific positions in the image data
  const marker = "DONOTTRAINAI";
  
  // Copy original data
  for (let i = 0; i < rawData.length; i++) {
    array[i] = rawData.charCodeAt(i);
  }
  
  // Add metadata marker at the end
  for (let i = 0; i < marker.length; i++) {
    array[rawData.length + i] = marker.charCodeAt(i);
  }
  
  const processedData = btoa(String.fromCharCode.apply(null, array as unknown as number[]));
  return `data:image/png;base64,${processedData}`;
}
