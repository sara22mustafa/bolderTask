import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Alert, Animated, Dimensions, Easing, ImageBackground, Linking, Text, TouchableOpacity, View } from "react-native";
import { useStyles } from "./styles";

const HeroSection = () => {
const animatedValue = useRef(new Animated.Value(150)).current;
const fadeOutValue = useRef(new Animated.Value(1)).current;
const { height: screenHeight } = Dimensions.get('window');
const styles = useStyles({ height: screenHeight });
const handleContactPress = () => {
  const email = 'raheem.amer@bolder.fit'
  const subject = 'Contact from Bolder App';
  const body = 'Hi, I’d like to know more about your services.';
  const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  Linking.openURL(url).catch(() =>
  Alert.alert('Notice', 'This feature only works on a real mobile device.')
);

};

useEffect(() => {
  Animated.parallel([
    Animated.timing(animatedValue, {
      toValue: -200, // how far it moves up
      duration: 4000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }),
    Animated.timing(fadeOutValue, {
      toValue: 0, // fade out
      duration: 2000,
      easing: Easing.in(Easing.quad),
      useNativeDriver: true,
    }),
  ]).start();
}, []);
  return (
    <>
    <Animated.Image
  source={require("../../assets/images/intro.png")}
  style={[styles.animatedImg,
    {transform: [
        { translateX: -150 },
        { translateY: animatedValue },
      ],
      opacity: fadeOutValue,
    },
  ]}
/>

    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.rightSection}>
          <Text style={styles.logo}>b.</Text>
          <Text style={styles.brandName}>bolder</Text>
          <Text style={styles.brandSuffix}>.fit</Text>
        </View>
        <TouchableOpacity style={[styles.button]} onPress={handleContactPress}>
          <Text style={styles.buttonText}>contact us</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Lorem ipsum</Text>
      </View>
      <Text style={[styles.sectionTitle, styles.transformLine]}>
        Transform Your Business
      </Text>

      <View style={styles.inlineTextRow}>
        <Text style={styles.sectionTitle}>with </Text>
        <MaskedView
          maskElement={<Text style={styles.subHeader}>AI Expertise</Text>}>
          <LinearGradient colors={["#E96231", "#FF00D9", "#74A7FF"]}>
            <Text style={[styles.subHeader, { opacity: 0 }]}>AI Expertise</Text>
          </LinearGradient>
        </MaskedView>
      </View>

      <Text style={styles.paragraph}>
        Bolder helps businesses use AI to innovate and grow by providing
        customized solutions that align with their specific goals.
      </Text>
      <ImageBackground
        source={require("../../assets/images/background.png")}
        style={[styles.background]}
        resizeMode="cover">
        <View style={styles.imageButton}>
        <TouchableOpacity style={[styles.button,styles.secondButton]} onPress={handleContactPress}>
          <Text style={styles.buttonText}>contact us</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  </>
  );
};

export default HeroSection;
