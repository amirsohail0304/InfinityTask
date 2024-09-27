import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import colors from '@/components/colors';

export default function GoBackButton() {
    return (
        <TouchableOpacity
            style={styles.backIcon}
            onPress={() => {
                router.back();
            }}
        >
            <Ionicons name="arrow-back" size={30} color={colors.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
    },
});