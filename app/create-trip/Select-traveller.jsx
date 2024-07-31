import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SelectTraveller() {
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:'Select Travllers'
        })
    },[])
  return (
    <View style={{
        padding:25,
        paddingTop:100
    }}>
      <Text>SelectTravaller</Text>
    </View>
  )
}