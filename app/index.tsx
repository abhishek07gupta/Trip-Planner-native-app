import { Platform, Text, View } from "react-native";
import Login from './../components/Login'
export default function Index() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
     {/* {Platform.OS==='web'?"This application is developed for mobiles only!" : <Login/>}  */}
     <Login/>
    </View>
  );
}
