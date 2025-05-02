import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider } from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import CommunityScreen from "./components/CommunityScreen";
import { ThemeToggleContext } from "./components/ThemeContext";
import ChatScreen from "./components/ChatScreen";
import SafetyScreen from "./components/SafetyScreen";
import StoreScreen from "./components/StoreScreen";
import ProfileScreen from "./components/ProfileScreen";

const darkTheme = {
  background: "#1C202C",
  steamLogo: "#fff",
  card: "#202532",
  text: "#F5F5F5",
  subText: "#81838A",
  highlight: "#0A84FF",
  border: "#313743",
  accent: "#0A84FF",
  green: "#00C853",
  red: "#FF3B30",
};
const lightTheme = {
  background: "#FFFFFF",
  steamLogo: "#000",
  card: "#F0F0F0",
  text: "#000000",
  subText: "#444444",
  highlight: "#0A84FF",
  border: "#CCCCCC",
  accent: "#0A84FF",
  green: "#00C853",
  red: "#FF3B30",
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme, isDark }}>
      <ThemeProvider theme={currentTheme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                const icons = {
                  Community: "steam",
                  Chat: "comments",
                  Safety: "shield-alt",
                  Store: "store",
                  Profile: "user",
                };
                return (
                  <FontAwesome5
                    name={icons[route.name] || "circle"}
                    size={size}
                    color={color}
                  />
                );
              },
              tabBarStyle: {
                backgroundColor: currentTheme.card,
                borderTopColor: currentTheme.border,
              },
              tabBarActiveTintColor: currentTheme.highlight,
              tabBarInactiveTintColor: currentTheme.subText,
              headerShown: false,
            })}
          >
            <Tab.Screen name="Community" component={CommunityScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Safety" component={SafetyScreen} />
            <Tab.Screen name="Store" component={StoreScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
