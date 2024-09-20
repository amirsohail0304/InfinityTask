import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Use Expo icons
import BtnComponenet from '@/components/BtnComponenet';
import colors from '@/components/colors';

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
            <BtnComponenet
                onPress={handlePrev}
                btnText="Previous"
            />

            <BtnComponenet
                onPress={handleNext}
                btnText="Next"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    arrowBtnsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: colors.white
        // margin:2,
    },
    cardCounter: {
        fontSize: 20,
        color: 'black',
    },
});

export default ArrowPrevNextButtons;
