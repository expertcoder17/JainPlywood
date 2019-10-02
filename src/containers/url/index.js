import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View,StatusBar} from 'react-native';
import { WebView } from 'react-native-webview';

import Header from '../../components/Header'

export default class URLOpen extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }  

  render (){
    return(
      <View
          style= {{width: "100%",height: "100%",backgroundColor: '#FFFFFF'}}>
            <StatusBar
            backgroundColor={'transparent'}
            translucent
            />
            <Header
              isVisibleBackArrow = {true}
              title = {"Ad"}
              onBackPress={() => {
                this.props.navigation.goBack(null);
              }}/>
              <View style = {{flex: 1}}>
              <WebView source={{ uri: 'https://facebook.github.io/react-native/' }} />
              </View>
      </View>
    );
  }
}

