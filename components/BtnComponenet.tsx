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

export default function BtnComponenet(props: any) {
    const { onPress, btnText } = props

    return (
        <TouchableOpacity
            style={styles.bottomContainer}
            onPress={onPress}
        >
            <Text style={styles.bottomText}>{btnText}</Text>
            <AntDesign name="rightcircle" size={28} color={colors.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    bottomText: {
        // alignSelf: 'center',
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginTop: 20
    },
});
