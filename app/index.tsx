import { Platform, Text, View } from "react-native";
import Login from './../components/Login'
import {auth} from './../configs/FirebaseConfig'
import { Redirect } from "expo-router";
export default function Index() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1
      }}
    >
     {/* {Platform.OS==='web'?"This application is developed for mobiles only!" : <Login/>}  */}
      {user?<Redirect href={'/mytrip'}/>:<Login/>}
     {/* <Login/> */}
    </View>
  );
}
