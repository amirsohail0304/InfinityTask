import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Use Expo icons

interface ArrowPrevNextButtonsProps {
    handlePrev: () => void;
    handleNext: () => void;
    cardData: any;
    currentIndex: number;
}

const ArrowPrevNextButtons: React.FC<ArrowPrevNextButtonsProps> = ({
    currentIndex,
    cardData,
    handlePrev,
    handleNext,
}) => {
    return (
        <View style={styles.arrowBtnsContainer}>
            {/* Back Arrow */}
            <TouchableOpacity onPress={handlePrev} disabled={currentIndex === 0}>
                <Entypo name="chevron-left" size={30} color={'black'} />
            </TouchableOpacity>

            {/* Current Index Display */}
            <Text style={styles.cardCounter}>
                {`${currentIndex + 1}/${cardData.length}`}
            </Text>

            {/* Forward Arrow */}
            <TouchableOpacity onPress={handleNext} disabled={currentIndex === cardData.length - 1}>
                <Entypo name="chevron-right" size={25} color={'black'} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    arrowBtnsContainer: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // margin:2,
    },
    cardCounter: {
        fontSize: 20,
        color: 'black',
    },
});

export default ArrowPrevNextButtons;
