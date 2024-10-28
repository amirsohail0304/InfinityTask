import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    Pressable,
    ScrollView
} from 'react-native';
import colors from '@/components/colors';
import { useState } from 'react';
import CustomTextInput from './CustomTextInput';
import ImagePickerModal from '@/app/(tabs)/modalComponent';
import { Ionicons } from '@expo/vector-icons';

const ImageComponent = (props: any) => {
    const { chatText, chatType, setChangeValue, value, error, selectedValue, setSelectedValue } = props;
    const [coffeeInfo, setCoffeeInfo] = useState({ roaster: '', name: '', age: '' });
    const [image, setImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [optionsModalVisible, setOptionsModalVisible] = useState(false); // State for custom options modal

    const options = [
        { label: '51mm', value: '51mm' },
        { label: '54mm', value: '54mm' },
        { label: '58mm', value: '58mm' },
    ];

    return (
        <View>
            <Image
                source={require('@/assets/images/avatar.png')}
                style={styles.logoImage}
            />
            <View style={styles.logoImageView}>
                {chatType === "takePhoto" ?
                    <>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 10,
                            marginStart: 10
                        }}>
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                style={styles.back}
                            >
                                <Text style={styles.backText}>TAKE A PHOTO</Text>
                            </TouchableOpacity>
                            <View style={{ height: 10, width: "48%", alignItems: "center" }}>
                                <CustomTextInput
                                    style={[styles.input, error ? styles.errorBorder : null]}
                                    placeholder="Enter Name here"
                                    value={value}
                                    onChangeText={text => setChangeValue(text)}
                                />
                            </View>
                        </View>
                    </>
                    :
                    <View style={{ width: "90%", borderRadius: 10, marginTop: -10, marginStart: 30, }}>
                        <TouchableOpacity onPress={() => setOptionsModalVisible(true)} style={styles.pickerButton}>
                            <Text style={{ color: selectedValue ? colors.primary : '#999' }}>
                                {selectedValue ? selectedValue : 'Select an option'}
                            </Text>
                            <Ionicons name="chevron-down" size={20} color={colors.primary} />
                        </TouchableOpacity>

                        {/* Modal for Custom Options */}
                        <Modal
                            visible={optionsModalVisible}
                            transparent={true}
                            // animationType="slide"
                            onRequestClose={() => setOptionsModalVisible(false)} // Close modal on back button press (Android)
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    {options.map((option) => (
                                        <Pressable
                                            key={option.value}
                                            onPress={() => {
                                                setSelectedValue(option.value);
                                                setOptionsModalVisible(false); // Close modal after selection
                                            }}
                                            style={({ pressed }) => [
                                                styles.optionButton,
                                                pressed && styles.pressedOption,
                                            ]}
                                        >
                                            <Text style={styles.optionText}>{option.label}</Text>
                                        </Pressable>
                                    ))}
                                    {/* Close Button */}
                                    <Pressable onPress={() => setOptionsModalVisible(false)} style={styles.closeButton}>
                                        <Text style={styles.closeButtonText}>Close</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                }
            </View>
            <ImagePickerModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onImagePicked={(uri) => setImage(uri)}
            />
        </View>
    );
};

export default ImageComponent;

const styles = StyleSheet.create({
    logoImage: {
        height: 80,
        resizeMode: 'contain',
        width: 80,
        borderRadius: 40,
        marginStart: 10,
        marginTop: 10
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
    pickerButton: {
        backgroundColor: "white",
        padding: 10,
        // borderRadius: 5,
        // borderWidth: 1,
        borderColor: colors.primary,
        flexDirection: 'row', // To align text and icon horizontally
        justifyContent: 'space-between', // Space between text and icon
        alignItems: 'center', // Vertically center the icon
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: "80%",
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
    },
    optionButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    pressedOption: {
        backgroundColor: '#eee',
    },
    optionText: {
        fontSize: 16,
        color: colors.primary,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: colors.primary,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    back: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 5,
        justifyContent: "center",
        paddingHorizontal: 10,
        width: "50%",
        height: 40
    },
    backText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 'bold',
    },
    input: {
        width: "100%",
        height: 42,
        borderColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    errorBorder: {
        borderColor: colors.primary
    },
});
