import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <Footer aspectRatio="small">
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
            onPress={() => {
              router.navigate('/(tabs)/welcome');
            }}
            style={styles.back}
          >
            <Text style={styles.backText}>DIAL IN</Text>
          </TouchableOpacity>
          <TouchableOpacity
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
            style={styles.back}
          >
            <Text style={styles.backText}>BUY COFFEE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.navigate('/(tabs)/aboutRecipe');
            }}
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
    color: colors.primary,
  },
  logoImage: {
    height: 50,
    width: '100%',
    left: '20%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
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
