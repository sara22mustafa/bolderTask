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
    <View style={styles.card}>
      <LinearGradient colors={['#1a1a1a', '#0d0d0d']} style={styles.innerCard}>
        <View style={styles.innerContainer}>
          {withLogo && (
            <View style={styles.logoBox}>
              <Text style={styles.logo}>b.</Text>
            </View>
          )}

          {/* {icons && (
            <View style={styles.tagContainer}>
              {icons.map((icon: any, index: number) => (
                <Text key={index} style={styles.tag}>
                  {icon}
                </Text>
              ))}
            </View>
          )} */}

          {multipleTags && (
            <View style={styles.tagWrapper}>
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

          {oneTag && <Text style={styles.oneTag}>{oneTag}</Text>}
        </View>

        <Text style={styles.text}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </LinearGradient>
    </View>
  );
};

const ServicesSection = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services</Text>
      <Text style={styles.secondTitle}>
        Transform Your Business with AI Solutions
      </Text>
      <Text style={styles.title}>
        A short paragraph giving more context on our services, what we actually
        do.
      </Text>

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
