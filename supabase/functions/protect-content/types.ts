
export interface RequestBody {
  mediaType: 'image' | 'video';
  mediaData: string;
  title: string;
  description?: string;
  aiDisruptionStrength?: number;
  styleProtectionStrength?: number;
  frameProtectionStrength?: number;
  addWatermark: boolean;
  watermarkText?: string;
  watermarkVisible: boolean;
  addMetadata: boolean;
}

export interface ProtectionSettings {
  aiDisruptionStrength?: number;
  styleProtectionStrength?: number;
  frameProtectionStrength?: number;
  addWatermark?: boolean;
  watermarkText?: string;
  watermarkVisible?: boolean;
  addMetadata?: boolean;
  version: string;
}
