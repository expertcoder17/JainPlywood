import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View,ImageBackground, Image, StatusBar,Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import LinearGradient from 'react-native-linear-gradient';

class SplashScreen extends Component {

  static navigationOptions = {
    header: null,
  }
  
  componentDidMount() {
    this._loadInitialState()
  }

  _loadInitialState = async () => {
    const { navigation } = this.props
    setTimeout(() => {
      navigation.replace('Dashboard')
    }, 2000)
  }

  render() {
    return (
      <View style={{ flex: 1,}}>
            <StatusBar
              backgroundColor={'transparent'}
              translucent
            />
            <LinearGradient
              colors={["#E31A22", "#F54920", "#F54920"]}
              style={{width: "100%",height: "100%",alignItems: 'center',justifyContent: 'center'}}>

               <Image style = {{width:'80%',height:'80%',alignSelf: 'center'}}
                source = {require("../../assets/images/splash_logo.jpg")}
                resizeMode = {'center'}/> 
                
            </LinearGradient>
           
       </View>
        
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(
  mapStateToProps,
  {}
)(SplashScreen)

