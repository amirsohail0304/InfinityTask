import {
    Image,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Animated,
    Easing,
} from 'react-native';
import Footer from '@/components/Footer';
import { router, useFocusEffect, } from 'expo-router';
import { Fragment, useCallback, useMemo, useRef, useState } from 'react';
import RecipeChat from '@/components/RecipeChat';
import BtnComponenet from '@/components/BtnComponenet';
import { styles } from '@/components/navigation/recipeSTyle';
import ImageComponent from '@/components/ImageComponent';
import CoffeeStepsSlider from './sliderComponent';
import GoBackButton from './backButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomTextInput from '@/components/CustomTextInput';
import colors from '@/components/colors';
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
export default function RecipeScreen() {
    const [isPortafilterSize, setIsPortafilterSize] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<any>("");
    const [isPortaValue, setIsPortaValue] = useState<boolean>(false);
    const [nameValue, setNameValue] = useState<any>();
    const [messageError, setMessageError] = useState<any>();
    const [portaError, setPortaError] = useState<any>("");
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isTimer, setIsTimer] = useState<boolean>(false);
    const [isStep, setIsStep] = useState<boolean>(false);
    const [isVideoPopUp, setIsVideo] = useState<boolean>(false);
    const [visible, setVisible] = useState(false);
    const [isHelp, setIsHelp] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [coffeeRecipe, setCoffeeRecipe] = useState<any>([{
        id: 1,
        isMachinePrepare: false,
        isStep1: false,
        isStep2: false,
        isStep3: false,
        isTimer: false,
        isVideo: false,
    }]);
    const [isMachinePrepare, setIsMachinePrepare] = useState<boolean>(false);
    const [timer, setTimer] = useState<any>("");
    const [shotTime, setShotTime] = useState('');
    const [messageShow, setMessageShow] = useState('');
    const flatListRef = useRef<any>()
    let lineHeight = 10
    let message = "Your coffee is good, but follow this recipe again and try to make it even better."

    const radioButtons = useMemo(
        () => [
            {
                id: '1',
                label: 'Option 1',
                value: 'option1',
            },
            {
                id: '2',
                label: 'Option 2',
                value: 'option2',
            },
        ],
        []
    );
    const handleResult = () => {
        let time
        const extractedInteger = shotTime.match(/\d+/);

        if (extractedInteger) {
            time = parseInt(extractedInteger[0], 10);
            console.log(time);
        } else {
            setMessageError("No integer found")
        }
        if (time) {
            if (time >= 25 && time <= 30) {
                setMessageShow("Thats perfect. you are a gun. you didnt need any help. You are in the 1% if natually gifted baristas ")
            }
            else if (time >= 30 && time <= 35) {
                setMessageShow("You are pretty close. I would drink this shot as it will taste great and just adjust your grinder 1 notch coarser for your next coffee. It will allow a bit more acidity to be extracted from the coffee and balance the bitterness you might be tasting.")
            }
            else if (time >= 20 && time <= 25) {
                setMessageShow("You are pretty close. I would drink this shot as it will taste great and just adjust your grinder 1 notch finer for your next coffee. That will extract a bit more sweetness from the coffee and reduce the acidity. Follow the recipe again next time.")
            }
            else if (time >= 15 && time <= 20) {
                setMessageShow("your coffee is good but follow the following recipe again and try more better")
            }
            else if (time >= 35 && time <= 40) {
                setMessageShow(message)
            }
            else if (time >= 10 && time <= 15) {
                setMessageShow(message)
            }
            else if (time >= 40 && time <= 45) {
                setMessageShow(message)
            }
            else if (time < 10) {
                setMessageShow(message)
            }
            else if (time > 45) {
                setMessageShow(message)

            }

            setMessageError("")
        }
        else {
            setMessageError("Time field is required")
        }

        handleAutoScroll(450)
    };
    const handleRepeatAgain = () => {
        let newArray = [
            {
                id: coffeeRecipe?.length + 1,
                isMachinePrepare: true,
                isStep1: false,
                isStep2: false,
                isStep3: false,
                isTimer: false,
                isVideo: false
            }
        ]
        setCoffeeRecipe([...coffeeRecipe, ...newArray])
        setShotTime("")
        setMessageShow("")
        setIsHelp(false)
        setVisible(false)
        // setIsMachinePrepare(false)
    }
    // useFocusEffect(
    //     useCallback(() => {
    //         return () => {
    //             setIsPortafilterSize(false)
    //             setSelectedValue("")
    //             setIsPortaValue(false)
    //             setNameValue("")
    //             setMessageError("")
    //             setPortaError("")
    //             setCurrentIndex(0)
    //         }
    //     }, [])
    // );
    const handlePortaSize = () => {
        if (nameValue?.trim()?.length > 0) {
            setIsPortafilterSize(true)
            setNameValue("")
            setMessageError("")
        }
        else {
            setMessageError("Name field is required")
        }
    }
    const handlePortaValue = () => {
        if (selectedValue) {
            setIsPortaValue(true)
            setPortaError("")
            handleAutoScroll(200)
        }
        else {
            setPortaError("please Select value")
        }
    }
    const arrayLength = () => {

    }
    const handleTimerScreen = () => {
        const updatedRecipe = coffeeRecipe.map((item: any, index: any) =>
            index === coffeeRecipe.length - 1 ? { ...item, isTimer: true, } : item
        );
        setCoffeeRecipe(updatedRecipe);
        handleAutoScroll(coffeeRecipe?.length * 700)
    }
    const arrayHandle = () => {

    }
    const handleMachinePrepare = () => {
        const updatedRecipe = coffeeRecipe.map((item: any, index: any) =>
            index === coffeeRecipe.length - 1 ? { ...item, isMachinePrepare: true, } : item
        );
        setCoffeeRecipe(updatedRecipe);
        handleAutoScroll(coffeeRecipe?.length > 0 ? coffeeRecipe?.length * 140 : 140)
    }
    const handleStep1 = () => {
        const updatedRecipe = coffeeRecipe.map((item: any, index: any) =>
            index === coffeeRecipe.length - 1 ? { ...item, isStep1: true } : item
        );
        setCoffeeRecipe(updatedRecipe);
        handleAutoScroll(coffeeRecipe?.length * 300);
    };

    const handleStep2 = () => {
        const updatedRecipe = coffeeRecipe.map((item: any, index: any) =>
            index === coffeeRecipe.length - 1 ? { ...item, isStep2: true } : item
        );
        setCoffeeRecipe(updatedRecipe);
        handleAutoScroll(coffeeRecipe?.length * 350);
    };

    const handleStep3 = () => {
        const updatedRecipe = coffeeRecipe.map((item: any, index: any) =>
            index === coffeeRecipe.length - 1 ? { ...item, isStep3: true } : item
        );
        setCoffeeRecipe(updatedRecipe);
        handleAutoScroll(coffeeRecipe?.length * 400);
    };
    const handleVideoScreen = () => {
        const updatedRecipe = coffeeRecipe.map((item: any, index: any) =>
            index === coffeeRecipe.length - 1 ? { ...item, isVideo: true, } : item
        );
        setCoffeeRecipe(updatedRecipe);
        setVisible(true)
        setIsHelp(true)
        Animated.timing(fadeAnim, {
            toValue: 1, // Fully visible
            duration: 500, // Animation duration (in ms)
            useNativeDriver: true,
            easing: Easing.ease,
        }).start(() => {
            // After fade-in, wait for 5 seconds and then fade out
            setTimeout(() => {
                // Animate the popup to fade out
                Animated.timing(fadeAnim, {
                    toValue: 0, // Fully hidden
                    duration: 500, // Animation duration (in ms)
                    useNativeDriver: true,
                    easing: Easing.ease,
                }).start(() => {
                    setVisible(false); // Hide the popup completely
                });
            }, 5000); // Wait for 5 seconds
        });
        // router.navigate(`/(tabs)/recipeVideo`)
    }
    const handleVideoScreen1 = () => {
        router.navigate(`/(tabs)/recipeVideo`)
    }
    const handleStep = () => {
        setIsStep(true)
        handleAutoScroll(300)
    }
    const handleAutoScroll = (position: any) => {
        console.log("position", position)
        const screenHeight = Dimensions.get('window').height;
        const contentHeight = position * lineHeight;
        console.log("contentHeight", contentHeight, contentHeight > screenHeight - lineHeight * 2)

        if (contentHeight > screenHeight - lineHeight * 2) {
            flatListRef.current?.scrollToOffset({
                offset: contentHeight - screenHeight + lineHeight * 2,
                animated: true,
            });
        }
    };
    const _handleNext = () => {
        if (currentIndex < 3) {
            setCurrentIndex((prev: any) => prev + 1)

        }
    };
    const renderItem = ({ item, index }: any) => (
        <>
            <GoBackButton />
            <View style={{ marginTop: 90 }}>
                <RecipeChat
                    chatText={"Okay so I need to know what coffee you are using? You can type below or take a photo and upload the bag."}
                />
                <ImageComponent
                    setChangeValue={setNameValue}
                    value={nameValue}
                    error={messageError}
                    chatType="takePhoto"
                />
            </View>
            <BtnComponenet
                onPress={handlePortaSize}
                btnText="Continue"
            />
            {isPortafilterSize &&
                <>
                    <RecipeChat
                        chatText={"Okay great. Firstly what tise portafilter does your machine have?"}
                    />
                    <ImageComponent
                        error={portaError}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                    />

                    <BtnComponenet
                        onPress={handlePortaValue}
                        btnText="Continue"
                    />

                </>
            }

            {isPortaValue &&

                <>
                    <RecipeChat
                        chatText={"Cool lets begin. Step 1 - Prepare your machine -turn it on an let it get to temp- run a shot (of just hot water) through the portafilter to heat it up. We want it to be consistently hot all the time"}
                    />
                    <BtnComponenet
                        onPress={handleMachinePrepare}
                        btnText="Continue"
                    />
                </>
            }
            {coffeeRecipe?.map((item: any, index: any) =>
                <Fragment
                    key={index}
                >
                    {item.isMachinePrepare &&
                        <View>
                            <View style={styles.secondContainer}>
                                <Text style={styles.title}>
                                    Recipe - I am going to give you a quick lesson of the fundamentals of dialing in coffee and then we are going to run a shot using these fundamentals.
                                    {"\n"}{"\n"}
                                    There are 3 variables you need to remember when making coffee:
                                    {"\n"}
                                    <Text style={styles.bold}>1. DOSE</Text> - the amount of ground coffee that goes IN to the basket ({selectedValue === "58mm" ? "21g" : "18g"} on your Machine)
                                    {"\n"}{"\n"}
                                    <Text style={styles.bold}>2. YIELD</Text> - the amount of espresso you want in your cup.
                                    {"\n"}{"\n"}
                                    <Text style={styles.bold}>3. TIME</Text> - the time it takes to achieve the desired yield. (25-30 Seconds). We adjust the grind to get the time into this window. The first 2 variables are constant. They always stay the same. Variable 3 is what we adjust.
                                    {"\n"}{"\n"}
                                    BORING COFFEE FACT - Espresso works on a 1:2 brew ratio. This means one part ground coffee to 2 parts espresso in the cup, hence {selectedValue === "58mm" ? "21g to 42g" : "18g to 36g"}.
                                    {"\n"}{"\n"}
                                    Confused? Great, me too after that. Let's make some coffee and it will start to make sense.
                                </Text>
                            </View>
                            <View style={styles.logoImageView}>
                                <Image
                                    source={require('@/assets/images/avatar.png')}
                                    style={styles.logoImage}
                                />
                            </View>
                            <BtnComponenet
                                onPress={handleStep1}
                                btnText="Continue"
                            />
                        </View>

                    }
                    {item.isStep1 &&
                        <View style={{ marginTop: -20 }}>
                            <CoffeeStepsSlider
                                setCurrentIndex={setCurrentIndex}
                                currentIndex={currentIndex}
                                cardData={steps[0]}
                            />
                            <BtnComponenet
                                onPress={handleStep2}
                                btnText="Continue"
                            />
                        </View>
                    }
                    {item.isStep2 &&
                        <View style={{ marginTop: -20 }}>
                            <CoffeeStepsSlider
                                setCurrentIndex={setCurrentIndex}
                                currentIndex={currentIndex}
                                cardData={steps[1]}
                            />
                            <BtnComponenet
                                onPress={handleStep3}
                                btnText="Continue"
                            />
                        </View>
                    }
                    {item.isStep3 &&
                        <View style={{ marginTop: -20 }}>
                            <CoffeeStepsSlider
                                setCurrentIndex={setCurrentIndex}
                                currentIndex={currentIndex}
                                cardData={steps[2]}
                            />
                            <BtnComponenet
                                onPress={handleVideoScreen}
                                btnText="Continue"
                            />
                        </View>
                    }
                    {item.isVideo &&
                        <>

                            <RecipeChat
                                chatText={`How Did you go? Your Dose was ${selectedValue === "58mm" ? "21g" : "18g"}. Your Yeild was ${selectedValue === "58mm" ? "42g" : "36g"} ish. What time did you stop your clock at?`}
                            />
                            <BtnComponenet
                                onPress={handleTimerScreen}
                                btnText="Continue"
                            />
                        </>
                    }
                    {item.isTimer &&
                        <View style={styles.container}>
                            <View style={{ paddingHorizontal: 10, }}>
                                <Text style={styles.timeTitle}>Enter your Time</Text>
                            </View>
                            <View style={{ paddingHorizontal: 20, }}>
                                <CustomTextInput
                                    style={[styles.input, messageError ? styles.errorBorder : null]}
                                    placeholder="Enter your time here"
                                    value={shotTime}
                                    keyboardType='number-pad'
                                    onChangeText={text => setShotTime(text)}
                                />
                            </View>
                            <BtnComponenet
                                onPress={handleResult}
                                btnText="Continue"
                            />
                            {messageShow &&
                                <RecipeChat
                                    chatText={messageShow}
                                />}
                            {messageShow &&
                                <>
                                    <RecipeChat
                                        chatText={"Now, can you go through these steps again?"}
                                    />
                                    <BtnComponenet
                                        onPress={handleRepeatAgain}
                                        btnText="Repeat Again"
                                    />
                                </>
                            }
                        </View>
                    }
                </Fragment>
            )}
            <View style={{ height: 50 }} />
        </>
    )
    return (
        <Footer aspectRatio="small">
            <FlatList
                data={[0]}
                ref={flatListRef}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            {visible &&
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 30,
                        width: '75%',
                        zIndex: 9,
                        alignItems: 'center',
                        opacity: fadeAnim, // Bind the opacity to the animation
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background color for the popup
                        padding: 20,
                        borderRadius: 10,
                        alignSelf: "center"
                    }}
                >
                    <Text style={styless.title}>"Don't quite get it? Watch this video?"</Text>
                </Animated.View>
            }
            {isHelp &&
                <TouchableOpacity style={styless.bottomContainer}
                    onPress={handleVideoScreen1}

                >
                    <Text style={styless.bottomText}>Help</Text>
                </TouchableOpacity>
            }
        </Footer>
    );
}

const styless = StyleSheet.create({
    bottomText: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomContainer: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        position: "absolute",
        right: 10,
        top: 30
    },
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginHorizontal: 10,
        width: "75%",
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 13,
        textAlign: 'justify',
        color: colors.white,
    },
});
