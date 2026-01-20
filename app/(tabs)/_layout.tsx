import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#009FB7",
        headerShown: true,
        headerStyle:{
          backgroundColor: "#020122",
        },
        tabBarStyle: {
          backgroundColor: "#12130F",
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={ focused ? 'home-sharp' : 'home-outline' } color={color} size={24} />
          )
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={ focused ? 'information-circle' : 'information-circle-outline' } color={color} size={24} />
          )
        }}
      />

    </Tabs>
  )
}