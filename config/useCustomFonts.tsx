import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({

    // Cairo fonts
    'Cairo-Bold': require('../assets/fonts/Cairo-Bold.ttf'),
    'Cairo-Regular': require('../assets/fonts/Cairo-Regular.ttf'),
    'Cairo-SemiBold': require('../assets/fonts/Cairo-SemiBold.ttf'),


    'Cairo-Black': require('../assets/fonts/Cairo-Black.ttf'),
    'Cairo-ExtraBold': require('../assets/fonts/Cairo-ExtraBold.ttf'),
    'Cairo-ExtraLight': require('../assets/fonts/Cairo-ExtraLight.ttf'),
    'Cairo-Light': require('../assets/fonts/Cairo-Light.ttf'),
    'Cairo-Medium': require('../assets/fonts/Cairo-Medium.ttf'),

    // Inter 1Gpt fonts
    // 'Inter_1Gpt-Black': require('../assets/fonts/Inter_1Gpt-Black.ttf'),
    // 'Inter_1Gpt-BlackItalic': require('../assets/fonts/Inter_1Gpt-BlackItalic.ttf'),
    // 'Inter_1Gpt-Bold': require('../assets/fonts/Inter_1Gpt-Bold.ttf'),
    // 'Inter_1Gpt-BoldItalic': require('../assets/fonts/Inter_1Gpt-BoldItalic.ttf'),
    // 'Inter_1Gpt-ExtraBold': require('../assets/fonts/Inter_1Gpt-ExtraBold.ttf'),
    // 'Inter_1Gpt-ExtraBoldItalic': require('../assets/fonts/Inter_1Gpt-ExtraBoldItalic.ttf'),
    // 'Inter_1Gpt-ExtraLight': require('../assets/fonts/Inter_1Gpt-ExtraLight.ttf'),
    // 'Inter_1Gpt-ExtraLightItalic': require('../assets/fonts/Inter_1Gpt-ExtraLightItalic.ttf'),
    // 'Inter_1Gpt-Italic': require('../assets/fonts/Inter_1Gpt-Italic.ttf'),
    // 'Inter_1Gpt-Light': require('../assets/fonts/Inter_1Gpt-Light.ttf'),
    // 'Inter_1Gpt-LightItalic': require('../assets/fonts/Inter_1Gpt-LightItalic.ttf'),
    // 'Inter_1Gpt-Medium': require('../assets/fonts/Inter_1Gpt-Medium.ttf'),
    // 'Inter_1Gpt-MediumItalic': require('../assets/fonts/Inter_1Gpt-MediumItalic.ttf'),
    // 'Inter_1Gpt-Regular': require('../assets/fonts/Inter_1Gpt-Regular.ttf'),
    // 'Inter_1Gpt-SemiBold': require('../assets/fonts/Inter_1Gpt-SemiBold.ttf'),
    // 'Inter_1Gpt-SemiBoldItalic': require('../assets/fonts/Inter_1Gpt-SemiBoldItalic.ttf'),
    // 'Inter_1Gpt-Thin': require('../assets/fonts/Inter_1Gpt-Thin.ttf'),
    // 'Inter_1Gpt-ThinItalic': require('../assets/fonts/Inter_1Gpt-ThinItalic.ttf'),

    // Inter 2Gpt fonts
   // 'Inter_2Gpt-Black': require('../assets/fonts/Inter_2Gpt-Black.ttf'),

    // Inter 24pt fonts
    // 'Inter_24pt-ExtraLightItalic': require('../assets/fonts/inter_24pt-extraLightItalic.ttf'),
    // 'Inter_24pt-Italic': require('../assets/fonts/inter_24pt-italic.ttf'),
    // 'Inter_24pt-Light': require('../assets/fonts/inter_24pt-Light.ttf'),
    // 'Inter_24pt-LightItalic': require('../assets/fonts/inter_24pt-LightItalic.ttf'),
    'Inter_24pt-Medium': require('../assets/fonts/Inter_24pt-Medium.ttf'),
    'Inter_28pt-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter_28pt-Medium': require('../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_24pt-Regular.ttf'),

    // 'Inter_24pt-MediumItalic': require('../assets/fonts/inter_24pt-MediumItalic.ttf'),
    // 'Inter_24pt-SemiBold': require('../assets/fonts/inter_24pt-SemiBold.ttf'),
    // 'Inter_24pt-SemiBoldItalic': require('../assets/fonts/inter_24pt-SemiBoldItalic.ttf'),
    // 'Inter_24pt-Thin': require('../assets/fonts/inter_24pt-Thin.ttf'),
    // 'Inter_24pt-ThinItalic': require('../assets/fonts/inter_24pt-Thinitalic.ttf'),

    // Inter 28pt fonts
    ///'Inter_28pt-Black': require('../assets/fonts/inter_28pt-Black.ttf'),
    // 'Inter_28pt-BlackItalic': require('../assets/fonts/inter_28pt-BlackItalic.ttf'),
    // 'Inter_28pt-BoldItalic': require('../assets/fonts/inter_28pt-BoldItalic.ttf'),
    // 'Inter_28pt-ExtraBold': require('../assets/fonts/inter_28pt-ExtraBold.ttf'),
    // 'Inter_28pt-ExtraBoldItalic': require('../assets/fonts/inter_28pt-ExtraBoldItalic.ttf'),
    // 'Inter_28pt-ExtraLight': require('../assets/fonts/inter_28pt-ExtraLight.ttf'),
    // 'Inter_28pt-ExtraLightItalic': require('../assets/fonts/inter_28pt-ExtraLightItalic.ttf'),
    // 'Inter_28pt-Italic': require('../assets/fonts/inter_28pt-italic.ttf'),
    // 'Inter_28pt-Light': require('../assets/fonts/inter_28pt-Light.ttf'),
    // 'Inter_28pt-LightItalic': require('../assets/fonts/inter_28pt-LightItalic.ttf'),
    // 'Inter_28pt-MediumItalic': require('../assets/fonts/inter_28pt-MediumItalic.ttf'),
    // 'Inter_28pt-Regular': require('../assets/fonts/inter_28pt-Regular.ttf'),
    // 'Inter_28pt-SemiBold': require('../assets/fonts/inter_28pt-SemiBold.ttf'),
    // 'Inter_28pt-SemiBoldItalic': require('../assets/fonts/inter_28pt-SemiBoldItalic.ttf'),
    // 'Inter_28pt-Thin': require('../assets/fonts/inter_28pt-Thin.ttf'),

    // SpaceGrotesk fonts
    // 'SpaceGrotesk-Bold': require('../assets/fonts/SpaceGrotesk-Bold.ttf'),
    // 'SpaceGrotesk-Light': require('../assets/fonts/SpaceGrotesk-Light.ttf'),
    // 'SpaceGrotesk-Medium': require('../assets/fonts/SpaceGrotesk-Medium.ttf'),
    // 'SpaceGrotesk-Regular': require('../assets/fonts/SpaceGrotesk-Regular.ttf'),
    // 'SpaceGrotesk-SemiBold': require('../assets/fonts/SpaceGrotesk-SemiBold.ttf'),
  });

  return fontsLoaded;
}
