import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View 
    style={{
        padding:20,
        marginTop:50,
        display:'flex',
        alignItems:'center',
        gap:15
    }}>
        <Ionicons name="location-sharp" size={30} color='black' />
        <Text style={{
            fontSize:30,
            fontFamily:'outfit-bold'
        }}>No Trips Yet !</Text>
      <Text
      style={{
        fontSize:25,
        fontFamily:'outfit',
        textAlign:'center',
        color:Colors.GRAY
      }}>Its time to start having fun . Plan your first Trip</Text>

      <TouchableOpacity onPress={()=>{
        router.push('/create-trip/search-place')
      }}
      style={{
        padding:10,
        backgroundColor:Colors.PRIMARY,
        marginTop:20,
        borderRadius:10,
      }}>
        <Text style={{
            textAlign:'center',
            color:Colors.WHITE,
            fontFamily:'outfit',
            fontSize:25
        }}>New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}