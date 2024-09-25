import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import colors from '@/components/colors';
import GoBackButton from './backButton';

export default function RecipeVideoScreen() {
    const [loading, setLoading] = useState(true);
    const handlePlaybackStatusUpdate = (status: any) => {
        if (status.isLoaded) {
            setLoading(status.isBuffering);
        } else if (status.error) {
            console.log(`Playback error: ${status.error}`);
        }
    };

    return (
        <View style={styles.container}>
            <GoBackButton />
            {loading && (
                <ActivityIndicator
                    size="large"
                    color={colors.primary}
                    style={styles.loadingIndicator}
                />
            )}
            <Video
                source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay
                onLoadStart={() => setLoading(true)}
                onLoad={() => setLoading(false)}
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
                style={styles.video}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    loadingIndicator: {
        position: 'absolute',
        zIndex: 1,
    },
});
