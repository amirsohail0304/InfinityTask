import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function RecipeVideoScreen() {

    return (
        <Video
            source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }} // Replace with your video URL
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
            style={styles.video}
        />
    );
}

const styles = StyleSheet.create({
    video: {
        width: '100%',
        height: '100%',
    },
});