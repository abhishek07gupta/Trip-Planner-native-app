import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option,selectedOption}) {
  return (
    <View style={[{
      padding:10,
      backgroundColor:Colors.LIGHT_GRAY,
      borderRadius:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      height:120
    },selectedOption?.id==option.id&&{borderWidth:3,borderColor:Colors.PRIMARY}]}>

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

        {/* <Text>{option?.count}</Text> */}
      </View>
      <View>
        <Text style={{
          fontSize:40
        }}>
          {option?.icon}
        </Text>
      </View>
    </View>
  )
}