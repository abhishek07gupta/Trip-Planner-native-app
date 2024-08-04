import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment';

export default function UserTripCard({trip}) {
    const formatData=(data)=>{
        return JSON.parse(data);
    }
  return (
    <View style={{marginTop:15}}>
      <Image style={{width:100,height:100}} source={require('./../../assets/images/login.pnd')}/>
      <View>
        <Text>{trip?.tripPlan?.travelPlan?.location}</Text>
        <Text>{moment(formatData(trip.tripData).startDate)}</Text>
      </View>
    </View>
  )
}