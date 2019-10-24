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
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"# 259 Sydenhams Road\nAppa Rao Garden\nChoolai\nChennai 600 112"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"044 - 4865 6801 / 6802 / 6803"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Centrex - 6801/6802/6803"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Email : 600112jp@gmail.com"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Marketing & Sales :"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Lokesh - 72002 65435"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Suresh - 98840 04605"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Dayalan - 90431 26827"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Sudhakar - 72994 61653(Meraki)"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"D.N Mishra - 70102 66872(e3)"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Administration :"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Sarin Shah - 98848 43335"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Gurumurthy - 79045 20814"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Dispatch :"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Hemal Shah - 81440 06802"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Accounts :"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Hitesh Shah - 72 00 74 00  00"}</Text>

                  <View style = {{width: '100%',height:1,marginBottom:25,marginTop:25,backgroundColor: 'black'}}/>
                  
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',fontFamily: 'OpenSans-Semibold',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Rajesh Saw  Mill"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"# 171 Triplicane High Road,\nOpposite to  venkateswara students\nhostel Ice House\nChennai 600005"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"044 42 66 32 80"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"044 28 44 32 14"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Centrex - 3280"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Email : 600005jp@gmail.com"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Administration :"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Fathima - 99622 43388"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Srinivasan - 824 823 23 63"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Manager Sales & Dispatch : "}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Gopi - 866 755 73 24"}</Text>
                  <Text style = {{color: '#000000',fontSize: 20,textAlign: 'left',marginTop:25,fontFamily: 'OpenSans',textDecorationLine: 'underline',fontWeight: 'bold'}}>{"Accounts :"}</Text>
                  <Text style = {{color: '#000000',fontSize: 18,textAlign: 'left',marginTop:15,fontFamily: 'OpenSans'}}>{"Rajesh Shah - 81 22 00 22 22\n\n\n\n\n"}</Text>
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
