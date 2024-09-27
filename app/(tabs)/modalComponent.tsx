import React from 'react';
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
        const permissionsGranted = await handlePermissions();
        if (!permissionsGranted) {
            Alert.alert(
                "Permissions Denied",
                "You need to allow permissions to access the camera or gallery."
            );
            return;
        }
        if (option === 'camera') {
            const cameraResult = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!cameraResult.canceled && cameraResult.assets) {
                onImagePicked(cameraResult.assets[0].uri);
            }
        } else if (option === 'gallery') {
            const galleryResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!galleryResult.canceled && galleryResult.assets) {
                onImagePicked(galleryResult.assets[0].uri);
            }
        }
        onClose();
    };

    const handlePermissions = async () => {
        try {
            const cameraPermissions = await ImagePicker.requestCameraPermissionsAsync();
            const mediaLibraryPermissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (cameraPermissions.status !== 'granted' || mediaLibraryPermissions.status !== 'granted') {
                return false;
            }
            return true;
        } catch (error) {
            console.error("Permissions error:", error);
            return false;
        }
    };

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
