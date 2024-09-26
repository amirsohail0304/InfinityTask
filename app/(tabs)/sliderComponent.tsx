import React, { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ArrowPrevNextButtons from './PreviousNextButtons';
import SliderCard from './sliderCard';
import colors from '@/components/colors';

const { width } = Dimensions.get('window');

const CoffeeStepsSlider = (props: any) => {
    const { currentIndex, setCurrentIndex, cardData, _handleNext } = props




    return (
        <>
            <View style={{ width: "80%", alignSelf: "flex-end", marginTop: 50 }}>
                <SliderCard cardData={cardData} />
            </View>
            {/* <ArrowPrevNextButtons
                handleNext={() => _handleNext(cardData.id)}
            /> */}
        </>
    );
};

export default CoffeeStepsSlider;
