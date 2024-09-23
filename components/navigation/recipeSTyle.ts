import { StyleSheet } from "react-native";
import colors from "../colors";

export const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
    secondContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginHorizontal: 10,
        width: "75%",
        alignSelf: "flex-end"
    },
    welcome: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left',
        color: colors.primary,
    },
    title: {
        fontSize: 13,
        textAlign: 'left',
        color: colors.primary,
    },
    logoImage: {
        marginTop: 20,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    logoImageView: {
        height: 80,
        resizeMode: 'contain',
        width: 80,
        borderRadius: 40,
        marginTop: -10
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
        marginTop: 20
    },
});