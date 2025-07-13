import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';

const Footer = () => {
  const styles = useStyles();

  return (
    <View style={styles.container} accessible={true} accessibilityLabel="Footer section with contact and legal information">

      <Text
        style={styles.firstTitle}
        accessibilityRole="header"
        accessibilityLabel="Connect with Bolder Today"
      >
        Connect with Bolder Today
      </Text>

      <Text
        style={styles.secondTitle}
        accessibilityLabel="Ready to elevate your AI strategy? Let’s discuss how we can help your business thrive."
      >
        Ready to elevate your AI strategy? Let’s discuss how we can help your business thrive.
      </Text>

      <View style={styles.button}>
        <TextInput
          style={styles.buttonText}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel="Email input field"
          accessibilityHint="Enter your email to subscribe"
          accessibilityRole="text"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, styles.secondButton]}
        onPress={() => console.log('Subscribed!')}
        accessibilityRole="button"
        accessibilityLabel="Subscribe to newsletter"
        accessibilityHint="Submits your email to receive updates"
      >
        <Text style={styles.secondButtonText}>Subscribe</Text>
      </TouchableOpacity>

      <View accessible={true} accessibilityLabel="Legal information section">
        <Text
          style={styles.copyright}
          accessibilityRole="text"
          accessibilityLabel="© 2024 Bolder. All rights reserved."
        >
          © 2024 Bolder. All rights reserved.
        </Text>

        <View style={styles.row}>
          <Text
            style={styles.underline}
            accessibilityRole="link"
            accessibilityLabel="Privacy Policy"
          >
            Privacy Policy
          </Text>
          <Text
            style={styles.underline}
            accessibilityRole="link"
            accessibilityLabel="Terms of Service"
          >
            Terms of Service
          </Text>
          <Text
            style={styles.underline}
            accessibilityRole="link"
            accessibilityLabel="Cookie Settings"
          >
            Cookie Settings
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
