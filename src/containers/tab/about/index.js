import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, StatusBar,Alert,Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import {checkUserAuthentication} from '../../../actions/auth'
import DeviceInfo from 'react-native-device-info';
import { getAppstoreAppVersion } from "react-native-appstore-version-checker";


class Home extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }


  //On Android u can do

  componentDidMount(){
    this.props.checkUserAuthentication();
    console.log("Build getBundleId:: ", DeviceInfo.getBundleId());
    console.log("Build Number:: ", DeviceInfo.getBuildNumber());
    console.log("DeviceInfo.getVersion():: ",  DeviceInfo.getVersion())

    getAppstoreAppVersion("com.JainPlywoods.android") //put any apps packageId here
    .then(appVersion => {
      console.log(3232, appVersion);
      if(DeviceInfo.getVersion() === appVersion){
        Alert.alert(
          'Alert',
          'Please update your application from Google Play Store',
          [
            {text: 'Cancel',onPress: () => this.props.navigation.goBack(null), style: 'cancel',},
            {text: 'Update', onPress: () => Linking.openURL("market://details?id=com.JainPlywoods.android")},
          ],
          {cancelable: false},
        );
      }
    })
    .catch(err => {
      console.log("error occurred", err);
    });


    getAppstoreAppVersion("529479190") //put any apps id here
    .then(appVersion => {
      console.log(5252, appVersion);
      if(DeviceInfo.getVersion() !== appVersion){
        Alert.alert(
          'Alert',
          'Please update your application from Apple Store',
          [
            {text: 'Update', onPress: () => console.log('OK Pressed')},
          ],
          
        );
      }
    })
    .catch(err => {
      console.log("error occurred", err);
    });
    
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
              title = {"About"}/>
            <View style = {{flex: 1}}>
              <ScrollView style = {{flex:1,padding:15}}>
                  <Text style = {{color: '#000000',fontSize: 18,alignSelf: 'center',textAlign: 'center',fontFamily: 'OpenSans-Semibold'}}>{"Formerly knows as JAIN GROUP"}</Text>
                  <Text style = {{color: '#000000',fontSize: 16,alignSelf: 'center',marginTop:15,textAlign: 'left',fontFamily: 'OpenSans'}}>{"It was established in 1967 by JETHALAL HIRJI GOGRI - A first generation Entrepreneur who laid the foundation and started the company with a vision of being a credible , passionate & innovative solutions provider.\n\nFollowing his inputs and hard work, The company led by second generation Entrepreneurs -- Raichand Shah, Ramanik Shah , Mansukh Shah & Hitesh Shah - strengthened the foundation of the company with their desire , dedication determination.\n\nSince its inception in 1967 , JAIN PLYWOODS has been commanding  an unshaken trust in the industry, by dint of its die-hard commitment towards quality, innovation and customer delight.\n\nWith the support of around 1500 dealers across TAMILNADU, Jain Plywoods delivers the highest degree of integrity and honesty to all its dealers and customers.\n\nWe follow a simple mantra of \"Delivering what we promise and exceeding expectations \"\n\nOur Ethics, Vision and Values are the core of our business with \"Quality, Commitment and Enthusiasm\" which makes JAIN PLYWOODS Prominent.\n\nOperating as a family owned company since 1967, JAIN PLYWOODS are fortunate and thanks all their suppliers for helping , provide top quality products.\n\nJAIN PLYWOODS owe's its success to their team of dedicated staffs and are especially grateful to all their dealers & customers, for their patronage and appreciate their confidence , for continually trusting in our services and products.\n\n\n\n"}</Text>
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
const mapStateToProps = state => {
  return {
    number_random: Date.now(),
    isLogin: state.auth && state.auth.authentication ? state.auth.authentication : false,
    login_city: state.auth && state.auth.login_city ? state.auth.login_city : '',
  }
}

export default connect(
  mapStateToProps,{
    checkUserAuthentication
  }
)(Home)
