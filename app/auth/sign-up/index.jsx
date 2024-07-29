import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SignUp() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  return (
    <View
      style={{
        padding: 25,
        marginTop: 30,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
          // paddingTop:25,
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

        <Text style={styles.header}>UserName</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Trip Planner"
        ></TextInput>

        <Text style={styles.header}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholder="tripplannergo"
        ></TextInput>
      </View>

    </View>
  )
}