import React, { useEffect, useState } from 'react';
import {
    Modal,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Alert,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';
import colors from '@/components/colors';

interface ImagePickerModalProps {
    visible: boolean;
    onClose: () => void;
    onImagePicked: (uri: string) => void;
}

const ImagePickerModal: React.FC<ImagePickerModalProps> = ({ visible, onClose, onImagePicked }) => {
    const pickImage = async (option: 'camera' | 'gallery') => {
        onClose();
        if (option === 'camera') {
            let cameraResult = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!cameraResult.canceled && cameraResult.assets) {
                onImagePicked(cameraResult.assets[0].uri);
            }
        } else if (option === 'gallery') {
            let galleryResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!galleryResult.canceled && galleryResult.assets) {
                onImagePicked(galleryResult.assets[0].uri);
            }
        }
    };

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission required', 'Sorry, we need camera roll permissions to make this work!');
            }
            const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
            if (cameraStatus !== 'granted') {
                Alert.alert('Permission required', 'Sorry, we need camera permissions to make this work!');
            }
        })();
    }, []);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <AntDesign name="close" size={24} color={colors.primary} />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Select an option</Text>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => pickImage('camera')}
                    >
                        <AntDesign name="camerao" size={24} color={colors.white} />
                        <Text style={styles.modalButtonText}>Open Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => pickImage('gallery')}
                    >
                        <AntDesign name="picture" size={24} color={colors.white} />
                        <Text style={styles.modalButtonText}>Choose from Gallery</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        position: 'relative',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    modalButtonText: {
        color: colors.white,
        fontSize: 16,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default ImagePickerModal;
