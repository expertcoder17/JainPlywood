import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text,FlatList, StatusBar,TouchableOpacity} from 'react-native';
import Header from '../../../components/Header'
import FooterSlide from '../../../components/FooterSlide'
import { getCatlogList } from '../../../actions/catlog'


class Catlog extends Component{
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCatlogList();
  }
  
  onRefresh = () => {
    this.props.getPriceList();
  }

  keyExtractor = (item, index) => item.CategoryID.toString()

  renderSeparator = () => <View style={{width: '100%',height: 1,marginTop:5,marginBottom:5,backgroundColor: '#CCCCCC'}} />

  renderItem = ({ item }) => (
    <View style = {{width: '100%',padding:10,justifyContent: 'center',alignItems: 'center',alignSelf: 'center'}}>
        <TouchableOpacity activeOpacity={1} underlayColor="transparent" 
         onPress={() => this.props.navigation.navigate('PDFViewer')}>
        <View style = {{width: '90%',flexDirection: 'column',padding:5}}>
            <Text style = {{color: '#000000',fontSize:18,fontFamily: 'OpenSans'}}>{item.CategoryName}</Text>
            <Text numberOfLines={1} style = {{color: '#000000',fontSize:14,fontFamily: 'OpenSans'}}>{item.ImagePath}</Text>
        </View>
       </TouchableOpacity> 
    </View>  
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
              isVisibleBackArrow = {false}
              title = {"Catlog List"}/>
            <View style = {{flex: 1}}>
              <FlatList
                  data={this.props.catlogList}
                  keyExtractor={this.keyExtractor}
                  renderItem={this.renderItem}
                  ItemSeparatorComponent={this.renderSeparator}
                  ListEmptyComponent={this.renderEmptyComponent}
                  refreshing={this.props.refreshing}
                  onRefresh={this.onRefresh}
                  contentContainerStyle = {{flexGrow: 1,marginTop:15}}
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

const mapStateToProps = state => {
  return {
    catlogList: state.catlog.catlogList,
    refreshing: false
  }
}

export default connect(
  mapStateToProps,
  { getCatlogList}
)(Catlog)
