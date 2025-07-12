import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>HeroSection</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    paddingVertical:70,
    paddingHorizontal:20,
    // backgroundColor: 'red',
  },
});
