import { Tabs } from "expo-router";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="outreach"
        options={{
          title: "Outreach",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="email-arrow-right-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="business"
        options={{
          title: "Business",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="business" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Fontisto name="player-settings" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
