import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useStyles } from './styles';

const { width } = Dimensions.get('window');

type CardProps = {
  title?: string;
  description?: string;
  withLogo?: boolean;
  icons?: any;
  multipleTags?: string[];
  oneTag?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  icons,
  multipleTags,
  oneTag,
  withLogo,
}) => {
  const styles = useStyles();

  return (
    <View
      style={styles.card}
      accessible={true}
      accessibilityRole="summary"
      accessibilityLabel={`Card titled ${title}. ${description}`}
    >
      <LinearGradient colors={['#1a1a1a', '#0d0d0d']} style={styles.innerCard}>
        <View style={styles.innerContainer}>
          {withLogo && (
            <View
              style={styles.logoBox}
              accessible={true}
              accessibilityLabel="Bolder logo"
            >
              <Text style={styles.logo}>b.</Text>
            </View>
          )}

          {/* Optional icons, commented out */}
          {/*
          {icons && (
            <View style={styles.tagContainer}>
              {icons.map((icon: any, index: number) => (
                <Text key={index} style={styles.tag}>
                  {icon}
                </Text>
              ))}
            </View>
          )} */}

          {multipleTags && (
            <View
              style={styles.tagWrapper}
              accessible={true}
              accessibilityLabel={`Tags: ${multipleTags.join(', ')}`}
            >
              <View style={styles.tagRow}>
                <Text style={styles.tag}>{multipleTags[0]}</Text>
                <Text style={styles.tag}>{multipleTags[1]}</Text>
              </View>
              <View style={styles.tagRowCenter}>
                <Text style={styles.tag}>{multipleTags[2]}</Text>
              </View>
              <View style={styles.tagRow}>
                <Text style={styles.tag}>{multipleTags[3]}</Text>
                <Text style={styles.tag}>{multipleTags[4]}</Text>
              </View>
            </View>
          )}

          {oneTag && (
            <Text
              style={styles.oneTag}
              accessibilityLabel={`Tag: ${oneTag}`}
              accessibilityRole="text"
            >
              {oneTag}
            </Text>
          )}
        </View>

        <Text
          style={styles.text}
          accessibilityRole="header"
          accessibilityLabel={title}
        >
          {title}
        </Text>
        <Text
          style={styles.description}
          accessibilityRole="text"
          accessibilityLabel={description}
        >
          {description}
        </Text>
      </LinearGradient>
    </View>
  );
};

const ServicesSection = () => {
  const styles = useStyles();

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Services section"
    >
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
        style={styles.title}
        accessibilityLabel="A short paragraph giving more context on our services, what we actually do."
      >
        A short paragraph giving more context on our services, what we actually do.
      </Text>

      {/* Cards below already have accessibility labels */}
      <Card
        withLogo
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
