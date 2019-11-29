import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Setting extends Component{
    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>this.props.navigation.openDrawer() }}
                    centerComponent={{ text: 'Setting', style: { color: '#fff' } }}
                    rightComponent={
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                           <Text>
                               <Icon name="home" size={15} color="#fff"></Icon>
                            </Text> 
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}
