import { View, Text, Image } from "react-native";
import React from "react";
import moment from "moment";
import { Colors } from "../../constants/Colors";

export default function UserTripCard({ trip }) {
  const formatData = (data) => {
    return JSON.parse(data);
  };
  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
      }}
    >
      {formatData(trip.tripDetails)?.location?.photoRef ? (
        <Image
          style={{
            width: 100,
            height: 100,
            objectFit: "cover",
            borderRadius: 15,
          }}
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=" +
              formatData(trip.tripDetails).location.photoRef +
              "&key=" +
              process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          }}
        ></Image>
      ) : (
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={require("./../../assets/images/login.png")}
        />
      )}
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          {trip?.tripPlan?.trip?.destination}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            color: Colors.GRAY,
          }}
        >
          {moment(formatData(trip.tripDetails).startDate).format("DD MMM yyyy")}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            color: Colors.GRAY,
          }}
        >
          {formatData(trip.tripDetails).traveller.title}
        </Text>
      </View>
    </View>
  );
}
