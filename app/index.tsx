import useCustomFonts from '@/config/useCustomFonts';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';

export default function Home() {
    const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    //paddingVertical:12,
   // paddingHorizontal:20,
    //flex: 1,
    backgroundColor: '#fff',
  },
    loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
