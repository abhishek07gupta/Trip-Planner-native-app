import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from "../../../configs/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const [fullName, setFullName] = useState()


  const onCreateAccount=()=>{
    if(!email || !password|| !fullName){
      ToastAndroid.show('Please enter all details',ToastAndroid.LONG)
      return ;
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    if(user){
      ToastAndroid.show('Sign Up Success',ToastAndroid.LONG)
    }
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode === "auth/email-already-in-use"){
      ToastAndroid.show('Email already exists , signin or create new account',ToastAndroid.LONG)  
    }
    console.log(errorMessage,errorCode)
    // ..
  });
  }

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
        Lets Create your Account
      </Text>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 25,
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome !
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 25,
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        Enter your details to create your account and start planning your next
        big trip.
      </Text>

      <View style={{ marginTop: 15 }}>
        <Text style={styles.header}>Email</Text>
        <TextInput
          onChangeText={(e)=>setEmail(e)}
          style={styles.textInput}
          placeholder="tripplanner@destiny.fly"
        ></TextInput>

        <Text style={styles.header}>User Full Name</Text>
        <TextInput
          onChangeText={(e)=>setFullName(e)}
          style={styles.textInput}
          placeholder="Trip Planner"
        ></TextInput>

        <Text style={styles.header}>Password</Text>
        <TextInput
          onChangeText={(e)=>setPassword(e)}
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="tripplannergo"
        ></TextInput>
      </View>

      <View
        style={{
          marginTop: "3%",
        }}
      >
        {/* sign in button  */}
        <TouchableOpacity
          onPress={() => {
            onCreateAccount();
            // router.push();
          }}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 50,
            marginVertical: "3%",
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
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit",
            color: Colors.GRAY,
            textAlign: "center",
          }}
        >
          {" "}
          Already have an Account ?
        </Text>
        {/* sign up button */}
        <TouchableOpacity
          onPress={() => {
            router.replace("auth/sign-in");
          }}
          style={{
            backgroundColor: Colors.WHITE,
            padding: 15,
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
            borderRadius: 50,
            marginVertical: "3%",
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
            Sign In
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
