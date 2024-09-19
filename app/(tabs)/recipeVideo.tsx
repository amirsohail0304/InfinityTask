import {
    StyleSheet,
    Platform,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import { useState } from 'react';
import CustomTextInput from '@/components/CustomTextInput';

export default function RecipeVideoScreen() {
    const [timer, setTimer] = useState();


    return (
        <Footer>
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>ENTER YOUR</Text>
                    <Text style={styles.title}>TIME</Text>
                </View>
                <CustomTextInput
                    style={styles.input}
                    placeholder="Enter your time here"
                    value={timer}
                // onChangeText={text => setTimer()}
                />
            </View>
            <TouchableOpacity
                style={styles.bottomContainer}
            >
                <Text style={styles.bottomText}>CONTINUE</Text>
                <AntDesign name="rightcircle" size={30} color={colors.primary} />
            </TouchableOpacity>
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
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    welcome: {
        fontSize: 25,
        fontWeight: 'medium',
        textAlign: 'left',
        // position: 'relative',
        // marginBottom: 10,
        color: colors.primary,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
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
        // alignSelf: 'center',
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
        marginBottom: 10
    },
});
