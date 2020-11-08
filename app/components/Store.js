import React, { Component } from 'react';
import {
  SafeAreaView, StatusBar, View, Text,
  KeyboardAvoidingView, TextInput, TouchableHighlight, ImageBackground,
  ScrollView,
  TouchableOpacity, Image
} from 'react-native';
import { signinStyles } from '../styles/SignInstyles';
import { storeStyle } from '../styles/Storestyle';

export default class Store extends Component {
  render() {
    return (
      <View style={storeStyle.mainContainer}>
        <StatusBar barStyle="light-content"
          translucent
          backgroundColor="#054AA5" />
        <View style={storeStyle.headerContainer}>

          <Image source={require('../assests/images/icon.png')}
            style={storeStyle.headerIcon} />
          <Text style={storeStyle.headerText}>Store</Text>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate('uploadPhoto')}
          >
            <Image source={require('../assests/images/Camera.png')}
              style={storeStyle.headerIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={storeStyle.catagoriesMainContainer}>
            <Text style={storeStyle.catagoriesText}>All Categories</Text>
            <View style={storeStyle.catagoriesContainer}>
              <View style={storeStyle.imagesArea}>
                <Image source={require('../assests/images/Group797.png')}
                  style={storeStyle.categoriesImage} />
                <Text style={storeStyle.imageText}>Egg</Text>
              </View>
              <View style={storeStyle.imagesArea}>
                <Image source={require('../assests/images/Group7971.png')}
                  style={storeStyle.categoriesImage} />
                <Text style={storeStyle.imageText}>Meat</Text>
              </View>
              <View style={storeStyle.imagesArea}>
                <Image source={require('../assests/images/Group7972.png')}
                  style={storeStyle.categoriesImage} />
                <Text style={storeStyle.imageText}>Vegetables</Text>
              </View>
              <View style={storeStyle.imagesArea}>
                <Image source={require('../assests/images/Group7973.png')}
                  style={storeStyle.categoriesImage} />
                <Text style={storeStyle.imageText}>Ghee</Text>
              </View>
            </View>
          </View>
            <View style={storeStyle.productTextContainer}>
              <Text style={storeStyle.productText}>Featured Products</Text>
              <TouchableHighlight>
                <Text style={storeStyle.viewText}>View all</Text>
              </TouchableHighlight>
            </View>
            <View style={storeStyle.storeDetail}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={storeStyle.bgImageContainer}>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
               </View>
            </ScrollView>
          </View>
          <View style={storeStyle.productTextContainer}>
              <Text style={storeStyle.productText}>New Products</Text>
              <TouchableHighlight>
                <Text style={storeStyle.viewText}>View all</Text>
              </TouchableHighlight>
            </View>
            <View style={storeStyle.storeDetail}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={storeStyle.bgImageContainer}>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
               </View>
            </ScrollView>
          </View>
          <View style={storeStyle.productTextContainer}>
              <Text style={storeStyle.productText}>Featured Products</Text>
              <TouchableHighlight>
                <Text style={storeStyle.viewText}>View all</Text>
              </TouchableHighlight>
            </View>
            <View style={storeStyle.storeDetail}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={storeStyle.bgImageContainer}>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
               </View>
            </ScrollView>
          </View>
          <View style={storeStyle.productTextContainer}>
              <Text style={storeStyle.productText}>Featured Products</Text>
              <TouchableHighlight>
                <Text style={storeStyle.viewText}>View all</Text>
              </TouchableHighlight>
            </View>
            <View style={storeStyle.storeDetail}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={storeStyle.bgImageContainer}>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                <View style={storeStyle.imagesSpace}>
                  <ImageBackground source={require('../assests/images/Rectangle1504.png')} style={storeStyle.backgroundImage}>
                    <View style={storeStyle.backgroundImageIneer}>
                      <View style={storeStyle.gramContainer}>
                        <View style={storeStyle.gramContainer1}>
                          <Text style={storeStyle.gramText}>100G</Text>
                        </View>
                        <View>
                        <Image source={require('../assests/images/Path2072.png')}
                          style={storeStyle.heartIcon}
                        />
                        </View>
                      </View>
                      <View style={storeStyle.rupeesContainer}>
                        <Text style={storeStyle.productText}>Ginger</Text>
                        <Text style={storeStyle.RupeesText}>Rs.60.00</Text>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
               </View>
            </ScrollView>
          </View>
         </ScrollView>
      </View>
    );
  }
}
