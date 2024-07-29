import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View 
    >
        <Image source={require('./../assets/images/login.png')}
        style={{
            width:'100%',
            height:400
        }}
        />

        <View
        style={styles.container}
        >
            <Text style={{
                fontSize:28,
                fontFamily:'outfit-bold',
                textAlign:'center',
                marginVertical:15
            }}
            >
                Your Persnal Planner
            </Text>
            <Text
            style={{
                color:Colors.GRAY,
                textAlign:'justify',
                fontSize:20,
                fontFamily:'outfit',
                padding:5
            }}>
                consectetur adipisicing elit. Ex quae aliquid nostrum? Sed dolore architecto magni voluptatum laborum beatae tenetur nihil autem!
            </Text>
            <View style={styles.button}>
                <Text
                style={{
                    fontSize:20,
                    fontFamily:'outfit',
                    color:Colors.WHITE,
                    textAlign:'center'
                }}
                >Sign in with Google</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        height:"100%",
        padding:30
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:15,
        borderRadius:50,
        marginTop:'25%',
        // width:'75%',
        // margin:'auto'
    }
})