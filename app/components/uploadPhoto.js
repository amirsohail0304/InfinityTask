// Second screen
import React, { Component } from 'react';
//import react in our code.
import { View, Text, TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native';
//import all the components we are going to use.
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from '../styles/uploadphotoStyle';

export default class uploadPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_show: false,
        };
    }
    async pickSingle(cropit, circular = false, mediaType) {
        ImagePicker.openPicker({
            width: 500,
            height: 500,
            cropping: cropit,
            cropperCircleOverlay: circular,
            sortOrder: 'none',
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
            cropperStatusBarColor: 'white',
            cropperToolbarColor: 'white',
            cropperActiveWidgetColor: 'white',
            cropperToolbarWidgetColor: '#3498DB',
        })
            .then((image) => {
                this.setState({
                    image: {
                        uri: image.path,
                        width: image.width,
                        height: image.height,
                        mime: image.mime,
                    }
                });
                console.log(this.state.image.uri);
                this.setState({ image_uri: this.state.image.uri });
                this.setState({ image_show: true });

            })
    }

    async captureSingle(cropit, circular = false, mediaType) {
        ImagePicker.openCamera({
            width: 500,
            height: 500,
            cropping: cropit,
            cropperCircleOverlay: circular,
            sortOrder: 'none',
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            compressImageQuality: 1,
            compressVideoPreset: 'MediumQuality',
            includeExif: true,
            cropperStatusBarColor: 'white',
            cropperToolbarColor: 'white',
            cropperActiveWidgetColor: 'white',
            cropperToolbarWidgetColor: '#3498DB',
            useFrontCamera: true
        })
            .then((image) => {
                this.setState({
                    image: {
                        uri: image.path,
                        width: image.width,
                        height: image.height,
                        mime: image.mime,
                    }
                });
                console.log(this.state.image.uri);
                this.setState({ image_uri: this.state.image.uri });
                this.setState({ image_show: true });
            })
            .catch((e) => {
                console.log(e.message ? e.message : e);
            });
    }
    render() {

        return (
            <View style={styles.MainContainer}>
                <StatusBar barStyle="light-content"
                    translucent
                    backgroundColor="transparent" />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer}
                    onPress={(props) => { this.props.navigation.goBack(null) }}>
                    <Image style={styles.Headericon}
                       source={require('../assests/images/arrowleft.png')} 
                    >
                    </Image>
                    </TouchableOpacity>
                   <View style={styles.textContainer}>
                   <Text style={styles.HeaderText}>UPLOAD A PHOTO</Text>
                   </View>
                   <View style={styles.textContainer}>
                   
                   </View>
                </View>
                {
                    this.state.image_show ?
                        (
                            <ImageBackground style={styles.BackgoundImage} source={{ uri: this.state.image_uri }}>

                            </ImageBackground>
                        ) :
                        (
                            <View style={styles.imageConatiner}>

                                <View style={styles.InnerimageConatiner}>

                                </View>
                            </View>
                        )
                }
                <View style={styles.footer}>
                <TouchableOpacity onPress={() => this.captureSingle(true, true, 'photo')}>
                        <View style={styles.FooterLRight}>
                            <Text style={styles.FooterText}>CAMERA ROLE</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.pickSingle(true, true, 'photo')}>
                        <View style={styles.FooterLeft}>
                            {
                                this.state.image_show ?
                                    <Text style={styles.FooterText}>CHANGE IMAGE</Text>
                                    :
                                    <Text style={styles.FooterText}>UPLOAD PHOTO</Text>
                            }
                        </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
        );
    }
}
