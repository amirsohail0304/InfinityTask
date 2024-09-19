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
import { useMemo, useState } from 'react';
import CustomTextInput from '@/components/CustomTextInput';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';

export default function PortaFilterScreen() {
  const [portafilterSize, setPortafilterSize] = useState('54mm');

  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Option 1',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Option 2',
        value: 'option2',
      },
    ],
    []
  );
  const [selectedId, setSelectedId] = useState<string | undefined>();
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
          <View>
            <Text style={styles.title}>
              Okay so I need to know what coffee you are using? You can type
              below or take a photo and upload the bag
            </Text>
          </View>
        </View>

        <View style={styles.secondContainer}>
          {/* <Text style={styles.welcome}>WELCOME MATT!</Text> */}
          {/* <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
          /> */}
          <View style={{ padding: 10 }}>
            <Text>Select Portafilter Size:</Text>
            <Picker selectedValue={portafilterSize} onValueChange={itemValue => setPortafilterSize(itemValue)}>
              <Picker.Item label="51mm" value="51mm" />
              <Picker.Item label="54mm" value="54mm" />
              <Picker.Item label="58mm" value="58mm" />
            </Picker>

          </View>
          <View>
            <Text style={styles.title}>
              Okay great. Firstly what tise portafilter does your machine have ?
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.bottomContainer}
        onPress={() => router.replace('/(tabs)/')}
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
