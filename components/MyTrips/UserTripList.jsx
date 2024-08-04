import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import UserTripCard from "./UserTripCard";

export default function UserTripList({ userTrips }) {
  const latestTrip = JSON.parse(userTrips[0]?.tripPlan?.tripData);
  return (
    <View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "240",
            objectFit: "cover",
            borderRadius: 15,
          }}
          source={require("./../../assets/images/login.png")}
        ></Image>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            {userTrips[0]?.tripPlan?.travelPlan?.location}
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
                color:Colors.GRAY
            }}
          >
            🚌{latestTrip.traveller.title}
          </Text>
          </View>
          <TouchableOpacity
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
            <UserTripCard trip={trip}/>
        ))}
      </View>
    </View>
  );
}
