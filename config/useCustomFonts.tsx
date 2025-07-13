import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({

    // Cairo fonts
    'Cairo-Bold': require('../assets/fonts/Cairo-Bold.ttf'),

    // Inter 2Gpt fonts
    'Inter_24pt-Medium': require('../assets/fonts/Inter_24pt-Medium.ttf'),
    'Inter_28pt-Bold': require('../assets/fonts/Inter_28pt-Bold.ttf'),
    'Inter_28pt-Medium': require('../assets/fonts/Inter_28pt-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter_24pt-Regular.ttf'),
  });

  return fontsLoaded;
}
