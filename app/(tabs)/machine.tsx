import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
  Linking,
  TextInput,
  Alert,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import CustomTextInput from '@/components/CustomTextInput';

import * as ImagePicker from 'expo-image-picker';

export default function WelcomeScreen() {
  const [text, onChangeText] = useState('');
  const [image, setImage] = useState<string | null>(null);  // Define image as string or null

  // Function to open options to either take a photo or choose from the gallery
  const pickImage = async () => {
    const choice = await new Promise((resolve) =>
      Alert.alert(
        'Select an option',
        'Would you like to take a photo or select from the gallery?',
        [
          { text: 'Cancel', onPress: () => resolve(null), style: 'cancel' },
          { text: 'Take Photo', onPress: () => resolve('camera') },
          { text: 'Choose from Gallery', onPress: () => resolve('gallery') },
        ]
      )
    );

    if (choice === 'camera') {
      let cameraResult = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!cameraResult.canceled && cameraResult.assets) {
        setImage(cameraResult.assets[0].uri);  // Correct way to assign the image URI
      }
    } else if (choice === 'gallery') {
      let galleryResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!galleryResult.canceled && galleryResult.assets) {
        setImage(galleryResult.assets[0].uri);  // Correct way to assign the image URI
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
      if (cameraStatus !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);
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
            onPress={pickImage}
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
    fontSize: 35,
    fontWeight: 'medium',
    textAlign: 'left',
    // position: 'relative',
    // marginBottom: 10,
    color: colors.primary,
  },
  title: {
    fontSize: 50,
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
    fontSize: 20,
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
