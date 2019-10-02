import React, {Component} from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'

// import screens
import SplashScreen from '../containers/splash/index'
import LoginScreen from '../containers/auth/index'
import AboutScreen from '../containers/tab/about/index'
import PriceScreen from '../containers/tab/price/index'
import CatlogScreen from '../containers/tab/catlog/index'
import PDFViewerScreen from '../containers/tab/catlog/pdfviewer/index'
import ContactUsScreen from '../containers/tab/contactus/index'
import URLScreen from '../containers/url/index'
import ImageDetailScreen from '../containers/tab/price/detail/index'
//Icons
const aboutIcon = require('../assets/images/tab_about_icon.png')
const priceIcon = require('../assets/images/tab_price_icon.png')
const catlogIcon = require('../assets/images/tab_catlog_icon.png')
const contactusIcon = require('../assets/images/tab_contact_us_icon.png')

const AboutTab = createStackNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      header: null
    }
  },  
})

const PriceTab = createStackNavigator({
  Price: {
    screen: PriceScreen,
    navigationOptions: {
      header: null
    }
  }
})

const CatlogTab = createStackNavigator({
  Catalogue: {
    screen: CatlogScreen,
    navigationOptions: {
      header: null
    }
  }
})

const ContactUsTab = createStackNavigator({
  ContactUs: {
    screen: ContactUsScreen,
    navigationOptions: {
      header: null
    }
  }
})

// BottomTabBarWithLogin
const TabNavigation = createBottomTabNavigator(
  {
    About: {
        screen: AboutTab,
        navigationOptions: {
          header: null , 
          tabBarIcon: ({ tintColor }) => <Image source={aboutIcon} style={{ resizeMode: 'contain', tintColor, width: 20, height: 20}} />
        },
        
      },

      Price: {
      screen: PriceTab,
      navigationOptions: {
        header: null , 
        tabBarIcon: ({ tintColor }) => <Image source={priceIcon} style={{resizeMode: 'contain', tintColor, width: 20, height: 20 }} />
      }
    },

    Catlog: {
      screen: CatlogTab,
      navigationOptions: {
        header: null , 

        tabBarIcon: ({ tintColor }) => <Image 
        source={catlogIcon} style={{ resizeMode: 'contain', tintColor, width: 25, height: 25 }} />
      }
    },

    ContactUs: {
      screen: ContactUsTab,
      navigationOptions: {
        header: null , 
        tabBarIcon: ({ tintColor }) => <Image source={contactusIcon} style={{resizeMode: 'contain', tintColor, width: 20, height: 20 }} />
      }
    },
  },

  {
    initialRouteName: 'About',
    swipeEnabled: false,
    tabBarPosition: 'bottom',
    lazy: false,
    removeClippedSubviews: true,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "#E32820",
      inactiveTintColor: "#707070",
      showLabel: true,
      style: {
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC'
      },
      iconStyle: {
        width: 40,
        height: 40
      },
      indicatorStyle: {
        borderTopWidth: 2,
        borderTopColor: "#E32820"
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false
  }
)

// Setup the stack navigation
const AppScreens = createStackNavigator({
      MainStack: { screen: TabNavigation, navigationOptions: { header: null } },
    },
    {
      initialRouteName: "MainStack"
    }
);


const MainApp = createAppContainer(
  createStackNavigator({
    Splash: SplashScreen,
    Login:LoginScreen,
    Dashboard: AppScreens,
    PDFViewer:PDFViewerScreen,
    ImageDetail:ImageDetailScreen,
    URLOpen:URLScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  })

)

export default MainApp
