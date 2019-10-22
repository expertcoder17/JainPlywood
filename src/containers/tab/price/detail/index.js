import React, { Component } from 'react';
import { View, Dimensions, StatusBar,Image} from 'react-native';
import Header from '../../../../components/Header'
import FooterSlide from '../../../../components/FooterSlide'

const { width: screenWidth } = Dimensions.get('window')
const { height: screenHeight } = Dimensions.get('window')
import ImageZoom from 'react-native-image-pan-zoom';

 

export default class ImageDetail extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log(2222,this.props.navigation.state.params.selectedImage.item.image)
  }
  
  render (){
    return(
      <View
          style= {{width: "100%",height: "100%",backgroundColor: '#FFFFFF'}}>
            <StatusBar
            backgroundColor={'transparent'}
            translucent
            />
            <Header
              isVisibleBackArrow = {true}
              title = {"Image Zoom"}
              onBackPress={() => {
                this.props.navigation.goBack(null);
              }}/>
              <View style = {{width: '100%',height: screenHeight-90,}}>
                <View style = {{width: '100%',height: screenHeight-150,}}>
                  <ImageZoom cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height-150}
                        imageWidth={screenWidth}
                        imageHeight={screenHeight-150}>
                      <Image style={{width:screenWidth, height:screenHeight-150,alignSelf: 'center',}}
                        resizeMode = {'stretch'}
                        source={this.props.navigation.state.params.selectedImage.item.image}/>
                  </ImageZoom>
                </View>
                <View style = {{width: '100%',height:60,position: 'relative',bottom:0,}}>
                  <FooterSlide
                    parentProps = {this.props}/>
                </View>
            </View>
      </View>
    );
  }
}

