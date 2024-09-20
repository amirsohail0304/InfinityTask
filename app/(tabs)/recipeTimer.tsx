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
import RecipeChat from '@/components/RecipeChat';
import ErrorText from '@/components/ErrorComponent';

export default function RecipeTimerScreen() {
    const [timer, setTimer] = useState<any>("");
    const [shotTime, setShotTime] = useState('');
    const [messageError, setMessaage] = useState('');
    const [messageShow, setMessageShow] = useState('');

    const handleResult = () => {
        console.log("shotTime", shotTime)
        let time
        const extractedInteger = shotTime.match(/\d+/);

        if (extractedInteger) {
            time = parseInt(extractedInteger[0], 10);
            console.log(time);
        } else {
            setMessaage("No integer found")
        }
        if (time) {
            if (time >= 25 && time <= 30) {
                setMessageShow("Thats perfect. you are a gun. you didnt need any help. You are in the 1% if natually gifted baristas ")
            }
            else if (time >= 30 && time <= 35) {
                setMessageShow("You are pretty close. I would drink this shot as it will taste great and just adjust your grinder 1 notch coarser for your next coffee. It will allow a bit more acidity to be extracted from the coffee and balance the bitterness you might be tasting.")
            }
            else if (time >= 20 && time <= 25) {
                setMessageShow("You are pretty close. I would drink this shot as it will taste great and just adjust your grinder 1 notch finer for your next coffee. That will extract a bit more sweetness from the coffee and reduce the acidity. Follow the recipe again next time")
            }
            else if (time >= 15 && time <= 20) {
                setMessageShow("")
            }
            else if (time >= 35 && time <= 40) {
                setMessageShow("")
            }
            else if (time >= 10 && time <= 15) {
                setMessageShow("")
            }
            else if (time >= 40 && time <= 45) {
                setMessageShow("")
            }
            else if (time < 10) {

            }
            else if (time > 45) {

            }

            setMessaage("")
        }
        else {
            setMessaage("Time field is required")
        }
    };
    console.log("messageShow", messageShow)
    return (
        <Footer
            aspectRatio="small"
        >
            <View style={styles.container}>
                <View>
                    <Text style={styles.welcome}>How Did you go? Your Dose was 18g. Your Yeild was 36g ish </Text>
                    <Text style={styles.title}>What time did you stop your clock at?</Text>
                </View>
                <CustomTextInput
                    style={styles.input}
                    placeholder="Enter your time here"
                    value={shotTime}
                    keyboardType='number-pad'
                    onChangeText={text => setShotTime(text)}
                />
                <ErrorText
                    error={messageError}
                />
            </View>
            <TouchableOpacity
                style={styles.bottomContainer}
                onPress={handleResult}
            >
                <Text style={styles.bottomText}>CONTINUE</Text>
                <AntDesign name="rightcircle" size={30} color={colors.primary} />
            </TouchableOpacity>
            {messageShow &&
                <RecipeChat
                    chatText={messageShow}
                />}
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
        marginTop: 60
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: colors.background,
        marginTop: 100,
    },
    secondContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    welcome: {
        fontSize: 18,
        fontWeight: 'medium',
        textAlign: 'left',
        // position: 'relative',
        // marginBottom: 10,
        color: colors.primary,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        // position: 'relative',
        marginTop: 10,
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 40
    },
});
