import {
    Image,
    StyleSheet,
    View,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';
import colors from '@/components/colors';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import CustomTextInput from './CustomTextInput';
import ErrorText from './ErrorComponent';
import { Picker } from '@react-native-picker/picker';
import ImagePickerModal from '@/app/(tabs)/modalComponent';

const ImageComponent = (props: any) => {
    const { chatText, chatType, setChangeValue, value, error, selectedValue, setSelectedValue } = props
    const [coffeeInfo, setCoffeeInfo] = useState({ roaster: '', name: '', age: '' });
    const [image, setImage] = useState<string | null>(null);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.logoImageView}>
                <Image
                    source={require('@/assets/images/avatar.png')}
                    style={styles.logoImage}
                />
                {chatType === "takePhoto" ?
                    <>
                        <View style={{ flexDirection: "row", justifyContent: "center", gap: 10, marginTop: 20, }}>
                            <TouchableOpacity
                                // title='SIGN IN'
                                onPress={() => setModalVisible(true)}
                                style={styles.back}
                            >
                                <Text style={styles.backText}>TAKE A PHOTO</Text>
                            </TouchableOpacity>
                            <View style={{ height: 10, alignItems: "center" }}>

                                <CustomTextInput
                                    style={styles.input}
                                    placeholder="Enter Name here"
                                    value={value}
                                    // onChangeText={onChangeText}
                                    onChangeText={text => setChangeValue(text)}
                                />

                            </View>
                        </View>

                    </>
                    :
                    <View style={{ width: "60%", height: 30, borderRadius: 10 }}>
                        <Picker selectedValue={selectedValue} onValueChange={itemValue => setSelectedValue(itemValue)}
                            dropdownIconColor={colors.primary}
                            style={{ backgroundColor: "white", marginHorizontal: 20 }}
                        >
                            <Picker.Item label="Select an option" value="" color={colors.primary} />
                            <Picker.Item label="51mm" value="51mm"
                                color={colors.primary}
                            />
                            <Picker.Item label="54mm" value="54mm"
                                color={colors.primary}
                            />
                            <Picker.Item label="58mm" value="58mm"
                                color={colors.primary}
                            />
                        </Picker>
                        <ErrorText
                            error={error}
                        />
                    </View>
                }
            </View>
            {chatType === "takePhoto" &&
                <ErrorText
                    error={error}
                />
            }
            <ImagePickerModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onImagePicked={(uri) => setImage(uri)}
            />
        </View>
    )

}
export default ImageComponent
const styles = StyleSheet.create({

    container: {
        gap: 10,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: colors.background,
        paddingTop: 40
    },
    secondContainer: {
        gap: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        width: "85%",
        alignItems: "center",
        paddingVertical: 20,
        alignSelf: "flex-end"
    },

    title: {
        fontSize: 13,
        textAlign: 'left',
        color: colors.primary,
    },
    logoImage: {
        height: 80,
        resizeMode: 'contain',
        width: 80,
        borderRadius: 40
    },
    logoImageView: {
        width: "100%",
        borderRadius: 40,
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    input: {
        height: 42,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },

    welcome: {
        fontSize: 25,
        fontWeight: 'medium',
        textAlign: 'left',
        // position: 'relative',
        // marginBottom: 10,
        color: colors.primary,
    },

    back: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: "center",
        paddingHorizontal: 10,
        height: 40
    },
    backText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    ORText: {
        alignSelf: 'center',

        color: colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
    },
    bottomText: {
        // alignSelf: 'center',
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
    },
    bottomContainer: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        marginBottom: 10
    },
});
