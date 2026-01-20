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
            <Ionicons name={ focused ? 'list' : 'list-outline' } color={color} size={24} />
          )
        }}
      />

      <Tabs.Screen
        name="newTodo"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={ focused ? 'add-circle' : 'add-circle-outline' } color={color} size={24} />
          )
        }}
      />

    </Tabs>
  )
}