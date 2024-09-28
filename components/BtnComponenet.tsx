import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import colors from '@/components/colors';

export default function BtnComponenet(props: any) {
    const { onPress, btnText } = props

    return (
        <View style={styles.bottomContainer}>
            <TouchableOpacity
                style={styles.bottomContainer}
                onPress={onPress}
            >
                <Text style={styles.bottomText}>{btnText}</Text>
                <AntDesign name="rightcircle" size={28} color={colors.primary} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomText: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        marginTop: 10,
        zIndex: 2
    },
});
