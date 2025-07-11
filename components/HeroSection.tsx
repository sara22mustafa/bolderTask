import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.rightSection}>
          <Text style={styles.logo}>b.</Text>
          <Text style={styles.firstWord}>bolder</Text>
          <Text style={styles.fit}>.fit</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>contact us</Text>
        </View>
      </View>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 28,
   backgroundColor: '#2463EB',
   borderRadius:13,
   paddingVertical:5,
   paddingHorizontal:10,
  marginRight:14,
  color:'white'  },
  firstWord: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#2463EB',
    marginRight: 2,
  },
  fit: {
    fontFamily: 'Inter-Regular',
    fontSize: 22,
    color: '#000',
  },
  button: {
    backgroundColor: '#0E0E0E',
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  buttonText: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    fontSize: 16,
  },
});
