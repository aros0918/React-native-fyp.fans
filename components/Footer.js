import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('../assets/big.png')} style = {styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    top: 254,
    backgroundColor: '#FFF',
    padding: 10,
    alignItems: 'center',
    width : '100%',
    height : 4150,
    // position: 'absolute',
  },
  footerText: {
    fontSize: 16,
    color: '#333',
  },
  image: {
    width: 394,
    height: 4140,
  }
});

export default Footer;