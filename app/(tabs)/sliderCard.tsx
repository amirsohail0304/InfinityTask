import colors from '@/components/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    cardData: {
        title: string;
        description: string;
    };
}
const SliderCard: React.FC<Props> = ({ cardData }) => {

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{cardData.title}</Text>
            <Text style={styles.description}>{cardData.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 10,
        shadowColor: '#000',
        height: 360,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.primary,
    },
    description: {
        fontSize: 14,
        color: colors.primary,
        lineHeight: 22,
    },
});

export default SliderCard;
