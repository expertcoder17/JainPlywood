import React, { Component } from 'react';
import { View, Text,StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'

export default class Home extends Component{
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
              title = {"Contact Us"}/>
             <View style = {{flex: 1}}>
              <ScrollView style = {{flex:1,padding:15}}>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'center',fontFamily: 'OpenSans-Semibold'}}>{"Jain Plywoods"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'left',marginTop:10,fontFamily: 'OpenSans'}}>{"259 sydenhams Road Appa rao garden, Choolai Chennai 600112"}</Text>
                  <Text style = {{color: '#000000',fontSize: 16,alignSelf: 'flex-start',marginTop:25,textAlign: 'left',paddingLeft:12,fontFamily: 'OpenSans'}}>{"Phone : 044 4865 6801 / 6802 / 6803\n\nHitesh  Shah - 72 00 74 00 00\n\nHemal  Shah - 81 44 00 68 02\n\nSarin    Shah - 98 84 84 33 35\n\nRajesh  Shah - 81 22 00 22 22\n\n\n"}</Text>
              </ScrollView>
              <View style = {{width: '100%',height:60,position: 'relative',bottom:0}}>
                <FooterSlide
                  parentProps = {this.props}/>
              </View>
            </View>
      </View>
    );
  }
}
