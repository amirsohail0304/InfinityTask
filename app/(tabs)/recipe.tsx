import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TouchableOpacity,
    Linking,
    TextInput,
    FlatList,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import CustomTextInput from '@/components/CustomTextInput';
import RadioGroup from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import RecipeChat from '@/components/RecipeChat';

export default function RecipeScreen() {
    const [portafilterSize, setPortafilterSize] = useState('');

    const radioButtons = useMemo(
        () => [
            {
                id: '1', // acts as primary key, should be unique and non-empty string
                label: 'Option 1',
                value: 'option1',
            },
            {
                id: '2',
                label: 'Option 2',
                value: 'option2',
            },
        ],
        []
    );
    const renderItem = ({ item, index }: any) => (
        <>
            <RecipeChat
                chatText={"Okay so I need to know what coffee you are using? You can type below or take a photo and upload the bag."}
            />
        </>
        // <View style={styles.container}>
        //     <View style={styles.secondContainer}>
        //         <View>
        //             <Text style={styles.title}>
        //                 
        //             </Text>
        //         </View>
        //     </View>
        //     <View style={styles.logoImageView}>
        //         <Image
        //             source={require('@/assets/images/avatar.png')}
        //             style={styles.logoImage}
        //         />
        //     </View>
        // </View>
    )
    const [selectedId, setSelectedId] = useState<string | undefined>();
    return (
        <Footer aspectRatio="small">
            <FlatList
                data={[0]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.bottomContainer}
                onPress={() => router.replace('/(tabs)/')}
            >
                <Text style={styles.bottomText}>YES</Text>
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
        gap: 10,
        flex: 1,
        // marginVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
        paddingTop: 40
    },
    secondContainer: {
        gap: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    welcome: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        // position: 'relative',
        // marginBottom: 10,
        color: colors.primary,
    },
    title: {
        fontSize: 13,
        // fontWeight: 'bold',
        textAlign: 'left',
        // position: 'relative',
        // marginBottom: 10,
        color: colors.primary,
    },
    logoImage: {
        marginTop: 20,
        height: 100,

        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logoImageView: {
        height: 120,
        resizeMode: 'contain',
        width: 100,
        borderRadius: 50
    },
    back: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 10,
    },
    backText: {
        color: colors.white,
        fontSize: 25,
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
    },
});
