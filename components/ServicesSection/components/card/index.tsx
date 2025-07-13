import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useStyles } from './styles';
import Star from '@/assets/svgs/Star';
import Tags from '@/assets/svgs/Tags';

const { width } = Dimensions.get('window');

type CardProps = {
  title?: string;
  description?: string;
  withLogo?: boolean;
  withIcons?: any;
  multipleTags?: string[];
  oneTag?: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  description,
  multipleTags,
  oneTag,
  withIcons,
  withLogo,
}) => {
  const styles = useStyles();

  return (
    <View
      style={styles.card}
      accessible
      accessibilityRole="summary"
      accessibilityLabel={`Card titled ${title}. ${description}`}
    >
      <LinearGradient colors={['#1a1a1a', '#0d0d0d']} style={styles.innerCard}>
        <View style={styles.innerContainer}>

          {withLogo && (
            <View style={styles.wrapper}>
              <LinearGradient
                colors={['rgba(105, 145, 232, 0.1)', 'rgba(73, 121, 224, 0)']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.logoGradient}
              >
                <Text
                  style={[styles.logoBox, styles.logo]}
                  accessible
                  accessibilityLabel="Bolder logo"
                >
                  b.
                </Text>
              </LinearGradient>
            </View>
          )}

          {withIcons && (
            <View style={styles.tagContainer}>
              <View style={styles.wrapper}>
                <LinearGradient
                  colors={['rgba(105, 145, 232, 0.1)', 'rgba(73, 121, 224, 0)']}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.logoGradient}
                >
                  <View style={styles.icon}>
                    <Star />
                  </View>
                </LinearGradient>
              </View>

              <View style={styles.wrapper}>
                <LinearGradient
                  colors={['rgba(105, 145, 232, 0.1)', 'rgba(73, 121, 224, 0)']}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.logoGradient}
                >
                  <View style={styles.icon}>
                    <Tags />
                  </View>
                </LinearGradient>
              </View>
            </View>
          )}

          {multipleTags && (
            <View
              style={styles.tagWrapper}
              accessible
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
            <View style={styles.wrapper}>
              <LinearGradient
                colors={['rgba(105, 145, 232, 0.1)', 'rgba(73, 121, 224, 0)']}
                start={{ x: 0.5, y: 0.5 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.logoGradient}
              >
                <Text
                  style={[styles.logoBox, styles.logo]}
                  accessible
                  accessibilityLabel="Bolder logo"
                >
                  {oneTag}
                </Text>
              </LinearGradient>
            </View>
          )}
        </View>

        <Text
          style={styles.cardTitle}
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
