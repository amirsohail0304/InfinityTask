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

export default function IntroScreen() {
  const [text, onChangeText] = useState('');
  return (
    <Footer aspectRatio="small">
      <View style={styles.container}>
        <View>
          <Image
            source={require('@/assets/images/avatar.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.welcome}>WELCOME MATT!</Text>
          <View>
            <Text style={styles.title}>
              I am JOE. I am here to help you dial in those beans on this
              machine.
            </Text>
            <Text style={styles.title}>
              Dialing in coffee can be tough, but not when I am here to help!
            </Text>
            <Text style={styles.title}>
              The goal is that by the time we are done your coffee tastes
              delicious and you have an understanding of how to dial in
              espresso.
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              Before we start you will need the following to dial in coffee.
            </Text>
            <Text style={styles.title}>
              1. The coffee you are using needs to be fresh, roasted less than
              40 days ago. If its older than that chances are its going off,
              which makes dialing it in super hard. You can still try but im
              telling you now that it will be tough.
            </Text>
            <Text style={styles.title}>
              2. Freshly ground - If you are buying pre ground coffee, this is
              the reason your coffee isnt great.
            </Text>
            <Text style={styles.title}>
              3. Scales - Even kitchen scales will do for now but you should
              invest in some coffee scales.
            </Text>
            <Text style={styles.title}>
              4. a timer - Can use your phone (coffee scales will have then
              inbuilt)
            </Text>
            <Text style={styles.title}>
              5. We are going to use a double shot basket. 18g to 22g depending
              on your machine.
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              If you need coffee or scales you can grab them here.
            </Text>
          </View>
          <View>
            <Text style={styles.title}>
              If you have good coffee and some scales let get cracking!
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => router.replace('/(tabs)\recipe')}
      >
        <Text style={styles.bottomText}>YES</Text>
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
    // marginVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    gap: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    // position: 'relative',
    // marginBottom: 10,
    color: colors.primary,
  },
  title: {
    fontSize: 13,
    // fontWeight: 'bold',
    textAlign: 'left',
    // position: 'relative',
    // marginBottom: 10,
    color: colors.primary,
  },
  logoImage: {
    marginTop: 20,
    // backgroundColor: 'grey',
    // borderWidth: 5,

    // width: 50, // Adjust width as needed
    height: 100, // Adjust height as needed
    // width: 'auto',
    // position: 'absolute',
    // left: '20%',

    resizeMode: 'contain', // Ensures the image scales correctly
    alignSelf: 'center', // Centers the image horizontally
    // marginBottom: 20,
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
