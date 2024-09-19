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

export default function WelcomeScreen() {
  return (
    <Footer>
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>WELCOME TO</Text>
          <Text style={styles.title}>JOE</Text>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={() => {
              router.replace('/(tabs)/coffee');
            }}
            style={styles.back}
          >
            <Text style={styles.backText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Footer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 60,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {},
  welcome: {
    fontSize: 50,
    fontWeight: 'medium',
    textAlign: 'left',
    // position: 'relative',
    // marginBottom: 10,
    color: colors.primary,
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'left',
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
