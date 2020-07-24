import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {styles} from './styles'
export default function Follow(){
    return(
        <TouchableOpacity style={styles.container}>
            <Icon name={'plus'} color={'black'}/>
            <Text color={'white'} style={styles.text}>
                Follow
            </Text>

        </TouchableOpacity>
    )
}