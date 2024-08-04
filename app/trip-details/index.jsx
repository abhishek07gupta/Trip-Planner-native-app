import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";
import moment from "moment";

export default function TripDetails() {
  const { trip } = useLocalSearchParams();
  const navigation = useNavigation();
  const [tripData, setTripData] = useState();

  const formatData = (data) => {
    return JSON.parse(data);
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
    setTripData(JSON.parse(trip));
  }, []);
  return tripData && (
    <View>
      <Image
        style={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          borderRadius: 15,
        }}
        source={{
          uri:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
            formatData(tripData?.tripDetails).location?.photoRef +
            "&key=" +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        ></Image>
      <View style={{
        padding:15,
        height:'100%',
        backgroundColor:Colors.WHITE,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        marginTop:-30
      }}>
        <Text style={{
            // paddingLeft:5,
            fontSize:25,
            fontFamily:'outfit-bold',
            color:Colors.PRIMARY
        }}>{tripData?.tripPlan?.trip?.destination}</Text>
        
        <View style={{
            display:'flex',
            flexDirection:'row',
            gap:5,
            marginTop:5
        }}>
        <Text style={{
            fontSize:14,
            fontFamily:'outfit',
            color:Colors.GRAY,
        }}>{moment(formatData(tripData.tripDetails).startDate).format('DD MMM yyyy')}</Text>
        
        <Text style={{
            fontSize:14,
            fontFamily:'outfit',
            color:Colors.GRAY,
        }}>-  {moment(formatData(tripData.tripDetails).endDate).format('DD MMM yyyy')}</Text>
        </View>
        <Text
            style={{
                fontFamily: "outfit",
                fontSize: 17,
                color:Colors.GRAY,
            }}
          >
            🚌 {formatData(tripData.tripDetails).traveller.title}
          </Text>
      </View>
    </View>
  );
}
