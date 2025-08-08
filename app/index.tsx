import useCustomFonts from '@/config/useCustomFonts';
import { Asset } from 'expo-asset';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { useStyles } from './styles';

function AppContent() {
  const { colorsTheme, theme } = useTheme();
  const styles = useStyles();
 const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorsTheme.background}
      />
      <SafeAreaView style={ {paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
        <KeyboardAvoidingView
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <Footer />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default function Home() {
  const fontsLoaded = useCustomFonts();
  const styles = useStyles();

  useEffect(() => {
    Asset.loadAsync([
      require('../assets/images/background.png'),
      require('../assets/images/intro.png'),
    ]);
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}