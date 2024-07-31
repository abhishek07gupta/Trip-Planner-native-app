import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useContext, useState } from "react";
import { CreateTripContext } from "../context/CreateTripContext";
export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });
  const [tripData , SetTripData] = useState([])
  // const tripContext = useContext(CreateTripContext);
  return (
    <CreateTripContext.Provider value={{tripData,SetTripData}}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </CreateTripContext.Provider>
  );
}
