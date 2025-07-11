import useCustomFonts from '@/components/useCustomFonts';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ServicesSection from '../components/ServicesSection';

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
    <ScrollView style={styles.container}>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </ScrollView>
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
