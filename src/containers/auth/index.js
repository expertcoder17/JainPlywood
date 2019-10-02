import React, { Component } from 'react';
import { View, Text,StatusBar,TouchableOpacity,TextInput} from 'react-native';
import Header from '../../components/Header'
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state= {
      username: '',
      password: 'TAMILNADU',
    }
  }

  onClickSignIn = () => {
    if(this.state.username.trim().length === 0){
      alert("Please enter username.")
    }else if(this.state.password.trim().length === 0){
      alert("Please enter password.")
    }else{
      console.log(2525,this.state.password)
      console.log(2626,)
      if(this.state.password.toUpperCase() === "TAMILNADU" || this.state.password.toUpperCase() === "CHENNAI"){
        const { navigation } = this.props
        this.props.navigation.navigate("Dashboard",{"location": this.state.password.toUpperCase() })
      }else{
        alert("Password is incorrect.")
      }
      
    }
  }

  

  render (){
    const { navigate } = this.props.navigation;
    return(
      
      <View style= {{width: "100%",height: "100%",backgroundColor: '#FFFFFF',}}>
            <StatusBar
            backgroundColor={'transparent'}
            translucent
            />
            <Header
              isVisibleBackArrow = {false}
              title = {"Login"}/>
            <View style = {{width: '90%',height:250,justifyContent: 'center',alignItems: 'center',alignSelf: 'center',marginTop:-80}}/>
              <View style = {{width: '90%',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',alignSelf: 'center'}}>
                  <View style = {{width: '100%',flexDirection: 'column',marginTop:15,alignSelf: 'center'}}>
                      <Text style = {{color: '#707070',fontSize:16,marginTop:20,paddingLeft:3,fontFamily: 'OpenSans'}}>{"Username"}</Text>
                      <TextInput style = {{width: '100%',height: 46, color: '#707070',fontSize:16,borderColor: '#D6D1D2',borderWidth:1,borderRadius: 25,marginTop:5,paddingLeft:15,fontFamily: 'OpenSans'}}
                        placeholder = {"Enter Username"}
                        returnKeyType = {'next'}
                        keyboardType = {'default'}
                        selectionColor ={'#CCCCCC'}
                        value = {this.state.username}
                        onChangeText={(username) => this.setState({username})}
                        underlineColorAndroid="transparent">
                      </TextInput>
                  </View>

                  <View style = {{width: '100%',flexDirection: 'column',marginTop:10,alignSelf: 'center'}}>
                      <Text style = {{color: '#707070',fontSize:16,paddingLeft:3,fontFamily: 'OpenSans'}}>{"Password"}</Text>
                      <TextInput style = {{width: '100%',height: 46, color: '#707070',fontSize:16,borderColor: '#D6D1D2',borderWidth:1,borderRadius: 22,marginTop:5,paddingLeft:15,fontFamily: 'OpenSans'}}
                        placeholder = {"Enter Password"}
                        returnKeyType = {'done'}
                        keyboardType = {'default'}
                        selectionColor ={'#CCCCCC'}
                        value = {this.state.password}
                        onChangeText={(password) => this.setState({password})}
                        underlineColorAndroid="transparent"
                        secureTextEntry>

                      </TextInput>
                  </View>

                  <TouchableOpacity activeOpacity={1} underlayColor="transparent" style = {{width: "100%",height:46,borderRadius: 22,backgroundColor: "#3F398F",alignSelf: 'center',alignItems: 'center',justifyContent: 'center',marginTop:20}}
                    onPress = {() => this.onClickSignIn()}>
                      <LinearGradient
                      colors={["#E31A22", "#E32820", "#F54920"]}
                      style={{width: "100%",height:46,borderRadius: 22,alignSelf: 'center',alignItems: 'center',justifyContent: 'center',}}>
                        <Text style = {{color: '#FFFFFF',fontSize:16,alignSelf: 'center',fontFamily: 'OpenSans'}}>{"SIGN IN"}</Text>
                      </LinearGradient>
                  </TouchableOpacity>
            </View>  
      </View>
    );
  }
}
