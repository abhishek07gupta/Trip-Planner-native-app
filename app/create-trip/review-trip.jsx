import {
  View,
  Text,
  ToastAndroid,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect } from "react";
import { CreateTripContext } from "../../context/CreateTripContext";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import moment from "moment";

export default function ReviewTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        height: "100%",
        backgroundColor: Colors.WHITE,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          marginTop: 5,
          // textAlign:'center',
        }}
      >
        Review Trip
      </Text>

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
            // color:Colors.GRAY
          }}
        >
          Confirm Your Trip Details to embarch on a new Journey
        </Text>
        <View
          style={{
            padding: 10,
            marginTop: 25,
            display:'flex',
            gap:10
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              alignItems: "center",
              // justifyContent:'space-between'
            }}
          >
            <Ionicons name="location-sharp" size={35} color="black" />
            <View>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 15,
                  color: Colors.GRAY,
                }}
              >
                Destination
              </Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 25,
                  marginTop: 2,
                }}
              >
                {tripData?.location.name}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              alignItems: "center",
              // justifyContent:'space-between'
            }}
          >
            <Ionicons name="calendar-sharp" size={35} color="black" />
            <View>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 15,
                  color: Colors.GRAY,
                }}
              >
                Travel Date
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontFamily: "outfit",
                  fontSize: 25,
                }}
              >
                {moment(tripData?.startDate).format('DD MMM') + " To " + moment(tripData?.endDate).format('DD MMM') + " "}
                ({tripData?.totalDays} days)
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              alignItems: "center",
              // justifyContent:'space-between'
            }}
          >
           <Ionicons name="people-sharp" size={35} color="black" />
            <View>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 15,
                  color: Colors.GRAY,
                }}
              >
                Who is Travelling
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontFamily: "outfit",
                  fontSize: 25,
                }}
              >
                {tripData?.traveller.title}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 30,
              alignItems: "center",
              // justifyContent:'space-between'
            }}
          >
            <Ionicons name="cash-sharp" size={35} color="black" />
            <View>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 15,
                  color: Colors.GRAY,
                }}
              >
                Travelling Budget
              </Text>
              <Text
                style={{
                  marginTop: 2,
                  fontFamily: "outfit",
                  fontSize: 25,
                }}
              >
                {tripData?.budget.title}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 10,
            color: Colors.GRAY,
            marginTop: 40,
            marginHorizontal: 20,
          }}
          onPress={() => {
            //   if(!selectedBudget){
            //     ToastAndroid.show('Select your Budget',ToastAndroid.LONG)
            //     return;
            //   }
            ToastAndroid.show("Building your Trip", ToastAndroid.SHORT);
            router.push('/create-trip/generate-trip')
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "outfit",
              fontSize: 25,
            }}
          >
            Plan My Trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
