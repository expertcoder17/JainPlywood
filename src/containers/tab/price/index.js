import React, { Component } from 'react';
import { View, Image,StatusBar,Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import AppIntroSlider from '../../../components/view_pager/AppIntroSlider'

const { width: screenWidth } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('window')

var c_price_1 = require('../../../assets/images/channai_price_1.jpg')

export default  class Price extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      lstPriceChannai: [
        {
          id: 1,
          image: c_price_1,
        },
        {
          id: 2,
          image: c_price_1,
        },
        {
          id: 3,
          image: c_price_1,
        },
        {
          id: 4,
          image: c_price_1,
        },
        {
          id: 5,
          image: c_price_1,
        }
      ]
    }
  }


  keyExtractor = (item, index) => index.toString()
  
  _renderItem = (item,index) => {
    console.log(4949,item.id)
    return (
      <TouchableOpacity activeOpacity={1} underlayColor="transparent"
        onPress = {() => this.props.navigation.navigate('ImageDetail')}>
        <Image
          style={{width: screenWidth-4,height:screenHeight-235,borderWidth:0,borderColor: '#FFFFFF',alignSelf: 'center'}}
          source={index%2 === 0 ? require('../../../assets/images/channai_price_1.jpg'): require('../../../assets/images/channai_price_2.jpg')}
          resizeMode ={'stretch'}
        />
      </TouchableOpacity>
    );
  }

  render (){
    const { navigate } = this.props.navigation;
    return(
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
              <View style = {{width: '100%',height: screenHeight-235,alignSelf: 'center',}}>
                <AppIntroSlider 
                  renderItem={this._renderItem} 
                  keyExtractor={this.keyExtractor}
                  slides={this.state.lstPriceChannai}
                  showSkipButton = {false}
                  showPrevButton = {false}
                  showNextButton = {false}
                  showDoneButton = {false}/>
                </View>
              <View style = {{width: '100%',height:60,position: 'relative',bottom:0}}>
                <FooterSlide
                  parentProps = {this.props}/>
              </View>
            </View>
      </View>
    );
  }
}

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

