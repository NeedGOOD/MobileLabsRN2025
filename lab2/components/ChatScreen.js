import React, { useState, useContext } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, } from "react-native";
import { ThemeToggleContext } from "./ThemeContext";

const darkTheme = {
  background: "#171a21",
  text: "#c7d5e0",
  subtext: "#8f98a0",
  card: "#1b2838",
  border: "#2a475e",
  accent: "#66c0f4",
};

const lightTheme = {
  background: "#fff",
  text: "#000",
  subtext: "#666",
  card: "#f2f2f2",
  border: "#ddd",
  accent: "#0A84FF",
};

const Container = ({ children, isDark }) => (
  <View
    style={{
      flex: 1,
      padding: 16,
      backgroundColor: isDark ? darkTheme.background : lightTheme.background,
    }}
  >
    {children}
  </View>
);

const TitleBlock = ({ title, isDark }) => (
  <View style={styles.titleBlockContainer}>
    <Image
      source={require("../assets/logos/steam-logo.png")}
      style={styles.steamLogo}
    />
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: isDark ? darkTheme.text : lightTheme.text,
        marginLeft: 10,
      }}
    >
      {title}
    </Text>
  </View>
);

const SteamSwitch = ({ selected, onSelect, isDark }) => {
  const tabs = ["All", "Friends", "Groups"];
  return (
    <View style={styles.switchContainer}>
      {tabs.map((label, idx) => (
        <TouchableOpacity
          key={label}
          style={[
            styles.switchButton,
            {
              backgroundColor:
                selected === idx
                  ? darkTheme.accent
                  : isDark
                    ? darkTheme.border
                    : lightTheme.border,
            },
          ]}
          onPress={() => onSelect(idx)}
        >
          <Text
            style={[
              styles.switchText,
              {
                color:
                  selected === idx
                    ? "#000"
                    : isDark
                      ? darkTheme.text
                      : lightTheme.text,
                fontWeight: selected === idx ? "bold" : "normal",
              },
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ChatItem = ({ children, isDark }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: isDark ? darkTheme.border : lightTheme.border,
    }}
  >
    {children}
  </View>
);

const AvatarImage = ({ source }) => (
  <Image source={source} style={styles.avatar} />
);

const ChatInfo = ({ children }) => (
  <View style={{ marginLeft: 10 }}>{children}</View>
);

const ChatText = ({ children, color }) => (
  <Text style={{ fontWeight: "bold", fontSize: 16, color }}>{children}</Text>
);

const SubText = ({ children, color }) => (
  <Text style={{ color, marginTop: 2 }}>{children}</Text>
);

const ChatScreen = () => {
  const chats = [
    {
      name: "Mark Dyson",
      preview: "I'm already starting to play",
      avatar: require("../assets/users/profile1.png"),
    },
    {
      name: "Player123",
      preview: "Ok",
      avatar: require("../assets/users/profile2.png"),
    },
    {
      name: "Player",
      preview: "Hello!",
      avatar: require("../assets/users/profile3.png"),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(0);
  const { isDark } = useContext(ThemeToggleContext);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <Container isDark={isDark}>
      <TitleBlock title="Chat" isDark={isDark} />
      <SteamSwitch selected={selectedTab} onSelect={setSelectedTab} isDark={isDark} />

      <FlatList
        data={chats}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ChatItem isDark={isDark}>
            <AvatarImage source={item.avatar} />
            <ChatInfo>
              <ChatText color={theme.text}>{item.name}</ChatText>
              <SubText color={theme.subtext}>{item.preview}</SubText>
            </ChatInfo>
          </ChatItem>
        )}
      />
    </Container>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  switchContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  switchButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
  },
  switchText: {
    fontSize: 14,
  },
  titleBlockContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  steamLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
