import {
    Image,
    StyleSheet,
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import colors from '@/components/colors';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import CustomTextInput from './CustomTextInput';
import ErrorText from './ErrorComponent';

const RecipeChat = (props: any) => {
    const { chatText, chatType, setChangeValue, value, error } = props
    const [coffeeInfo, setCoffeeInfo] = useState({ roaster: '', name: '', age: '' });
    const [image, setImage] = useState<string | null>(null);  // Define image as string or null

    // Function to open options to either take a photo or choose from the gallery
    const pickImage = async () => {
        const choice = await new Promise((resolve) =>
            Alert.alert(
                'Select an option',
                'Would you like to take a photo or select from the gallery?',
                [
                    { text: 'Cancel', onPress: () => resolve(null), style: 'cancel' },
                    { text: 'Take Photo', onPress: () => resolve('camera') },
                    { text: 'Choose from Gallery', onPress: () => resolve('gallery') },
                ]
            )
        );

        if (choice === 'camera') {
            let cameraResult = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!cameraResult.canceled && cameraResult.assets) {
                setImage(cameraResult.assets[0].uri);  // Correct way to assign the image URI
            }
        } else if (choice === 'gallery') {
            let galleryResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!galleryResult.canceled && galleryResult.assets) {
                setImage(galleryResult.assets[0].uri);  // Correct way to assign the image URI
            }
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
            const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
            if (cameraStatus !== 'granted') {
                alert('Sorry, we need camera permissions to make this work!');
            }
        })();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <View>
                    <Text style={styles.title}>{chatText}</Text>
                </View>
            </View>
        </View>
    )

}
export default RecipeChat
const styles = StyleSheet.create({

    container: {
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
        paddingTop: 40
    },
    secondContainer: {
        gap: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        width: "85%",
        alignItems: "center",
        paddingVertical: 20,
        alignSelf: "flex-end"
    },

    title: {
        fontSize: 13,
        textAlign: 'left',
        color: colors.primary,
    },
    logoImage: {
        height: 80,
        resizeMode: 'contain',
        width: 80,
        borderRadius: 40
    },
    logoImageView: {
        height: 80,
        resizeMode: 'contain',
        width: "100%",
        borderRadius: 40
    },
    input: {
        height: 42,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },

    welcome: {
        fontSize: 25,
        fontWeight: 'medium',
        textAlign: 'left',
        // position: 'relative',
        // marginBottom: 10,
        color: colors.primary,
    },

    back: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: "center",
        paddingHorizontal: 10,
        height: 40
    },
    backText: {
        color: colors.white,
        fontSize: 12,
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
