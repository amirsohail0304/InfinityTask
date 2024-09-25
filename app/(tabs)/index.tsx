import colors from '@/components/colors';
import CustomTextInput from '@/components/CustomTextInput';
import Footer from '@/components/Footer';
import JoeLogo from '@/components/JoeLogo';
import { auth } from '@/firebase';
import { router } from 'expo-router';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [messageError, setMessageError] = useState({
    email: false,
    password: false,
  });

  // console.log('Email:', email);
  // console.log('Password:', password);
  // console.log('Remember Me:', rememberMe);


  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/(tabs)/home');
      }
    });

    return () => unsub();
  }, []);

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const isEmailValid = emailRegex.test(email);
    const isPhoneNumberValid = phoneRegex.test(email);
    const isValidePassword = passwordRegex.test(password)
    if (!isEmailValid && !isPhoneNumberValid) {
      Alert.alert('Invalid email or phone number format');
    }
    if (!passwordRegex.test(password)) {
      Alert.alert(
        'Invalid password',
        'Password must be at least 8 characters long, contain at least one uppercase letter, and one number.'
      );
    }

    const errors = {
      email: !isEmailValid,
      password: !isValidePassword,
    };
    setMessageError(errors);
    setMessageError(errors);
    return !Object.values(errors).some((error) => error);
  };

  const signInWithEmail = async () => {
    if (validateFields()) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => router.replace('/(tabs)/home'))
        .catch((err) => {
          console.log(err);
          Alert.alert(err.message);
        });
    }
  };

  return (
    <Footer>
      <View style={styles.container}>
        <JoeLogo />
        <View style={styles.secondContainer}>
          <Text style={styles.subtitle}>
            Helping you dial in coffee at home
          </Text>
          <CustomTextInput
            style={[
              styles.input,
              messageError.email ? styles.errorBorder : null,
            ]}
            placeholder="E-mail / Phone Number / Username"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
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
          <View style={styles.rememberContainer}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
              style={styles.checkbox}
            >
              {rememberMe && <View style={styles.checkboxChecked} />}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember Me</Text>
            <TouchableOpacity onPress={() => null}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={signInWithEmail} style={styles.signIn}>
            <Text style={styles.signinText}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                router.replace('/(tabs)/signup');
              }}
            >
              <Text style={styles.signupLink}> SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Footer>
  );
}

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  secondContainer: {
    gap: 20,
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
  logoImage: {
    height: 40,
    width: '100%',
    left: '20%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: screenWidth * 0.055,
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
  forgotText: {
    // color: '#007BFF',
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupLink: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
  },
});
