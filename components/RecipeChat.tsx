import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import colors from '@/components/colors';

const RecipeChat = (props: any) => {
    const { chatText } = props

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{chatText}</Text>
        </View>
    )

}
export default RecipeChat
const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginHorizontal: 10,
        width: "75%",
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 13,
        textAlign: 'justify',
        color: colors.primary,
    },
});
