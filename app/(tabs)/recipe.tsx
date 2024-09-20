import {
    Image,
    View,
    Text,
    FlatList,
} from 'react-native';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import { router, useFocusEffect, } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import RecipeChat from '@/components/RecipeChat';
import BtnComponenet from '@/components/BtnComponenet';
import ErrorText from '@/components/ErrorComponent';
import { styles } from '@/components/navigation/recipeSTyle';
import ImageComponent from '@/components/ImageComponent';
import CoffeeStepsSlider from './sliderComponent';

export default function RecipeScreen() {
    const [isPortafilterSize, setIsPortafilterSize] = useState(false);
    const [selectedValue, setSelectedValue] = useState<any>("");
    const [isPortaValue, setIsPortaValue] = useState<any>(false);
    const [nameValue, setNameValue] = useState<any>();
    const [messageError, setMessageError] = useState<any>();
    const [portaError, setPortaError] = useState<any>("");

    const radioButtons = useMemo(
        () => [
            {
                id: '1', // acts as primary key, should be unique and non-empty string
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
    useFocusEffect(
        useCallback(() => {

            return () => {
                setIsPortafilterSize(false)
                setSelectedValue("")
                setIsPortaValue(false)
                setNameValue("")
                setMessageError("")
                setPortaError("")

            }
        }, [])
    );
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
        }
        else {
            setPortaError("please Select value")
        }
    }
    const handleTimerScreen = () => {
        router.navigate(`/(tabs)/recipeTimer`)
    }
    const handleVideoScreen = () => {
        router.navigate(`/(tabs)/recipeVideo`)
    }
    const renderItem = ({ item, index }: any) => (
        <>
            <View style={{ marginTop: 30 }}>
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
                        chatText={"Okay great. Firstly what tise portafilter does your machine have ?"}
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
                        chatText={"Cool lets begin. Step 1 - Prepare your machine -turn it on an let it get to temp- run a shot (of just hot water) through the portafilter to heat it up. We want it to be consistently hot all the time "}
                    />
                    <View style={styles.container}>
                        <View style={styles.secondContainer}>
                            <Text style={styles.title}>
                                Recipe - I am going to give you a quick lesson of the fundamentals of dialing in coffee and then we are going to run a shot using these fundamentals.
                                {"\n"}{"\n"}
                                There are 3 variables you need to remember when making coffee:
                                {"\n"}
                                <Text style={styles.bold}>1. DOSE</Text> - the amount of ground coffee that goes IN to the basket (18g on your Machine)
                                {"\n"}{"\n"}
                                <Text style={styles.bold}>2. YIELD</Text> - the amount of espresso you want in your cup.
                                {"\n"}{"\n"}
                                <Text style={styles.bold}>3. TIME</Text> - the time it takes to achieve the desired yield. (25-30 Seconds). We adjust the grind to get the time into this window. The first 2 variables are constant. They always stay the same. Variable 3 is what we adjust.
                                {"\n"}{"\n"}
                                BORING COFFEE FACT - Espresso works on a 1:2 brew ratio. This means one part ground coffee to 2 parts espresso in the cup, hence 18g to 36g.
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
                    </View>
                </>
            }
            {isPortafilterSize && isPortaValue &&
                <RecipeChat
                    chatText={"Dont quite get it? Watch this video?"}
                />}
            {isPortafilterSize && isPortaValue &&
                <BtnComponenet
                    onPress={handleVideoScreen}
                    btnText="Now Go"
                />
            }
            {isPortafilterSize && isPortaValue &&
                <RecipeChat
                    chatText={"How Did you go? Your Dose was 18g. Your Yeild was 36g ish. What time did you stop your clock at?"}
                />
            }
            {isPortafilterSize && isPortaValue &&
                <BtnComponenet
                    onPress={handleTimerScreen}
                    btnText="Continue"
                />
            }
        </>
    )
    return (
        <Footer aspectRatio="small">
            <FlatList
                data={[0]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </Footer>
    );
}


