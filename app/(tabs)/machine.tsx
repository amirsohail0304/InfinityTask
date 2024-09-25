import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import CustomTextInput from '@/components/CustomTextInput';
import ImagePickerModal from './modalComponent';
import GoBackButton from './backButton';

export default function MachineScreen() {
  const [text, onChangeText] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [messageError, setMessaage] = useState('');

  const handleResult = () => {
    if (text.trim().length > 0) {
      setMessaage("")
      router.navigate('/(tabs)/coffee')
      onChangeText('')
    }
    else {
      setMessaage("machine name field is required")
    }
  };
  return (
    <Footer aspectRatio="small">
      <ImagePickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onImagePicked={(uri) => setImage(uri)}
      />
      <GoBackButton />
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.welcome}>ENTER YOUR</Text>
          <Text style={styles.title}>MACHINE</Text>
        </View>
        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.back}
          >
            <Text style={styles.backText}>TAKE A PHOTO</Text>
          </TouchableOpacity>
          <Text style={styles.ORText}>OR</Text>
          <CustomTextInput
            style={[styles.input, messageError ? styles.errorBorder : null]}
            placeholder="Enter Name here"
            value={text}
            onChangeText={onChangeText}
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.bottomContainer}
            onPress={handleResult}
          >
            <Text style={styles.bottomText}>CONTINUE</Text>
            <AntDesign name="rightcircle" size={30} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
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
  errorBorder: {
    borderColor: colors.primary
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    // gap: 20,
  },
  welcome: {
    fontSize: 35,
    fontWeight: 'medium',
    textAlign: 'left',
    color: colors.primary,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'left',
    color: colors.primary,
  },
  back: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    marginTop: 20
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
    paddingVertical: 20
  },
  bottomText: {
    color: colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
  },
  bottomContainer: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20
  },
});
