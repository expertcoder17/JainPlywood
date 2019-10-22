import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text,Dimensions, StatusBar,TouchableOpacity} from 'react-native';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import Pdf from 'react-native-pdf';

export default class Catlog extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
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
              title = {"Catlog"}/>
            <View style = {{flex: 1}}>
                <Pdf
                    source={require("../../../assets/alutech_shade.pdf")}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={{
                        flex:1,
                        width:Dimensions.get('window').width,
                    }}/>
                <View style = {{width: '100%',height:60,position: 'relative',bottom:0}}>
                <FooterSlide
                  parentProps = {this.props}/>
              </View>
            </View>
      </View>
    );
  }
}
