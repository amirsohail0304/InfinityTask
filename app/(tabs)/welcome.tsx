import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import GoBackButton from './backButton';

export default function WelcomeScreen() {
  return (
    <Footer aspectRatio="small">
      <SafeAreaView style={styles.container}>
        <GoBackButton />
        <View>
          <Text style={styles.welcome}>WELCOME TO</Text>
          <Text style={styles.title}>JOE</Text>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={() => {
              router.navigate(`/(tabs)/machine`);
            }}
            style={styles.back}
          >
            <Text style={styles.backText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Footer>
  );
}
const styles = StyleSheet.create({
  container: {
    // gap: 60,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    marginTop: 20
  },
  welcome: {
    fontSize: 50,
    fontWeight: 'medium',
    textAlign: 'left',
    color: colors.primary,
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primary,
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
