import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { router, useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../constants/Colors";
import { SelectTravelersList } from "./../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "./../../context/CreateTripContext";

export default function SelectTraveller() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const [selectedTraveller, setSelectedTraveller] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  
  useEffect(() => {
    setTripData({ ...tripData, traveller: selectedTraveller });
  }, [selectedTraveller]);

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
          fontSize: 35,
          fontFamily: "outfit-bold",
          marginTop: 5,
        }}
      >
        Who's Travelling
      </Text>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
          Select your Travellers
        </Text>
        <FlatList
          data={SelectTravelersList}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                paddingTop: 10,
              }}
              onPress={() => {
                setSelectedTraveller(item);
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveller} />
            </TouchableOpacity>
          )}
        ></FlatList>

        <TouchableOpacity style={{
          padding:10,
          backgroundColor:Colors.PRIMARY,
          borderRadius:10,
          color:Colors.GRAY,
          marginTop:20,
          marginHorizontal:20,
          
        }}
        onPress={()=>{
          if(!selectedTraveller){
            ToastAndroid.show('Select the Traveller',ToastAndroid.LONG)
            return;
          }
          router.push('/create-trip/select-dates')
        }}>
            <Text style={{
              textAlign:'center',
              color:Colors.WHITE,
              fontFamily:'outfit',
              fontSize:25
            }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
