import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function OptionCard({option,selectedTraveller}) {
  return (
    <View style={[{
      padding:15,
      backgroundColor:Colors.LIGHT_GRAY,
      // borderColor:Colors.PRIMARY,
      
      borderRadius:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },selectedTraveller==option.title&&{borderWidth:1,borderColor:Colors.PRIMARY}]}>

      <View style={{
        display:'flex',
        // alignItems:'center',
        maxWidth:'70%',
        gap:5
      }}>
        <Text style={{
          fontSize:25,
          fontFamily:'outfit-bold'
        }}>{option?.title}</Text>

        <Text style={{
          fontSize:15,
          fontFamily:'outfit',
          color:Colors.GRAY,
          // textAlign:'center',
          // paddingHorizontal:10
        }}>{option?.desc}</Text>

        <Text>{option?.count}</Text>
      </View>
      <View>
        <Text>
          {option?.icon}
          {/* hello */}
        </Text>
      </View>
    </View>
  )
}