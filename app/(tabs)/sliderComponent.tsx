import React, { useRef, useState } from 'react';
import { View, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ArrowPrevNextButtons from './PreviousNextButtons';
import SliderCard from './sliderCard';
import colors from '@/components/colors';

const { width } = Dimensions.get('window');

const steps = [
    {
        title: 'Step 1 - DOSE',
        description: `- Remove your warm portafilter from the grouphead and dry the basket with a dry cloth. 
- Place the group handle on the scales and tare to "0.00".
- Grind 18g of coffee into your basket, settling the coffee as you go.
- Use your WDT tool to distribute and tamp the coffee, then insert the portafilter into the grouphead.`,
    },
    {
        title: 'Step 2 - YIELD',
        description: `- Place scales on the drip tray and tare to 0. 
- Put a cup on the scales and start a shot. 
- Monitor the weight to ensure it reaches 33g, letting it drip out to 36g.`,
    },
    {
        title: 'Step 3 - TIME',
        description: `- Start the shot and time it.
- Stop the shot when your scales hit 33g, and allow it to drip to 36g.`,
    },
];

const CoffeeStepsSlider = () => {
    const carouselRef = useRef<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const _renderItem = ({ item }: { item: any }) => {
        return <SliderCard cardData={item} />;
    };

    const _handleNext = () => {
        carouselRef.current?.next();
    };

    const _handlePrev = () => {
        carouselRef.current?.prev();
    };

    return (
        <>
            <View style={{ height: 370, marginTop: 70, backgroundColor: colors.white }}>
                <Carousel
                    ref={carouselRef}
                    data={steps}
                    renderItem={_renderItem}
                    loop={false}
                    width={width}
                    height={370}
                    autoPlay={false}
                    enabled={false}
                    pagingEnabled={false}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setCurrentIndex(index)}
                />
            </View>
            <ArrowPrevNextButtons
                currentIndex={currentIndex}
                cardData={steps}
                handlePrev={_handlePrev}
                handleNext={_handleNext}
            />
        </>
    );
};

export default CoffeeStepsSlider;
