import React, { Component } from 'react';
import { View, Text,StatusBar, TouchableOpacity,Linking} from 'react-native';
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
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',fontFamily: 'OpenSans-Semibold',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Jain Plywoods"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:10,fontFamily: 'OpenSans'}}>{"# 259 Sydenhams Road\nAppa Rao Garden\nChoolai\nChennai 600 112"}</Text>
                  <Text onPress={ ()=> Linking.openURL(`tel:${9424599440}`) } style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:10,fontFamily: 'OpenSans'}}>{"044 - 4865 6801 / 6802 / 6803"}</Text>   


                  <View style = {{width: '100%', height:1,backgroundColor: 'black'}}/>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'center',fontFamily: 'OpenSans-Semibold',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"\n\nRajesh Saw  Mill"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'left',marginTop:10,fontFamily: 'OpenSans'}}>{"# 171 Triplicane High Road,Opposite to  venkateswara students hostel Ice House Chennai 600005"}</Text>
                  <Text style = {{color: '#000000',fontSize: 16,alignSelf: 'flex-start',marginTop:25,textAlign: 'left',paddingLeft:12,fontFamily: 'OpenSans'}}>{"044 42 66 32 80\n044 28 44 32 14\n\nCentrex - 3280\n\nEmail : 600005jp@gmail.com\n\n\nAdministration :\n\nFathima - 99622 43388\n\nSrinivasan - 824 823 23 63\n\n\nManager Sales & Dispatch\n\nGopi - 866 755 73 24\n\n\nAccounts :\n\nRajesh Shah - 81 22 00 22 22\n\n\n\n"}</Text>
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
