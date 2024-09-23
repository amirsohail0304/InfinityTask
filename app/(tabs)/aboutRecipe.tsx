import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import colors from '@/components/colors';
import Footer from '@/components/Footer';
import GoBackButton from './backButton';

export default function AboutScreen() {
    return (
        <Footer aspectRatio="small">
            <GoBackButton />
            <ScrollView style={styles.container}>
                <Image
                    source={require('@/assets/images/average-joe.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.heading}>Coffee Dialing Guide</Text>
                <Text style={styles.paragraph}>
                    Coffee dialing is the process of adjusting your coffee's grind size, dose, and extraction time to achieve the perfect cup. It involves tweaking the variables to balance the taste, aroma, and strength of the coffee.
                </Text>

                <Text style={styles.subheading}>1. Grind Size</Text>
                <Text style={styles.paragraph}>
                    Grind size is one of the most important factors in dialing in coffee. For espresso, a fine grind is ideal. Too coarse, and your coffee will be weak; too fine, and it will taste bitter and over-extracted.
                </Text>

                <Text style={styles.subheading}>2. Dose</Text>
                <Text style={styles.paragraph}>
                    The dose refers to the amount of ground coffee you use. The typical dose for espresso is between 18-20 grams. Adjust the dose to control the strength and flavor of your coffee.
                </Text>

                <Text style={styles.subheading}>3. Extraction Time</Text>
                <Text style={styles.paragraph}>
                    Extraction time is the time water spends running through the coffee grounds. For a balanced espresso, aim for 25-30 seconds. Adjust extraction time by changing the grind size or dose.
                </Text>

                <Text style={styles.subheading}>4. Yield</Text>
                <Text style={styles.paragraph}>
                    Yield is the amount of coffee that is brewed. A common espresso ratio is 1:2, meaning 18g of coffee will yield around 36g of espresso. Adjusting yield will change the concentration of flavors.
                </Text>

                <Text style={styles.subheading}>5. Taste Test</Text>
                <Text style={styles.paragraph}>
                    After making adjustments to grind size, dose, and time, taste the coffee. Aim for a balanced flavor that isn’t too bitter or too sour. Fine-tune until you achieve the perfect espresso shot.
                </Text>

                <Text style={styles.conclusion}>
                    Follow these steps, and with practice, you'll be able to dial in the perfect cup of coffee every time.
                </Text>
                <View style={{ height: 200 }} />
            </ScrollView>
        </Footer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: 20,
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        color: "black",
        lineHeight: 22,
        textAlign: 'justify',
    },
    conclusion: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        marginTop: 20,
        marginBottom: 20,
    },
    logoImage: {
        height: "8%",
        width: '100%',
        justifyContent: 'center',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
        marginVertical: 20,
        marginTop: 50
    },
});
