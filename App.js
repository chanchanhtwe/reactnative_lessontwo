import React, {Component} from 'react';
import { StyleSheet, Text, View ,Alert} from 'react-native';
import {Header,Card,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Newpost from './components/Newpost'
import Welcome from './components/Welcome'
import Setting from './components/Setting'
import Posts from './components/Posts'

export default class App extends Component{
  render(){
    const MyStack=createStackNavigator({
      Welcome:{
        screen:Welcome
      },
      Newpost:{
        screen:Newpost
      },
      Setting:{
        screen:Setting
      }
    },{
      initialRouteName:"Welcome",
      defaultNavigationOptions:{
        header:null
      }
    })

    const MyTab=createBottomTabNavigator({
      
      Posts:{
        screen:Posts,
        navigationOptions:{
          tabBarLabel:"Dashboard",
          tabBarIcon:({tintColor})=><Icon name="home" size={15} color={tintColor}></Icon>
        }
      },
      Newpost:{
        screen:Newpost,
        navigationOptions:{
          tabBarLabel:"Add New Post",
          tabBarIcon:({tintColor})=><Icon name="plus-circle" size={15} color={tintColor}></Icon>
        }
      }
    })

    const MyDrawer=createDrawerNavigator({
      Posts:MyTab,

      Welcome:{
        screen:Welcome,
        navigationOptions:{
          drawerLabel:"Dashboard",
          drawerIcon:({tintColor})=><Icon name="home" size={15} color={tintColor}></Icon>
        }
      },
      Setting:{
        screen:Setting,
        navigationOptions:{
          drawerLabel:"Setting",
          drawerIcon:({tintColor})=><Icon name="cog" size={15} color={tintColor}></Icon>
        }
      }

    },{
        drawerPosition:"left",
        drawerWidth:200,
        initialRouteName:"Welcome"
    },{
      initialRouteName:"Posts"
    })

  
    const MySwitch=createSwitchNavigator({
      MyD:MyDrawer,
      MyT:MyTab
    },{
      initialRouteName:"MyD"
    })

    const AppContainer=createAppContainer(MySwitch)

    return(<AppContainer></AppContainer>)
  }
}


