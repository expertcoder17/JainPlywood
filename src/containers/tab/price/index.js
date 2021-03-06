import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Image,StatusBar,Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import AppIntroSlider from '../../../components/view_pager/AppIntroSlider'
import LoginScreen from '../../auth/index'

const { width: screenWidth } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('window')

class Price extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      lstPriceChannai: [
        {
          id: 1,
          image: require("../../../assets/images/chennai/price_1.jpg"),
        },
        {
          id: 2,
          image: require("../../../assets/images/chennai/price_2.jpg"),
        },
        {
          id: 3,
          image: require("../../../assets/images/chennai/price_3.jpg"),
        },
        {
          id: 4,
          image: require("../../../assets/images/chennai/price_4.jpg"),
        },
        {
          id: 5,
          image: require("../../../assets/images/chennai/price_5.jpg"),
        },
        {
          id: 6,
          image: require("../../../assets/images/chennai/price_6.jpg"),
        },
        {
          id: 7,
          image: require("../../../assets/images/chennai/price_7.jpg"),
        },
        {
          id: 8,
          image: require("../../../assets/images/chennai/price_8.jpg"),
        },
        {
          id: 9,
          image: require("../../../assets/images/chennai/price_9.jpg"),
        },
        {
          id: 10,
          image: require("../../../assets/images/chennai/price_10.jpg"),
        },
        {
          id: 11,
          image: require("../../../assets/images/chennai/price_11.jpg"),
        },
        {
          id: 12,
          image: require("../../../assets/images/chennai/price_12.jpg"),
        },
        {
          id: 13,
          image: require("../../../assets/images/chennai/price_13.jpg"),
        }
      ],
      lstPriceTamilnadu: [
        {
          id: 1,
          image: require("../../../assets/images/tamil/price_1.jpg"),
        },
        {
          id: 2,
          image: require("../../../assets/images/tamil/price_2.jpg"),
        },
        {
          id: 3,
          image: require("../../../assets/images/tamil/price_3.jpg"),
        },
        {
          id: 4,
          image: require("../../../assets/images/tamil/price_4.jpg"),
        },
        {
          id: 5,
          image: require("../../../assets/images/tamil/price_5.jpg"),
        },
        {
          id: 6,
          image: require("../../../assets/images/tamil/price_6.jpg"),
        },
        {
          id: 7,
          image: require("../../../assets/images/tamil/price_7.jpg"),
        },
        {
          id: 8,
          image: require("../../../assets/images/tamil/price_8.jpg"),
        },
        {
          id: 9,
          image: require("../../../assets/images/tamil/price_9.jpg"),
        },
        {
          id: 10,
          image: require("../../../assets/images/tamil/price_10.jpg"),
        },
        {
          id: 11,
          image: require("../../../assets/images/tamil/price_11.jpg"),
        },
        {
          id: 12,
          image: require("../../../assets/images/tamil/price_12.jpg"),
        },
        {
          id: 13,
          image: require("../../../assets/images/tamil/price_13.jpg"),
        }
      ]
    }
  }


  keyExtractor = (item, index) => index.toString()
  
  _renderItem = (item) => {
    return (
      <TouchableOpacity activeOpacity={1} underlayColor="transparent"
        onPress = {() => this.props.navigation.navigate('ImageDetail',{selectedImage : item,request: 0})}>
        <Image
          style={{width: screenWidth-4,height:Platform.OS === 'android' ? screenHeight-165 : screenHeight-235,borderWidth:0,borderColor: '#FFFFFF',alignSelf: 'center'}}
          source={item.item.image}
          resizeMode ={'stretch'}
        />
      </TouchableOpacity>
    );
  }

  render (){
    const { navigate } = this.props.navigation;
    return(
      <View style= {{width: "100%",height: "100%",backgroundColor: '#FFFFFF'}}>
          {this.props.isLogin === 'true' ?
            <View
            style= {{width: "100%",height: "100%",backgroundColor: '#FFFFFF'}}>
              <StatusBar
              backgroundColor={'transparent'}
              translucent
              />
              <Header
                isVisibleBackArrow = {false}
                title = {"Price List"}/>
                <View style = {{width: '100%',height: screenHeight-180,}}>
                <View style = {{width: '100%',height: Platform.OS === 'android' ? screenHeight-165 : screenHeight-235 ,alignSelf: 'center',}}>
                  <AppIntroSlider 
                    renderItem={this._renderItem} 
                    keyExtractor={this.keyExtractor}
                    slides={this.props.login_city === 'tamilnadu' ? this.state.lstPriceTamilnadu : this.state.lstPriceChannai}
                    showSkipButton = {false}
                    showPrevButton = {false}
                    showNextButton = {false}
                    showDoneButton = {false}/>
                  </View>
                <View style = {{width: '100%',height:60,position: 'relative',bottom:0,backgroundColor: 'green'}}>
                <FooterSlide
                    parentProps = {this.props}/>
                </View>
              </View>
        </View>
        :
        <LoginScreen
          propsParent = {this.props}/>
          }
      </View>
     
      
    );
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
)(Price)

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenHeight-175,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
})

