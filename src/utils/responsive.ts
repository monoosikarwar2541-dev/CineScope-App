import {
  Dimensions,
  PixelRatio,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

const BASE_WIDTH: number = 375;

// Width percentage
export const wp = (percentage: number): number => {
  return (SCREEN_WIDTH * percentage) / 100;
};

// Height percentage
export const hp = (percentage: number): number => {
  return (SCREEN_HEIGHT * percentage) / 100;
};

// Responsive font
export const rf = (size: number): number => {
  const scale: number = SCREEN_WIDTH / BASE_WIDTH;

  return PixelRatio.roundToNearestPixel(size * scale);
};

// Moderate scale
export const ms = (
  size: number,
  factor: number = 0.5
): number => {
  const scale: number = SCREEN_WIDTH / BASE_WIDTH;

  return PixelRatio.roundToNearestPixel(
    size + (scale * size - size) * factor
  );
};