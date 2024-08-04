import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth } from "../../configs/FirebaseConfig";
import UserTripList from "../../components/MyTrips/UserTripList";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [Loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const GetMyTrips = async () => {
    setUserTrips([]);
    setLoading(true);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserTrips((prev) => [...prev, doc]);
      // console.log(doc.id, " => ", doc.data());
    });
    setLoading(false);
  };

  useEffect(() => {
    user && GetMyTrips();
  }, [userTrips]);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            // textAlign:'center',
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
          My Trips{" "}
        </Text>
        <Ionicons name="add-circle" size={40} color="black" />
      </View>
      {Loading && <ActivityIndicator size={"large"} color={Colors.PRIMARY} />}
      {userTrips.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips}/>}
    </View>
  );
}