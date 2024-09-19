import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <Footer>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>JOE</Text>
          <Image
            source={require('@/assets/images/average-joe.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            // title='SIGN IN'
            onPress={() => {
              router.replace('/(tabs)/welcome');
              // router.replace('/(tabs)/recipeTimer');
            }}
            style={styles.back}
          >
            <Text style={styles.backText}>DIAL IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // title='SIGN IN'
            // onPress={handleSignIn}
            onPress={() => {
              Linking.openURL(
                'https://averagejoescoffee.com.au/pages/coffee-support'
              );
            }}
            style={styles.back}
          >
            <Text style={styles.backText}>CONTACT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://averagejoescoffee.com.au/collections/coffee'
              );
            }}
            // title='SIGN IN'
            // onPress={handleSignIn}
            style={styles.back}
          >
            <Text style={styles.backText}>BUY COFFEE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // title='SIGN IN'
            // onPress={handleSignIn}
            style={styles.back}
          >
            <Text style={styles.backText}>ABOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Footer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    gap: 20,
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    // position: 'relative',
    // marginBottom: 10,
    color: colors.primary,
  },
  logoImage: {
    // width: 50, // Adjust width as needed
    height: 50, // Adjust height as needed
    width: '100%',
    // position: 'absolute',
    left: '20%',

    resizeMode: 'contain', // Ensures the image scales correctly
    alignSelf: 'center', // Centers the image horizontally
    marginBottom: 20,
    // marginVertical: 20, // Adds space above and below the logo
  },
  back: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  backText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
