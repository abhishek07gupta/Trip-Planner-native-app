import { View, Text, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { CreateTripContext } from "../../context/CreateTripContext";
import { AI_PROMPT } from "../../constants/Options";
import { chatSession } from "../../configs/AiModel";
import { auth, db } from "./../../configs/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function GenerateTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const [Loading, setLoading] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    tripData && GenerateAiTrip();
  }, []);

  const GenerateAiTrip = async () => {
    setLoading(true);
    const final_prompt = AI_PROMPT.replaceAll(
      "{location}",
      tripData?.location?.name
    )
      .replaceAll("{totalNights}", tripData.totalNights)
      .replaceAll("{totalDays}", tripData.totalDays)
      .replaceAll("{traveller}", tripData?.traveller?.title)
      .replaceAll("{budget}", tripData?.budget?.title);
    console.log(final_prompt);
    const result = await chatSession.sendMessage(final_prompt);
    const tripResp = JSON.parse(result.response.text());

    const docId = Date.now().toString();
    try{
      const result_ = await setDoc(doc(db, "UserTrips", docId), {
        docId,
        userEmail: user.email,
        tripPlan:tripResp,
        tripData:JSON.stringify(tripData)
      });
      setLoading(false);
      handleSetLoading()
    } catch(error){
      console.error('error')
    }
    
  };

  const handleSetLoading = ()=>{
    // setLoading(false);
    console.log(Loading)
    
    router.push("./(tabs)/mytrip");
  }
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
          textAlign: "center",
          fontFamily: "outfit-bold",
          fontSize: 35,
        }}
      >
        {" "}
        Please Wait...
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "outfit-bold",
          fontSize: 25,
          marginTop: 40,
        }}
      >
        We are Working to build your dream Trip
      </Text>

      <Image
        style={{
          width: "100%",
          height: 350,
          objectFit: "contain",
          marginTop: 30,
        }}
        source={require("./../../assets/images/Loading.gif")}
      ></Image>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 25,
          color: Colors.GRAY,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Do not go back.
      </Text>
    </View>
  );
}
