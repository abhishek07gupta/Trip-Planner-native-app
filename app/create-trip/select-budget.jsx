import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { CreateTripContext } from "../../context/CreateTripContext";
import { Colors } from "../../constants/Colors";
import { SelectBudgetOptions } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";

export default function SelectBudget() {
  const [selectedBudget, setSelectedBudget] = useState(null)
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

  useEffect(() => {
    setTripData({ ...tripData, budget:selectedBudget });
  }, [selectedBudget]);

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
      }}>Select Your Budget</Text>

      <View style={{
        marginTop:10
      }}>
        <Text 
        style={{
            fontFamily:'outfit-bold',
            fontSize: 20,
            // color:Colors.GRAY
        }}>Choose your Spending habits for this Trip</Text>

        <FlatList
        data={SelectBudgetOptions}
        keyExtractor={(item)=>item.id}
        renderItem={({item,index})=>(
            <TouchableOpacity style={{
                paddingTop: 10,
              }}
              onPress={() => {
                setSelectedBudget(item);
              }}
              >
                <OptionCard option={item} selectedOption={selectedBudget} />
            </TouchableOpacity>
        )}>

        </FlatList>
        <TouchableOpacity style={{
          padding:10,
          backgroundColor:Colors.PRIMARY,
          borderRadius:10,
          color:Colors.GRAY,
          marginTop:20,
          marginHorizontal:20,
          
        }}
        onPress={()=>{
          if(!selectedBudget){
            ToastAndroid.show('Select your Budget',ToastAndroid.LONG)
            return;
          }
          router.push('/create-trip/review-trip')
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
