import { useEffect } from 'react';
import { Asset } from 'expo-asset';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useCustomFonts from '@/config/useCustomFonts';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { useStyles } from './styles';

function AppContent() {
  const { colorsTheme, theme } = useTheme();
  const styles = useStyles();

  return (
    <>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colorsTheme.background}
      />
      <SafeAreaView style={styles.safeArea} edges={['left', 'right', 'bottom']}>
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
