import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";
import moment from "moment";
import { useNavigation, useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const latestTrip = JSON.parse(userTrips[0]?.tripDetails);
  const router = useRouter()

  return (
    <View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {latestTrip?.location?.photoRef ? 
        <Image style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
        }} source={{uri:"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference="+latestTrip.location.photoRef+"&key="+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}></Image> :
        <Image
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
            borderRadius: 15,
          }}
          source={require("./../../assets/images/login.png")}
        ></Image>}
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 25,
            }}
          >
            {userTrips[0]?.tripPlan?.trip?.destination}
          </Text>
          <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:5
          }}>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 17,
              color:Colors.GRAY
            }}
            >
            {moment(latestTrip.startDate).format("DD MMM yyyy")}
          </Text>
          <Text
            style={{
                fontFamily: "outfit",
                fontSize: 17,
                color:Colors.GRAY,
                textAlign:'center'
            }}
          >
            🚌 {latestTrip.traveller.title}
          </Text>
          </View>
          <TouchableOpacity onPress={()=>{
            router.push({pathname:'/trip-details',params:{
                trip:JSON.stringify(userTrips[0])
            }})
          }}
            style={{
                padding: 15,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 10,
                marginTop: 10,
                marginHorizontal: 30,
              }}
          >
            <Text  style={{
            color: Colors.WHITE,
            textAlign:'center',
            fontSize:15,
            fontFamily:'outfit-medium'
        }}>See Your Plan</Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip,index)=>(
            <UserTripCard  trip={trip} key={index}/>
        ))}
      </View>
    </View>
  );
}
