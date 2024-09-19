import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import colors from './colors';

const JoeLogo: any = ({ children }: any) => {
  return (
    <View>
      <Text style={styles.title}>JOE</Text>
      <Image
        source={require('@/assets/images/average-joe.png')}
        style={styles.logoImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
  logoImage: {
    height: 40, // Adjust height as needed
    width: '100%',
    left: '20%',
    resizeMode: 'contain', // Ensures the image scales correctly
    alignSelf: 'center', // Centers the image horizontally
    marginBottom: 10,
  },
});

export default JoeLogo;
