import React, { Component } from 'react'
import { View, Text, Image,ImageBackground,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
class Header extends Component {
  
  render() {
    return (
      <LinearGradient
              colors={["#E31A22", "#F54920", "#F54920"]}
              style={{width: "100%",height: 90}}>
                <View style= {{width: "100%",height: 90,justifyContent: 'space-between',alignItems: 'center',flexDirection: 'row'}}>
                  <View style = {{width: '10%',justifyContent: 'center'}}>
                    {this.props.isVisibleBackArrow ?
                      <TouchableOpacity activeOpacity={1} underlayColor="transparent"  onPress={this.props.onBackPress} 
                        style= {{width: 35,height: 20,justifyContent: "center",alignItems: 'center',padding:5,marginTop:20,zIndex:999}}>
                          <Image
                            source={require('../assets/images/back_arrow.png')}
                            style= {{width: "100%",height: 18,alignSelf: 'center',zIndex:-1}}>
                            </Image>
                      </TouchableOpacity>
                      :
                      null
                    }
                  
                  </View> 
                  <View style = {{width: '80%',alignItems: 'center',justifyContent: 'center'}}>
                  <Text style = {{color: '#FFFFFF',fontSize: 18,alignSelf: 'center',paddingTop:25,fontFamily: 'OpenSans-Semibold',textAlign: 'center'}}>{this.props.title}</Text>
                  </View>
                  <View style = {{width: '10%'}}>
                    
                  </View>
              </View>
     </LinearGradient> 
    )
  }
}

export default Header
