import colors from '@/components/colors';
import CustomTextInput from '@/components/CustomTextInput';
import JoeLogo from '@/components/JoeLogo';
import { auth } from '@/firebase';
import { router } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsandconditions, setTermsandconditions] = useState(false);
  const [messageError, setMessageError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    const errors = {
      firstName: firstName === '',
      lastName: lastName === '',
      email: !emailRegex.test(email),
      phoneNumber: !phoneRegex.test(phoneNumber),
      password: password.length <= 6,
      confirmPassword: password !== confirmPassword || confirmPassword === '',
    };
    setMessageError(errors);
    return !Object.values(errors).some((error) => error);
  };

  const signUpWithEmail = async () => {
    if (validateFields()) {
      console.log(auth, email, password)
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => router.replace('/(tabs)/home'))
        .catch((err) => {
          console.log(err);
        });
    } else {
      Alert.alert('Invalid Data', 'Please correct the highlighted fields');
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/(tabs)/home');
      }
    });

    return () => unsub();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <JoeLogo />
      <View style={styles.secondContainer}>
        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <CustomTextInput
              style={[
                styles.input,
                messageError.firstName ? styles.errorBorder : null,
              ]}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomTextInput
              style={[
                styles.input,
                messageError.lastName ? styles.errorBorder : null,
              ]}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
        <CustomTextInput
          style={[
            styles.input,
            messageError.email ? styles.errorBorder : null,
          ]}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <CustomTextInput
          style={[
            styles.input,
            messageError.phoneNumber ? styles.errorBorder : null,
          ]}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <CustomTextInput
          style={[
            styles.input,
            messageError.password ? styles.errorBorder : null,
          ]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <CustomTextInput
          style={[
            styles.input,
            messageError.confirmPassword ? styles.errorBorder : null,
          ]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <View style={styles.rememberContainer}>
          <TouchableOpacity
            onPress={() => setTermsandconditions(!termsandconditions)}
            style={styles.checkbox}
          >
            {termsandconditions && <View style={styles.checkboxChecked} />}
          </TouchableOpacity>
          <Text style={styles.rememberText}>
            I agree to the{' '}
            <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
              Terms and Conditions
            </Text>
          </Text>
        </View>
        <TouchableOpacity onPress={signUpWithEmail} style={styles.signIn}>
          <Text style={styles.signinText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.replace('/(tabs)/');
          }}
          style={styles.back}
        >
          <Text style={styles.backText}>BACK TO SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  secondContainer: {
    gap: 20,
    marginHorizontal: 20,
    backgroundColor: colors.background,
  },
  input: {
    height: 50,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  errorBorder: {
    borderColor: colors.primary,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
  },
  rememberText: {
    flex: 1,
    marginLeft: 10,
  },
  signIn: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  signinText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  back: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },
  backText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
