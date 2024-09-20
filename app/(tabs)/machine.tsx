import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import CustomTextInput from '@/components/CustomTextInput';
import ImagePickerModal from './modalComponent';

export default function MachineScreen() {
  const [text, onChangeText] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Footer aspectRatio="small">
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>ENTER YOUR</Text>
          <Text style={styles.title}>MACHINE</Text>
        </View>
        <ImagePickerModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onImagePicked={(uri) => setImage(uri)}
        />
        <View style={styles.secondContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
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
        <TouchableOpacity
          style={styles.bottomContainer}
          onPress={() => router.replace('/(tabs)/coffee')}
        >
          <Text style={styles.bottomText}>CONTINUE</Text>
          <AntDesign name="rightcircle" size={30} color={colors.primary} />
        </TouchableOpacity>
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
  container: {
    gap: 60,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    gap: 20,
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
