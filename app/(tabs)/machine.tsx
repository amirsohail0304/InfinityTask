import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import { useState } from 'react';
import CustomTextInput from '@/components/CustomTextInput';

export default function WelcomeScreen() {
  const [text, onChangeText] = useState('');
  return (
    <Footer>
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>ENTER YOUR</Text>
          <Text style={styles.title}>MACHINE</Text>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            // title='SIGN IN'
            onPress={() => {
              router.replace('/(tabs)/');
            }}
            style={styles.back}
          >
            <Text style={styles.backText}>TAKE A PHOTO</Text>
          </TouchableOpacity>

          <Text style={styles.ORText}>OR</Text>

          <CustomTextInput
            style={styles.input}
            placeholder="Enter Name here"
            value={text}
            onChangeText={onChangeText}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => router.replace('/(tabs)/coffee')}
      >
        <Text style={styles.bottomText}>CONTINUE</Text>
        <AntDesign name="rightcircle" size={30} color={colors.primary} />
      </TouchableOpacity>
    </Footer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  container: {
    gap: 60,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    gap: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
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
  ORText: {
    alignSelf: 'center',

    color: colors.primary,
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottomText: {
    // alignSelf: 'center',
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  bottomContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
});
