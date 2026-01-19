import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";

export default function TabLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#25292e",
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