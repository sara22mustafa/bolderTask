import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useStyles } from "./styles";

const HeroSection = () => {
  const animatedValue = useRef(new Animated.Value(150)).current;
  const fadeOutValue = useRef(new Animated.Value(1)).current;
  const { height: screenHeight } = Dimensions.get("window");
  const styles = useStyles({ height: screenHeight });

  const handleContactPress = () => {
    const email = "raheem.amer@bolder.fit";
    const subject = "Contact from Bolder App";
    const body = "Hi, I’d like to know more about your services.";
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url).catch(() =>
      Alert.alert("Notice", "This feature only works on a real mobile device.")
    );
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(animatedValue, {
        toValue: -200,
        duration: 4000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(fadeOutValue, {
        toValue: 0,
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
        style={[
          styles.animatedImg,
          {
            transform: [
              { translateX: -150 },
              { translateY: animatedValue },
            ],
            opacity: fadeOutValue,
          },
        ]}
        accessibilityLabel="Hero animation image"
        accessible={true}
      />

      <View
        style={styles.container}
        accessible={true}
        accessibilityLabel="Hero section with brand, title, and call-to-action"
      >
        <View style={styles.header}>
          <View
            style={styles.rightSection}
            accessible={true}
            accessibilityLabel="Bolder brand header"
          >
            <Text
              style={styles.logo}
              accessibilityRole="text"
              accessibilityLabel="Letter b for bolder"
            >
              b.
            </Text>
            <Text
              style={styles.brandName}
              accessibilityRole="text"
              accessibilityLabel="Brand name bolder"
            >
              bolder
            </Text>
            <Text
              style={styles.brandSuffix}
              accessibilityRole="text"
              accessibilityLabel="Dot fit"
            >
              .fit
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.button]}
            onPress={handleContactPress}
            accessibilityRole="button"
            accessibilityLabel="Contact us"
            accessibilityHint="Opens your mail app to contact the Bolder team"
          >
            <Text style={styles.buttonText}>contact us</Text>
          </TouchableOpacity>
        </View>

        <View
          style={styles.titleWrapper}
          accessible={true}
          accessibilityRole="header"
          accessibilityLabel="Section title: Lorem ipsum"
        >
          <Text style={styles.title}>Lorem ipsum</Text>
        </View>

        <Text
          style={[styles.sectionTitle, styles.transformLine]}
          accessibilityRole="text"
          accessibilityLabel="Transform your business"
        >
          Transform Your Business
        </Text>

        <View
          style={styles.inlineTextRow}
          accessible={true}
          accessibilityLabel="With AI expertise"
        >
          <Text
            style={styles.sectionTitle}
            accessibilityLabel="with"
            accessibilityRole="text"
          >
            with{" "}
          </Text>

          <MaskedView
            maskElement={
              <Text
                style={styles.subHeader}
                accessibilityRole="text"
                accessibilityLabel="AI expertise"
              >
                AI Expertise
              </Text>
            }
          >
            <LinearGradient colors={["#E96231", "#FF00D9", "#74A7FF"]}>
              <Text
                style={[styles.subHeader, { opacity: 0 }]}
                accessibilityLabel="AI expertise"
              >
                AI Expertise
              </Text>
            </LinearGradient>
          </MaskedView>
        </View>

        <Text
          style={styles.paragraph}
          accessibilityLabel="Bolder helps businesses use AI to innovate and grow by providing customized solutions that align with their specific goals"
        >
          Bolder helps businesses use AI to innovate and grow by providing
          customized solutions that align with their specific goals.
        </Text>

        <ImageBackground
          source={require("../../assets/images/background.png")}
          style={[styles.background]}
          resizeMode="cover"
          accessible={false}
        >
          <View style={styles.imageButton}>
            <TouchableOpacity
              style={[styles.button, styles.secondButton]}
              onPress={handleContactPress}
              accessibilityRole="button"
              accessibilityLabel="Contact us"
              accessibilityHint="Opens your mail app to contact the Bolder team"
            >
              <Text style={styles.buttonText}>contact us</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default HeroSection;
