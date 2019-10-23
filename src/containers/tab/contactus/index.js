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
                  <Text style = {{color: '#000000',fontSize: 16,alignSelf: 'flex-start',marginTop:25,textAlign: 'left',paddingLeft:12,fontFamily: 'OpenSans'}}>{"Phone : 044 4865 6801 / 6802 / 6803\n\nCentrex - 6801/6802/6803\n\n\nMarketing & Sales\n\nLokesh - 72002 65435\n\nSuresh - 98840 04605\n\nDayalan - 90431 26827\n\nSudhakar - 72994 61653\n(Meraki)\n\nMishra - 70102 66872\n(e3)\n\n\nAdministration :\n\nSarin Shah - 98848 43335\n\nGuru - 79045 20814\n\n\nDispatch :\n\nHemal shah - 81440 06802\n\n\nAccounts :\n\nHitesh Shah - 72 00 74 00  00\n\n"}</Text>
                  <View style = {{width: '100%', height:1,backgroundColor: 'black'}}/>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'center',fontFamily: 'OpenSans-Semibold'}}>{"\n\nRajesh Saw  Mill"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'left',marginTop:10,fontFamily: 'OpenSans'}}>{"# 171 Triplicane High Road,Opposite to venkateswara students hostel Ice House Chennai 600005"}</Text>
                  <Text style = {{color: '#000000',fontSize: 16,alignSelf: 'flex-start',marginTop:25,textAlign: 'left',paddingLeft:12,fontFamily: 'OpenSans'}}>{"044 42 66 32 80\n044 28 44 32 14\n\nCentrex - 3280\n\nEmail : rsmbills171@gmail.com\n\n\nAdministration :\n\nFathima - 99622 43388\n\nSrinivasan - 824 823 23 63\n\n\nManager Sales & Dispatch\n\nGopi - 866 755 73 24\n\n\nAccounts :\n\nRajesh Shah - 81 22 00 22 22\n\n\n\n"}</Text>
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
