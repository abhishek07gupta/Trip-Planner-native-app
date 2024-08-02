import { View, Text, FlatList, FlatListComponent, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import {Colors} from './../../constants/Colors'
import {SelectTravelersList} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'

export default function SelectTraveller() {
    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle:''
        })
    },[])

    const [selectedTraveller, setSelectedTraveller] = useState();

  return (
    <View style={{
        padding:25,
        paddingTop:100,
        height:'100%',
        backgroundColor:Colors.WHITE

    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:5
      }}>Who's Travelling</Text>
      <View style={{marginTop:10}}>
        <Text style={{fontFamily:'outfit-bold', fontSize:25}}>Select your Travellers</Text>
        <FlatList data={SelectTravelersList}
        keyExtractor={item => item.id}
        renderItem={({item,index})=>(
          <TouchableOpacity style={{
            paddingTop:20
          }}
          onPress={()=>{setSelectedTraveller(item.title)}}>
            <OptionCard option={item} selectedTraveller={selectedTraveller}/>
          </TouchableOpacity>
  )}>
          
        </FlatList>
      </View>
          </View>
  )
}