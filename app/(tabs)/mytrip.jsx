import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);

  useEffect(()=>{

  },[userTrips])
  return (
    <View style={{
      padding:25,
      marginTop:20,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
      }}>
      <Text
      style={{
        // textAlign:'center',
        fontFamily:'outfit-bold',
        fontSize:30
      }}>My Trips </Text>
      <Ionicons name="add-circle" size={40} color="black" />
      </View>
      {userTrips.length===0?<StartNewTripCard/>:'your trips'}
    </View>
  )
}