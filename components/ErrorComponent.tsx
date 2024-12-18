import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorText = (props: any) => {
    const { error } = props
    return (
        <Text style={styles.errorText}>{error}</Text>
    )
}

const styles = StyleSheet.create({
    errorText: {
        fontSize: 12,
        // fontFamily: FONTS.InterMedium,
        color: "red",
        // marginTop: 7,
        marginStart: 10
    }
});

export default ErrorText