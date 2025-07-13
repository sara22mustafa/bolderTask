import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useStyles } from './styles';
import { Card } from './components/card';

const ServicesSection = () => {
  const styles = useStyles();

  return (
    <View
      style={styles.container}
      accessible
      accessibilityLabel="Services section">
      <Text
        style={styles.title}
        accessibilityRole="header"
        accessibilityLabel="Services"
      >
        Services
      </Text>

      <Text
        style={styles.secondTitle}
        accessibilityLabel="Transform Your Business with AI Solutions"
      >
        Transform Your Business with AI Solutions
      </Text>

      <Text
        style={styles.desc}
        accessibilityLabel="A short paragraph giving more context on our services, what we actually do."
      >
        A short paragraph giving more context on our services, what we actually do.
      </Text>
      <Card
        withLogo
        withIcons
        title="Expert AI Consultation for Your Business"
        description="Our AI Consultation service provides insights and strategies tailored to your unique challenges."
      />
      <Card
        title="Innovative AI Solutions"
        description="We create cutting-edge AI products that drive efficiency and growth."
        multipleTags={['Design', 'Dev', 'SAAS', 'AI', 'HTML']}
      />
      <Card
        withLogo
        title="Solutions for Your AI Needs"
        description="Our approach ensures solutions that align with your business objectives."
        oneTag="AI"
      />
    </View>
  );
};

export default ServicesSection;
