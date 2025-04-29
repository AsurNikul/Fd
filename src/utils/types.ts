import {SvgProps} from 'react-native-svg';

export interface ImagePickerResponse {
  exif?: any | null;
  filename?: string;
  path: string;
  height: number;
  width: number;
  data?: string | null;
  modificationDate?: string | null;
  localIdentifier?: string;
  size: number;
  sourceURL?: string;
  mime: string;
  cropRect?: {
    width: number;
    height: number;
    x: number;
    y: number;
  };
  duration?: number | null; // <-- Make this optional
  creationDate?: string;
}

export interface CustomSvgProps extends SvgProps {
  size?: number;
  height?: number;
  width?: number;
  color?: string;
}
