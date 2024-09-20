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
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#6200ee',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#6200ee',
    },
    description: {
        fontSize: 16,
        color: '#333',
        lineHeight: 22,
    },
});

export default SliderCard;
