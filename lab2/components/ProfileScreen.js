import React, { useContext } from "react";
import { View, Text, Image, Switch, ScrollView, StyleSheet, } from "react-native";
import { ThemeToggleContext } from "./ThemeContext";

const darkTheme = {
  background: "#171a21",
  text: "#c7d5e0",
  subtext: "#8f98a0",
  border: "#2a475e",
};

const lightTheme = {
  background: "#f2f2f2",
  text: "#000",
  subtext: "#666",
  border: "#ddd",
};

const Container = ({ children, theme }) => (
  <ScrollView
    contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}
  >
    {children}
  </ScrollView>
);

const ProfileAvatar = ({ children }) => (
  <View style={styles.avatar}>{children}</View>
);

const Title = ({ title, theme }) => (
  <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
);

const SubText = ({ children, style, theme }) => (
  <Text style={[styles.subText, { color: theme.subtext }, style]}>{children}</Text>
);

const MenuItem = ({ children, theme }) => (
  <View style={[styles.menuItem, { borderBottomColor: theme.border }]}>
    {children}
  </View>
);

const GameText = ({ children, theme }) => (
  <Text style={[styles.menuText, { color: theme.text }]}>{children}</Text>
);

const ThemeSwitcherContainer = ({ children }) => (
  <View style={styles.switcher}>{children}</View>
);

const ProfileScreen = () => {
  const { toggleTheme, isDark } = useContext(ThemeToggleContext);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <Container theme={theme}>
      <ProfileAvatar>
        <Image
          source={require("../assets/users/profile1.png")}
          style={{ width: "100%", height: "100%", borderRadius: 100 }}
        />
      </ProfileAvatar>

      <Title title="Firstname Lastname" theme={theme} />
      <SubText theme={theme}>Group</SubText>

      <MenuItem theme={theme}>
        <GameText theme={theme}>Settings</GameText>
      </MenuItem>
      <MenuItem theme={theme}>
        <GameText theme={theme}>Logout</GameText>
      </MenuItem>

      <ThemeSwitcherContainer>
        <Text style={{ color: theme.text }}>Switch Theme</Text>
        <Switch value={isDark} onValueChange={toggleTheme} />
      </ThemeSwitcherContainer>
    </Container>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 50,
    flexGrow: 1,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center",
  },
  subText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
  },
  switcher: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
});
