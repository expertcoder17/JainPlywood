import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text,Dimensions, StatusBar,TouchableOpacity,FlatList} from 'react-native';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import Pdf from 'react-native-pdf';

export default class Catlog extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      lstPDF: [
        {
          id: 1,
          name: 'E3_Interio.pdf',
          location: "../../../assets/pdfs/1_E3_Interio.pdf",
          path: require("../../../assets/pdfs/1_E3_Interio.pdf"),
        },
        {
          id: 2,
          name: 'Legend_Vista_Folder_Web.pdf',
          location: "../../../assets/pdfs/2_Legend_Vista_Folder_Web.pdf",
          path: require("../../../assets/pdfs/2_Legend_Vista_Folder_Web.pdf"),
        },
        {
          id: 3,
          name: 'Meraki_Gold_Folder.pdf',
          location: "../../../assets/pdfs/3_Meraki_Gold_Folder.pdf",
          path: require("../../../assets/pdfs/3_Meraki_Gold_Folder.pdf"),
        },
        {
          id: 4,
          name: 'Meraki_Portfolio_2018_2019.pdf',
          location: "../../../assets/pdfs/4_Meraki_Portfolio_2018_2019.pdf",
          path: require("../../../assets/pdfs/4_Meraki_Portfolio_2018_2019.pdf"),
        },
        {
          id: 5,
          name: 'MERAKI.pdf',
          location: "../../../assets/pdfs/5_MERAKI.pd",
          path: require("../../../assets/pdfs/5_MERAKI.pdf"),
        },
        {
          id: 6,
          name: 'Timex_Exterior_ Comapact_laminates_(HPL).pdf',
          location: "../../../assets/pdfs/6_Timex_Exterior_ Comapact_laminates_(HPL).pdf",
          path: require("../../../assets/pdfs/6_Timex_Exterior_ Comapact_laminates_(HPL).pdf"),
        },
        {
          id: 7,
          name: 'Alutech_shade.pdf',
          location: "../../../assets/pdfs/7_Alutech_shade.pdf",
          path: require("../../../assets/pdfs/7_Alutech_shade.pdf"),
        }
      ]
    }
  }

  
  keyExtractor = (item, index) => item.id.toString()



  renderSeparator = () => (
    <View style = {{width: '100%',height:1,backgroundColor: '#707070'}}>
      
    </View>
  )

  renderEmptyComponent = () => (
    <View style = {{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
      <Text
        style={{
          color: '#999999',
          textAlign: 'center',
          padding: 20,
          paddingBottom: 0
        }}
      >
        Catlog not found
      </Text>
    </View>
  )

  renderItem  = ({ item }) => (
    <TouchableOpacity 
      activeOpacity={1} underlayColor="transparent"
      onPress = {() => this.props.navigation.navigate('PDFView',{selectedPDF: item})}>
      <View style = {{flexDirection: 'column',padding:20}}>
        <Text style = {{color: '#000',fontSize: 20}}>{item.name}</Text>
        <Text numberOfLines = {1} style = {{color: '#000',fontSize: 16}}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  )

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
              isVisibleBackArrow = {true}
              onBackPress={() => {
                this.props.navigation.goBack(null);
              }}
              title = {"Catlog"}/>
            <View style = {{flex: 1}}>
              <FlatList
                style = {{width: "100%"}}
                data={this.state.lstPDF}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.renderSeparator}
                ListEmptyComponent={this.renderEmptyComponent}
                contentContainerStyle = {{flexGrow: 1,paddingBottom:100}}
              />
              <View style = {{width: '100%',height:60,position: 'relative',bottom:0}}>
                <FooterSlide
                  parentProps = {this.props}/>
              </View>
            </View>
      </View>
    );
  }
}
