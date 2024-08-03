import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const SelectTravelersList=[
    {
        id:1,
        title:'Solo',
        desc:'Solo traveller in exploration',
        count:'1',
        icon:'✈️'
    },
    {
        id:2,
        title:'Couple',
        desc:'A amazing trip with your partner , your love and crime mate',
        count:'2',
        icon:'🧑‍🤝‍🧑'
    },
    {
        id:3,
        title:'Family',
        desc:'Complete package of wildness and fun',
        count:'3 to 5',
        icon:'🏠'
    },
    {
        id:4,
        title:'Friends',
        desc:'Some time to reconnect with your friends',
        count:'5 to 10',
        icon:'🎊'
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'cheap',
        desc:'Stay tight on costs',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on average saving Mode',
        icon:'💴'
    },
    {
        id:3,
        title:'Luxury',
        desc:'Spending like a Rockstar'
        ,icon:'💰'
    }
]

export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNights} Night for {traveller} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format.`

