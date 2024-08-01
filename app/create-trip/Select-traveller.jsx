import { View, Text, FlatList, FlatListComponent } from 'react-native'
import React, { useEffect } from 'react'
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
        renderItem={(item,index)=>(
          <View>
            <OptionCard option={item}/>
          </View>
  )}>
          
        </FlatList>
      </View>
          </View>
  )
}