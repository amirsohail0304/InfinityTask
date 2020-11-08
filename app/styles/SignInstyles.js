import { StyleSheet } from 'react-native';
export const signinStyles = StyleSheet.create({

  mainContainer: {
    backgroundColor: '#054AA5',
    flex: 1,
    justifyContent: 'space-around'
  },
  SignInText: {
    textTransform: "uppercase",
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  SignInTextContainer: {
    marginTop: 50,
  },
  InputMainContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 30,
    marginHorizontal: 15,
    shadowColor: '#FFFFFF',
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 2.0,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,

  },
  inputFieldContainer: {
    //  paddingVertical: 25,
    // paddingHorizontal:25,
    justifyContent: 'center'
  },
  inputFieldContainerLabel: {
    color: '#8E9297',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  InputBoxContainer:
  {
    paddingBottom: 15,
  },
  textarea:
  {
    color: '#000000',
    borderBottomWidth: 2,
    borderColor: '#C5CAD1',
    height: 40
  },
  IconContainer: {
    alignSelf: 'flex-end',
    paddingTop: 30,
    backgroundColor: 'white'
  },
  InputInnerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 25,
  },
  fgText: {
    color: '#8548BE',
    textTransform: "uppercase",
    fontSize: 12,
  },
  forgetPaswordContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  ClickText: {
    color: '#ffffff',
    //  textTransform: "uppercase",
    fontSize: 14,
  },
  ClickContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15
  },
  emailImage:{
    height: 12,
    width: 13,
    marginTop:4
  },
  forwardIcon: {
    height: 40,
    width: 40,
    marginTop:4
  }
});