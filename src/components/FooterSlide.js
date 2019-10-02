import React, { Component } from 'react'
import Carousel from 'react-native-banner-carousel';
import { View ,Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 60;

const images = [
  "http://xxx.com/1.png",
  "http://xxx.com/2.png",
  "http://xxx.com/3.png"
];

class FooterSlide extends Component {
  


  renderPage(image, index) {
    return (
        <TouchableOpacity key = {index} activeOpacity={1} underlayColor="transparent"
          onPress = {() => this.props.parentProps.navigation.navigate('URLOpen')}>
          <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight }} 
                source={index/2 === 0 ? require('../assets/images/banner_1.png') : require('../assets/images/banner_2.png')} />
          </View>
        </TouchableOpacity>
    );
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <View style = {{width: '100%',height:60}}>
        <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            keyExtractor={this.keyExtractor}
            pageSize={BannerWidth}
            showsPageIndicator = {false}>
            {images.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    )
  }
}

export default FooterSlide
