import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import colors from './colors';

const Footer: any = ({ aspectRatio, children }: any) => {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <View style={styles.view1}>{children}</View>
      <Image
        source={require('@/assets/images/footer-small.png')}
        style={
          aspectRatio == 'small' ? styles.samllLogoImage : styles.logoImage
        }
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  view1: {
    flex: 1,
  },
  logoImage: {
    width: '100%',
    height: undefined,
    aspectRatio: '225/131',
  },
  samllLogoImage: {
    width: '100%',
    height: undefined,
    aspectRatio: '300/100',
  },
});

export default Footer;
