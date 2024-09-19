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
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
// import FooterSVG from '@/assets/images/footer.svg';
export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/(tabs)/home');
      }
    });

    return () => unsub();
  }, []);

  const signInWithEmail = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => router.replace('/(tabs)/home'))
      .catch((err) => {
        console.log(err);
        Alert.alert(err.message);
      });
  };

  return (
    <Footer>
      <View style={styles.container}>
        <JoeLogo />

        <View style={styles.secondContainer}>
          <Text
            // adjustsFontSizeToFit={true}
            // numberOfLines={1}
            style={styles.subtitle}
          >
            Helping you dial in coffee at home
          </Text>

          <CustomTextInput
            style={styles.input}
            placeholder="E-mail / Phone Number / Username"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomTextInput
            style={styles.input}
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
            {/* <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}> */}
            <TouchableOpacity onPress={() => null}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            // title='SIGN IN'
            onPress={signInWithEmail}
            style={styles.signIn}
          >
            <Text style={styles.signinText}>SIGN IN</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account?</Text>
            {/* <TouchableOpacity onPress={() => navigation.navigate('SignUp')}> */}
            <TouchableOpacity
              onPress={() => {
                router.replace('/(tabs)/signup');
              }}
            >
              <Text style={styles.signupLink}> SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View>
        <View></View>
        <View></View>
      </View> */}
      </View>
    </Footer>
  );
}
const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    // alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },

  secondContainer: {
    // flex: 1,
    // justifyContent: 'center',
    gap: 20,
    // backgroundColor: colors.background,
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    // position: 'relative',
    // marginBottom: 10,
    color: colors.primary,
  },
  logoImage: {
    // width: 50, // Adjust width as needed
    height: 40, // Adjust height as needed
    width: '100%',
    // position: 'absolute',
    left: '20%',

    resizeMode: 'contain', // Ensures the image scales correctly
    alignSelf: 'center', // Centers the image horizontally
    marginBottom: 20,
    // marginVertical: 20, // Adds space above and below the logo
  },
  subtitle: {
    textAlign: 'center',
    fontWeight: '600',
    // fontSize: 20,
    // fontWeight: "500",
    // marginBottom: 30,
    fontSize: screenWidth * 0.055,
  },
  input: {
    height: 50,
    borderColor: colors.white,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    // marginBottom: 20,
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
    // marginTop: 20,
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
