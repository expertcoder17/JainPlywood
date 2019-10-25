import React, { Component } from 'react';
import { View, Text,StatusBar, TouchableOpacity,Linking,Platform} from 'react-native';
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

  dialCall = (number) => {
 
    let phoneNumber = '';
 
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    }
    else {
      phoneNumber = `telprompt:${number}`;
    }
 
    Linking.openURL(phoneNumber);
  };
  
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
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"# 259 Sydenhams Road\nAppa Rao Garden\nChoolai\nChennai 600 112"}</Text>

                  <TouchableOpacity onPress={() => this.dialCall('044 4865 6801')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"044 - 4865 6801 / 6802 / 6803"}</Text>
                  </TouchableOpacity>
                  
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Centrex - 6801/6802/6803"}</Text>

                  <TouchableOpacity onPress={() => Linking.openURL('mailto:600112jp@gmail.com')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Email : 600112jp@gmail.com"}</Text>
                  </TouchableOpacity>
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Marketing & Sales :"}</Text>
                  
                  <TouchableOpacity onPress={() => this.dialCall('72002 65435')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',fontFamily: 'OpenSans',marginTop:15,}}>{"Lokesh - 72002 65435"}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => this.dialCall('98840 04605')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Suresh - 98840 04605"}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => this.dialCall('90431 26827')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Dayalan - 90431 26827"}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => this.dialCall('72994 61653')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Sudhakar - 72994 61653(Meraki)"}</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity onPress={() => this.dialCall('70102 66872')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"D.N Mishra - 70102 66872(e3)"}</Text>
                  </TouchableOpacity>
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Administration :"}</Text>
                  
                  <TouchableOpacity onPress={() => this.dialCall('98848 43335')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Sarin Shah - 98848 43335"}</Text>
                  </TouchableOpacity>
                   
                  <TouchableOpacity onPress={() => this.dialCall('79045 20814')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Gurumurthy - 79045 20814"}</Text>
                  </TouchableOpacity>
                  
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Dispatch :"}</Text>
                  
                  <TouchableOpacity onPress={() => this.dialCall('81440 06802')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Hemal Shah - 81440 06802"}</Text>
                  </TouchableOpacity>
                  
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Accounts :"}</Text>
                  
                  <TouchableOpacity onPress={() => this.dialCall('72 00 74 00  00')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Hitesh Shah - 72 00 74 00  00"}</Text>
                  </TouchableOpacity>
                  

                  <View style = {{width: '100%',height:1,marginBottom:25,marginTop:25,backgroundColor: 'black'}}/>
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',fontFamily: 'OpenSans-Semibold',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Rajesh Saw  Mill"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"# 171 Triplicane High Road,\nOpposite to  venkateswara students\nhostel Ice House\nChennai 600005"}</Text>

                  <TouchableOpacity onPress={() => this.dialCall('044 42 66 32 80')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"044 42 66 32 80"}</Text>
                  </TouchableOpacity>
                  
                  
                  <TouchableOpacity onPress={() => this.dialCall('044 28 44 32 14')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"044 28 44 32 14"}</Text>
                  </TouchableOpacity>
                  
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Centrex - 3280"}</Text>

                  <TouchableOpacity onPress={() => Linking.openURL('mailto:600005jp@gmail.com')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Email : 600005jp@gmail.com"}</Text>
                  </TouchableOpacity>
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Administration :"}</Text>

                  <TouchableOpacity onPress={() => this.dialCall('63 69 35 85 98')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"FATHIMA - 63 69 35 85 98"}</Text>
                  </TouchableOpacity>
                  

                  <TouchableOpacity onPress={() => this.dialCall('824 823 23 63')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Srinivasan - 824 823 23 63"}</Text>
                  </TouchableOpacity>
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Manager Sales & Dispatch : "}</Text>

                  <TouchableOpacity onPress={() => this.dialCall('866 755 73 24')} activeOpacity={0.7} >
                    <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Gopi - 866 755 73 24"}</Text>
                  </TouchableOpacity>
                  

                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Accounts :"}</Text>

                  <TouchableOpacity onPress={() => this.dialCall('81 22 00 22 22')} activeOpacity={0.7} >
                      <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Rajesh Shah - 81 22 00 22 22"}</Text>
                  </TouchableOpacity>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"\n\n"}</Text>
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
