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
        width: "85%",
        alignSelf: "flex-end"
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
        marginTop: 20
    },
});