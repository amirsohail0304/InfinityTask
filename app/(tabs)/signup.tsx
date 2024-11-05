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

import Toast from 'react-native-simple-toast';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import { Formik } from 'formik'
import { SignUpSchema } from '@/constants/MessageError';
import ErrorText from '@/components/ErrorComponent';

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsandconditions, setTermsandconditions] = useState(false);

  const validateFields = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    const errors = {
      firstName: firstName === '',
      lastName: lastName === '',
      email: !emailRegex.test(email),
      phoneNumber: !phoneRegex.test(phoneNumber),
      password: password.length > 6,
      confirmPassword: password !== confirmPassword || confirmPassword === '',
    };
    // setMessageError(errors);
    return !Object.values(errors).some((error) => error);
  };

  const signUpWithEmail = async (values: any) => {
    createUserWithEmailAndPassword(auth, values?.email, values?.password)
      .then((res) => {
        Toast.show("You have signed up successfully!", Toast.SHORT);
        router.replace('/(tabs)/home')
      })
      .catch((err) => {
        if (err.code?.trim() == ("auth/email-already-in-use").trim()) {
          Toast.show("The email address is already in use. Please use a different email.", Toast.SHORT);
        }
      })
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
    <Formik
      initialValues={{
        fName: "",
        lName: "",
        email: '',
        phoneNo: "",
        password: '',
        confirmPassword: "",
        termsandconditions: false,
      }}
      onSubmit={(values: any, { resetForm }) => {
        console.log("valuesss", values)
        signUpWithEmail(values)
      }}
      validationSchema={SignUpSchema}

    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
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
                    errors?.fName && touched?.fName ? styles.errorBorder : null,
                  ]}
                  placeholder="First Name"
                  value={values.fName}
                  onChangeText={handleChange('fName')}
                  onBlur={handleBlur("fName")}
                />
              </View>
              <View style={{ flex: 1 }}>
                <CustomTextInput
                  style={[
                    styles.input,
                    errors?.lName && touched?.lName ? styles.errorBorder : null,
                  ]}
                  placeholder="Last Name"
                  value={values.lName}
                  onChangeText={handleChange('lName')}
                  onBlur={handleBlur("lName")}
                />
              </View>
            </View>
            <CustomTextInput
              style={[
                styles.input,
                errors?.email && touched?.email ? styles.errorBorder : null,
              ]}
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur("email")}
            />
            <CustomTextInput
              style={[
                styles.input,
                errors?.phoneNo && touched?.phoneNo ? styles.errorBorder : null,
              ]}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={values.phoneNo}
              onChangeText={handleChange('phoneNo')}
              onBlur={handleBlur("phoneNo")}
            />
            <View>
              <CustomTextInput
                style={[
                  styles.input,
                  errors?.password && touched?.password ? styles.errorBorder : null,
                ]}
                placeholder="Password"
                secureTextEntry
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur("password")}
              />
              {errors?.password && touched?.password &&
                <ErrorText
                  error={errors?.password}
                />
              }
            </View>
            <View>
              <CustomTextInput
                style={[
                  styles.input,
                  errors?.confirmPassword && touched?.confirmPassword ? styles.errorBorder : null,
                ]}
                placeholder="Confirm Password"
                secureTextEntry
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur("confirmPassword")}
              />
              {errors?.confirmPassword && touched?.confirmPassword &&
                <ErrorText
                  error={errors?.confirmPassword}
                />
              }
            </View>
            <View style={styles.rememberContainer}>
              <TouchableOpacity
                onPress={() => setFieldValue("termsandconditions", !values.termsandconditions)}
                style={[styles.checkbox, errors?.termsandconditions && touched?.termsandconditions ? styles.errorBorder : null,]}
              >
                {values.termsandconditions && <View style={styles.checkboxChecked} />}
              </TouchableOpacity>
              <Text style={styles.rememberText}>
                I agree to the{' '}
                <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
                  Terms and Conditions
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.signIn}>
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

      )}
    </Formik>
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
  title: {
    fontSize: 13,
    textAlign: 'justify',
    color: colors.white,
  },
});
