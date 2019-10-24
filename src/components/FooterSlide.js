import React, { Component } from 'react'
import { connect } from 'react-redux'
import Carousel from 'react-native-banner-carousel';
import { View ,Text, StyleSheet, Image, Dimensions, TouchableOpacity,Linking } from 'react-native';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 60;


class FooterSlide extends Component {
  
  constructor(props) {
    super(props);
    //0 for pdf, 1 for yourtube and 2 for price list
    this.state = {
      lstAds: [
        {
          id: 1,
          image: require("../assets/images/banner_ads/benner_1.jpg"),
          request: 1,
          value: 'https://www.youtube.com/watch?v=FZGkj9bwx6w',
        },
        {
          id: 2,
          image: require("../assets/images/banner_ads/benner_2.jpg"),
          request: 1,
          value: 'https://www.youtube.com/watch?v=WGvOhh65azg',
        },
        {
          id: 3,
          request: 0,
          image: require("../assets/images/banner_ads/benner_3.jpg"),
          name: 'Legend_Vista_Folder_Web.pdf',
          location: "../assets/pdfs/2_Legend_Vista_Folder_Web.pdf",
          path: require("../assets/pdfs/2_Legend_Vista_Folder_Web.pdf"),
        },
        {
          id: 4,
          image: require("../assets/images/banner_ads/benner_20.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCkuXTowXwK0tn-vz2fnhhaA/videos',
        },
        {
          id: 5,
          image: require("../assets/images/banner_ads/benner_4.jpg"),
          request: 0,
          name: 'Timex_Exterior_ Comapact_laminates_(HPL).pdf',
          location: "../assets/pdfs/6_Timex_Exterior_ Comapact_laminates_(HPL).pdf",
          path: require("../assets/pdfs/6_Timex_Exterior_ Comapact_laminates_(HPL).pdf"),
        },
        {
          id: 6,
          image: require("../assets/images/banner_ads/benner_5.jpg"),
          request: 1,
          value: 'https://www.youtube.com/watch?v=zcdq3kSUv38&t=17s',
        },
        {
          id: 7,
          image: require("../assets/images/banner_ads/benner_6.jpg"),
          request: 0,
          name: 'E3_Interio.pdf',
          location: "../assets/pdfs/1_E3_Interio.pdf",
          path: require("../assets/pdfs/1_E3_Interio.pdf"),
        },
        {
          id: 8,
          image: require("../assets/images/banner_ads/benner_20.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCkuXTowXwK0tn-vz2fnhhaA/videos',
        },
        {
          id: 9,
          image: require("../assets/images/banner_ads/benner_7.jpg"),
          request: 2,
          value: '7',
          image_channai: require('../assets/images/channai/price_7.jpg'),
          image_tamilnadu: require('../assets/images/tamilnadu/price_7.jpg')
        },
        {
          id: 10,
          image: require("../assets/images/banner_ads/benner_8.jpg"),
          request: 2,
          value: '2',
          image_channai: require('../assets/images/channai/price_2.jpg'),
          image_tamilnadu: require('../assets/images/tamilnadu/price_2.jpg')
        },
        {
          id: 11,
          image: require("../assets/images/banner_ads/benner_9.jpg"),
          request: 1,
          value: 'https://www.youtube.com/watchv=iU6DmJ4CgCI&t=3s',
        },
        {
          id: 12,
          image: require("../assets/images/banner_ads/benner_20.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCkuXTowXwK0tn-vz2fnhhaA/videos',
        },
        {
          id: 13,
          image: require("../assets/images/banner_ads/benner_10.jpg"),
          request: 2,
          value: '6',
          image_channai: require('../assets/images/channai/price_6.jpg'),
          image_tamilnadu: require('../assets/images/tamilnadu/price_6.jpg')
        },
        {
          id: 14,
          image: require("../assets/images/banner_ads/benner_11.jpg"),
          request: 2,
          value: '5',
          image_channai: require('../assets/images/channai/price_5.jpg'),
          image_tamilnadu: require('../assets/images/tamilnadu/price_5.jpg')
        },
        {
          id: 15,
          image: require("../assets/images/banner_ads/benner_12.jpg"),
          request: 2,
          value: '9',
          image_channai: require('../assets/images/channai/price_9.jpg'),
          image_tamilnadu: require('../assets/images/tamilnadu/price_9.jpg')
        },
        {
          id: 16,
          image: require("../assets/images/banner_ads/benner_20.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCkuXTowXwK0tn-vz2fnhhaA/videos',
        },
        {
          id: 17,
          image: require("../assets/images/banner_ads/benner_13.jpg"),
          request: 1,
          value: 'https://www.youtube.com/watch?v=8v9Owme6jdI',
        },
        {
          id: 18,
          image: require("../assets/images/banner_ads/benner_14.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCRD82wqbu5v7Vju7-emCGTw',
        },
        {
          id: 19,
          image: require("../assets/images/banner_ads/benner_15.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channelUCl3ckO1adsIiPFHsb8Uizvg',
        },
        {
          id: 20,
          image: require("../assets/images/banner_ads/benner_20.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCkuXTowXwK0tn-vz2fnhhaA/videos',
        },
        {
          id: 21,
          image: require("../assets/images/banner_ads/benner_16.jpg"),
          request: 1,
          value: 'https://www.youtube.com/user/vnextbyvisaka',
        },
        {
          id: 22,
          image: require("../assets/images/banner_ads/benner_17.jpg"),
          request: 2,
          value: '9',
          image_channai: require('../assets/images/channai/price_9.jpg'),
          image_tamilnadu: require('../assets/images/tamilnadu/price_9.jpg')
        },
        {
          id: 23,
          image: require("../assets/images/banner_ads/benner_18.jpg"),
          request: 1,
          value: 'https://www.youtube.com/user/gluetalk',
        },
        {
          id: 24,
          image: require("../assets/images/banner_ads/benner_20.jpg"),
          request: 1,
          value: 'https://www.youtube.com/channel/UCkuXTowXwK0tn-vz2fnhhaA/videos',
        },
        {
          id: 25,
          image: require("../assets/images/banner_ads/benner_21.jpg"),
          request: 1,
          value: 'https://www.minwool.com/ceiling-tiles.htm',
        }
      ]
     
    }
  }

  renderPage(image, index) {
    return (
        <TouchableOpacity key = {index} activeOpacity={1} underlayColor="transparent"
          onPress = {() => this.onClickBannerAds(image, index)}>
          <View key={index}>
              <Image style={{ width: BannerWidth, height: BannerHeight }} 
                source={image.image}
                resizeMode = {'stretch'} />
          </View>
        </TouchableOpacity>
    );
  }

  onClickBannerAds = (image,index) => {
    if(image.request === 1){
      Linking.openURL(image.value);
    }else if(image.request === 2){
      var item = {}
      if(this.props.login_city === 'channai'){
        item = {
          id: image.id,
          image: image.image_channai,
        }
      }else{
        item = {
          id: image.id,
          image: image.image_tamilnadu,
        }
      }
      
      if(this.props.isLogin === 'true'){
        this.props.parentProps.navigation.navigate('ImageDetail',{selectedImage :item,request: 1})
      }else{
        this.props.parentProps.navigation.navigate("Login")
      }
    }else{
      this.props.parentProps.navigation.navigate('PDFView',{selectedPDF: image})
    }
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
            {this.state.lstAds.map((image, index) => this.renderPage(image, index))}
        </Carousel>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    number_random: Date.now(),
    isLogin: state.auth && state.auth.authentication ? ''+state.auth.authentication : 'false',
    login_city: state.auth && state.auth.login_city ? state.auth.login_city : '',
  }
}

export default connect(
  mapStateToProps,{
    
  }
)(FooterSlide)
