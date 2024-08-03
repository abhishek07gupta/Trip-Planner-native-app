import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDates() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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

  const onDateChange = (date, type) => {
    if (type == "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateChangeContinue = () => {
    if (startDate && endDate) {
      const totalDays = endDate.diff(startDate,'days');
      setTripData({
        ...tripData,
        startDate,
        endDate,
        totalDays: totalDays + 1,
        totalNights: totalDays,
      });
      router.push('/create-trip/select-budget');
    } else {
      ToastAndroid.show("Select valid Dates", ToastAndroid.LONG);
      return;
    }
  };

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
          textAlign:'center',
          marginTop: 5,
        }}
      >
        Travelling Dates
      </Text>

      <View
        style={{
          padding: 5,
          paddingTop: 10,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={10}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextColor={Colors.WHITE}
        />
      </View>

      <TouchableOpacity
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 10,
          marginTop: 40,
          marginHorizontal: 30,
        }}
        onPress={onDateChangeContinue}
        >
        <Text
        style={{
            color: Colors.WHITE,
            textAlign:'center',
            fontSize:20,
            fontFamily:'outfit-medium'
        }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
