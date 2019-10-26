import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text,Dimensions, StatusBar,TouchableOpacity, Platform} from 'react-native';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import Pdf from 'react-native-pdf';

export default class PDFCatlog extends Component{
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
              isVisibleBackArrow = {true}
              onBackPress={() => {
                this.props.navigation.goBack(null);
              }}
              title = {this.props.navigation.state.params.selectedPDF.name}/>
              {/* this.props.navigation.state.params.selectedPDF.path */}
            <View style = {{flex: 1}}>
                <Pdf
                    source={Platform.OS === 'ios' ? '' : {uri:'bundle-assets://pdf/1_E3_Interio.pdf'}}
                    onLoadComplete={(numberOfPages,filePath)=>{
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                    }}
                    onError={(error)=>{
                        console.log(46,error);
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
