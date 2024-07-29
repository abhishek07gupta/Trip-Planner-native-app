import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        marginTop: 20,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-sharp" size={26} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          // paddingTop:25,
          marginTop:10,
          textAlign: "center",
        }}
      >
        Lets get you Signed-In
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 25,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back !
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 25,
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        Enter your details to start planning your next big trip.
      </Text>

      <View style={{ marginTop: 15 }}>
        <Text style={styles.header}>Email</Text>
        <TextInput
          style={styles.textInput}
          placeholder="tripplanner@destiny.fly"
        ></TextInput>

        <Text style={styles.header}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="tripplannergo"
        ></TextInput>
      </View>

      <View
        style={{
          marginTop: "10%",
        }}
      >
        {/* sign in button  */}
        <TouchableOpacity onPress={()=>{
          router.push()
        }}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 50,
            marginVertical: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit",
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity >

        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit",
            color: Colors.GRAY,
            textAlign: "center",
          }}
        >
          {" "}
          Dont have a Account Yet ?
        </Text>
        {/* sign up button */}
        <TouchableOpacity onPress={()=>{
          router.replace('auth/sign-up')
        }}
          style={{
            backgroundColor: Colors.WHITE,
            padding: 15,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 50,
            marginVertical: "5%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit",
              color: Colors.PRIMARY,
              textAlign: "center",
            }}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 20,
    fontFamily: "outfit",
  },
  header: {
    fontFamily: "outfit",
    fontSize: 20,
    marginTop: 10,
  },
});
