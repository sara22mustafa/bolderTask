import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';

const Footer = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.firstTitle}>Connect with Bolder Today</Text>
      <Text style={styles.secondTitle}>
        Ready to elevate your AI strategy? Let’s discuss how we can help your business thrive.
      </Text>
      <View style={styles.button}>
        <TextInput
          style={styles.buttonText}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.secondButton]}
        onPress={() => console.log('Subscribed!')} >
        <Text style={styles.secondButtonText}>Subscribe</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.copyright}>© 2024 Bolder. All rights reserved.</Text>
        <View style={styles.row}>
          <Text style={styles.underline}>Privacy Policy</Text>
          <Text style={styles.underline}>Terms of Service</Text>
          <Text style={styles.underline}>Cookie Settings</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;
