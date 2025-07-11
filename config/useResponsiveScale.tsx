import { useMemo } from 'react';
import { PixelRatio, useWindowDimensions } from 'react-native';

const baseWidth = 375; // Figma design width
const baseHeight = 812; // Figma design height

export const useResponsiveScale = () => {
  const { width, height } = useWindowDimensions();

  let myHeight = height;

  const isLandscape = width > height;
  let targetWidth = baseWidth;
  let targetHeight = baseHeight;

  if (isLandscape) {
    targetWidth = baseHeight;
    targetHeight = baseWidth;
  }

  return useMemo(
    () => ({
      isLandscape,
      scaleWidth: (size: number = targetWidth) => (width / targetWidth) * size,
      scaleWidthPixelRatio: (size: number = targetWidth) => (width / baseWidth) * size,
      scaleHeight: (size: number = targetHeight) => (myHeight / targetHeight) * size,
      scale: (size: number = targetWidth) =>
        Math.min((width / targetWidth) * size, (myHeight / targetHeight) * size) * 1.2,
      scaleFont: (size: number = targetWidth) =>
        PixelRatio.roundToNearestPixel(
          Math.min((width / targetWidth) * size, (myHeight / targetHeight) * size) *
            1.2 *
            PixelRatio.getFontScale(),
        ),
    }),
    [width, height],
  );
};
