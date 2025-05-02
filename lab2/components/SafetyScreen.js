import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, } from "react-native";
import { ThemeToggleContext } from "./ThemeContext";

const darkTheme = {
  background: "#171a21",
  text: "#c7d5e0",
  subtext: "#8f98a0",
  card: "#1b2838",
  accent: "#66c0f4",
  border: "#2a475e",
};

const lightTheme = {
  background: "#f2f2f2",
  text: "#000",
  subtext: "#666",
  card: "#ffffff",
  accent: "#66c0f4",
  border: "#ddd",
};

const Container = ({ children, theme }) => (
  <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
    {children}
  </ScrollView>
);

const TitleBlock = ({ children, theme }) => (
  <View style={styles.titleBlockContainer}>
    <Image
      source={require("../assets/logos/steam-logo.png")}
      style={styles.steamLogo}
    />
    <Text style={[styles.title, { color: theme.text }]}>{children}</Text>
  </View>
);

const SubText = ({ children, theme }) => <Text style={[styles.subText, { color: theme.subtext }]}>{children}</Text>;

const SafetyCode = ({ code, theme }) => (
  <View style={[styles.codeBox, { backgroundColor: theme.card }]}>
    <Text style={[styles.codeText, { color: theme.accent }]}>{code}</Text>
  </View>
);

const GuardSwitch = ({ selected, onSelect, theme }) => {
  const options = ["Mobile Auth", "Email Code", "Backup Codes"];
  return (
    <View style={styles.switchContainer}>
      {options.map((label, idx) => {
        const active = selected === idx;
        return (
          <TouchableOpacity
            key={label}
            style={[
              styles.switchButton,
              { backgroundColor: active ? theme.accent : theme.border },
            ]}
            onPress={() => onSelect(idx)}
          >
            <Text
              style={{
                color: active ? "#000" : theme.text,
                fontWeight: active ? "bold" : "normal",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MenuItem = ({ label, theme }) => (
  <TouchableOpacity style={[styles.menuItem, { borderBottomColor: theme.border }]}>
    <Text style={[styles.menuText, { color: theme.accent }]}>{label}</Text>
  </TouchableOpacity>
);

const SafetyScreen = () => {
  const { isDark } = useContext(ThemeToggleContext);
  const theme = isDark ? darkTheme : lightTheme;
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container theme={theme}>
      <TitleBlock theme={theme}>Steam Guard</TitleBlock>
      <GuardSwitch selected={selectedTab} onSelect={setSelectedTab} theme={theme} />
      <SubText theme={theme}>Logged in as player</SubText>
      <SafetyCode code="N5KCV" theme={theme} />
      <SubText theme={theme}>
        You’ll enter your code each time you sign in with your password.
      </SubText>
      <Text style={[styles.tipText, { color: theme.subtext }]}>
        If you don’t share your PC, you can check "Remember my password" to
        reduce the number of times you need to enter this code.
      </Text>
      <MenuItem label="Remove Authenticator" theme={theme} />
      <MenuItem label="My Recovery Code" theme={theme} />
      <MenuItem label="Help" theme={theme} />
    </Container>
  );
};

export default SafetyScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  titleBlockContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  steamLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  subText: {
    fontSize: 14,
    marginBottom: 10,
  },
  codeBox: {
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
    marginVertical: 16,
  },
  codeText: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 4,
  },
  tipText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
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
  menuItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
