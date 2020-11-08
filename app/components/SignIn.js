import React, { Component } from 'react';
import {
  SafeAreaView, StatusBar, View, Text,
  KeyboardAvoidingView, TextInput, TouchableHighlight,
   Image, TouchableOpacity,
} from 'react-native';
import { signinStyles } from '../styles/SignInstyles';

export default class SignIn extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={signinStyles.mainContainer}>
        <StatusBar barStyle="light-content"
          translucent
          backgroundColor="#054AA5" />
        <View style={signinStyles.SignInTextContainer}>
          <Text style={signinStyles.SignInText}>Sign In</Text>
        </View>
        <View style={signinStyles.InputMainContainer}>
          <View style={signinStyles.InputInnerContainer}>
            <View style={signinStyles.inputFieldContainer}>
              <View>
                <Text style={signinStyles.inputFieldContainerLabel}>Email</Text>
                
                <Image source={require('../assests/images/Mail.png')}
                style={signinStyles.emailImage} /> 
                 {/* <MaterialIcons name='email' size={22} color='#8E9297'/> */}
              </View>
              <View style={signinStyles.InputBoxContainer}>
                <TextInput
                  style={signinStyles.textarea}
                  placeholderTextColor='white'
                  // multiline={true}
                  autoCapitalize='none'
                  keyboardType='default'
                >
                </TextInput>
              </View>
            </View>
            <View style={signinStyles.inputFieldContainer}>
              <View>
                <Text style={signinStyles.inputFieldContainerLabel}>password</Text>
                <Image source={require('../assests/images/Lock.png')}
                style={signinStyles.emailImage} />
              </View>
              <View style={signinStyles.InputBoxContainer}>
                <TextInput
                  style={signinStyles.textarea}
                  placeholderTextColor='white'
                  secureTextEntry={true} 
                  autoCapitalize='none'
                  keyboardType='default'
                >
                </TextInput>
              </View>
            </View>
            <View style={signinStyles.forgetPaswordContainer}>
              <Text style={signinStyles.fgText}>Forgot password?</Text>
            </View>
            <TouchableOpacity style={signinStyles.IconContainer}
              onPress={() => this.props.navigation.navigate('Store')}>
              <Image source={require('../assests/images/Group448.png')}
                style={signinStyles.forwardIcon} /> 
            </TouchableOpacity>
          </View>
        </View>
        <View style={signinStyles.ClickContainer}>
          <Text style={signinStyles.ClickText}>Don't have an account? </Text>
          <TouchableHighlight>
            <Text style={signinStyles.ClickText}> Click here</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
