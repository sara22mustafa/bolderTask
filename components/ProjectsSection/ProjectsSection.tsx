import { colors } from '@/config/colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useStyles } from './styles';
import { useResponsiveScale } from '@/config/useResponsiveScale';

const ProjectsSection = () => {
  const styles = useStyles();
  const { scale } = useResponsiveScale();
  const { width } = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const scrollToCard = (index: number) => {
  if (index >= 0 && index < cards.length) {
    const cardWidth = width - scale(25);
    const horizontalMargin = (width - cardWidth) / 2; // leftover space to center
    const scrollX = index * cardWidth - horizontalMargin;
    scrollRef.current?.scrollTo({ x: scrollX, animated: true });
    setCurrentIndex(index);
  }
};

  const cards = [
    {
      tag: 'AI',
      time: '4 min read',
      title: 'Retail Optimization Case Study',
      description: 'Increased sales by 30% through AI-driven inventory management.',
    },
    {
      tag: 'Category',
      time: '3 min read',
      title: 'Healthcare Innovation Case Study',
      description: 'Enhanced patient care with predictive analytics and AI solutions.',
    },
    {
      tag: 'AI',
      time: '7 min read',
      title: 'Blog title heading will go here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <Text style={styles.secondTitle}>Our Success Stories</Text>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollRef}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((card, index) => (
          <LinearGradient key={index}  colors={colors.gradient} style={styles.gradientBorder}>
          <View style={styles.card}>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.flag}>{card.tag}</Text>
                  <Text style={styles.text}>{card.time}</Text>
                </View>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDesc}>{card.description}</Text>
              </View>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.readMore}>Read more {'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          </LinearGradient>
        ))}
      </ScrollView>

      <View style={styles.arrowContainer}>
        <TouchableOpacity style={styles.arrow1} onPress={() => scrollToCard(currentIndex - 1)} disabled={currentIndex === 0}>
          <Text style={styles.arrowText}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.arrow} onPress={() => scrollToCard(currentIndex + 1)} disabled={currentIndex === cards.length - 1}>
          <Text style={styles.arrowText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProjectsSection;
