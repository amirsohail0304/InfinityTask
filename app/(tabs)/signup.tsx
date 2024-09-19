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
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsandconditions, setTermsandconditions] = useState(false);

  const signUpWithEmail = async () => {
    if (email.length && password.length && confirmPassword.length) {
      if (password !== confirmPassword) {
        Alert.alert('Passwords do not match!');
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => router.replace('/(tabs)/home'))
        .catch((err) => {
          console.log(err);
        });
    } else {
      Alert.alert('Invalid Data', 'Please fill email and password');
    }
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    // Add sign-up logic here
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
    <View style={styles.container}>
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
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={{ flex: 1 }}>
            <CustomTextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <CustomTextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <CustomTextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <CustomTextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomTextInput
          style={styles.input}
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
          {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}> */}
          {/* <TouchableOpacity onPress={() => null}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity> */}
        </View>

        <TouchableOpacity
          // title='SIGN IN'
          onPress={signUpWithEmail}
          style={styles.signIn}
        >
          <Text style={styles.signinText}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.replace('/(tabs)/');
          }}
          // title='SIGN IN'
          // onPress={handleSignIn}
          style={styles.back}
        >
          <Text style={styles.backText}>BACK TO SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  input: {
    height: 50,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginBottom: 30,
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
  // backText: {
  //   // marginTop: 20,
  //   textAlign: 'center',
  //   color: '#007BFF',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
});
