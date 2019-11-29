import React,{Component} from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Header} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Welcome extends Component{
    render(){
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>this.props.navigation.openDrawer() }}
                    centerComponent={{ text: 'Welcome', style: { color: '#fff' } }}
                    rightComponent={
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Newpost")}>
                            <Text>
                                <Icon color="#fff" size={15} name="plus-circle"></Icon>
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}
