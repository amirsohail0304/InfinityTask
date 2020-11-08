
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#EAF1F9',
    },
    header:
    {
          paddingVertical:20,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        backgroundColor: '#054AA5',
    },
    Headericon:
    {
        color: '#ffffff',
        height: 30,
        width: 30,

    },
    HeaderText:
    {
        fontSize: 16,
        color: 'white',
    },
    imageConatiner:
    {
        width: 130,
        height: 130,
        borderColor: 'blue',
        borderWidth: 4,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    InnerimageConatiner:
    {
        width: 95,
        height: 95,
        borderColor: 'blue',
        borderWidth: 1,

    },
    footer:
    {
        flexDirection: 'row',
        
        justifyContent: 'space-between',
    },
    FooterLeft:
    {
        paddingVertical:10,
        paddingHorizontal:33,
        backgroundColor: '#054AA5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    FooterLRight:
    {
        paddingVertical:10,
        paddingHorizontal:33,
        backgroundColor: '#054AA5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    FooterText:
    {
        color: 'white',
        fontSize: 16,
    },
    BackgoundImage:
    {
        resizeMode: "contain",
        width: 130,
        height: 130,
        alignSelf: 'center',
        alignItems: 'center',
    },
    iconContainer:
    {
      paddingTop:20,
    },
    textContainer:
    {
       
        paddingTop:20,
    }
});