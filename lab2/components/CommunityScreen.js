import React, { useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemeToggleContext } from "./ThemeContext";


const Container = ({ children, isDark }) => (
  <View style={{ padding: 16, flex: 1, backgroundColor: isDark ? "#171a21" : "#f2f2f2" }}>
    {children}
  </View>
);

const TitleBlock = ({ title, isDark }) => (
  <View style={styles.titleBlockContainer}>
    <Image
      source={require("../assets/logos/steam-logo.png")}
      style={styles.steamLogo}
    />
    <Text style={{ fontSize: 24, fontWeight: "bold", color: isDark ? "#c7d5e0" : "#000", marginLeft: 10 }}>
      {title}
    </Text>
  </View>
);

const SubText = ({ children, isDark }) => (
  <Text style={{ color: isDark ? "#8f98a0" : "#666", marginBottom: 10 }}>
    {children}
  </Text>
);

const PostCard = ({ children, isDark }) => (
  <View style={{ backgroundColor: isDark ? "#1b2838" : "#fff", padding: 10, borderRadius: 12, marginBottom: 15 }}>
    {children}
  </View>
);

const PostHeader = ({ children }) => (
  <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
    {children}
  </View>
);

const PostImage = ({ children }) => (
  <View style={{ height: 200, borderRadius: 10, overflow: "hidden", marginBottom: 10 }}>
    {children}
  </View>
);

const PostContent = ({ children }) => <View>{children}</View>;

const PostActions = ({ children }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
    {children}
  </View>
);

const PostAction = ({ children }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    {children}
  </View>
);

const FilterBar = ({ children }) => (
  <View style={styles.filterBar}>{children}</View>
);

const FilterButton = ({ active, children }) => (
  <TouchableOpacity
    style={[styles.filterButton, active && styles.activeFilterButton]}
  >
    {children}
  </TouchableOpacity>
);

const FilterText = ({ active, children }) => (
  <Text style={[styles.filterText, active && styles.activeFilterText]}>
    {children}
  </Text>
);

const CommunityScreen = () => {
  const { isDark } = useContext(ThemeToggleContext);

  const posts = [
    {
      avatar: require("../assets/users/profile1.png"),
      username: "GamerOne",
      subtext: "Eurogamer • yesterday • 2:20pm",
      image: require("../assets/picture/picture1.png"),
      title:
        "Steam Unveils New Feature: 'Cloud Play' to Stream Your Games Across Devices",
    },
    {
      avatar: require("../assets/users/profile3.png"),
      username: "PixelMaster",
      subtext: "IGN • today • 11:00am",
      image: require("../assets/picture/picture1.png"),
      title: "Steam Launches 'Game Swap' – Trade Games with Friends and Earn Rewards",
    },
  ];

  return (
    <Container isDark={isDark}>
      <TitleBlock title="Community" isDark={isDark} />
      <SubText isDark={isDark}>
        Community and official content for all games and software
      </SubText>

      <FilterBar>
        {["All", "Screenshots", "Artwork", "Workshop"].map((item, idx) => (
          <FilterButton key={item} active={idx === 0}>
            <FilterText active={idx === 0}>{item}</FilterText>
          </FilterButton>
        ))}
      </FilterBar>

      <FlatList
        data={posts}
        keyExtractor={(_, index) => index.toString()}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PostCard isDark={isDark}>
            <PostHeader>
              <Image
                source={item.avatar}
                style={styles.avatar}
              />
              <View>
                <Text
                  style={{
                    color: isDark ? "#c7d5e0" : "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.username}
                </Text>
                <SubText isDark={isDark}>{item.subtext}</SubText>
              </View>
            </PostHeader>

            <PostImage>
              <Image
                source={item.image}
                style={styles.postImage}
                resizeMode="cover"
              />
            </PostImage>

            <PostContent>
              <Text
                style={{
                  color: isDark ? "#e6e6e6" : "#000",
                  fontWeight: "bold",
                  marginTop: 6,
                }}
              >
                {item.title}
              </Text>
            </PostContent>

            <PostActions>
              <PostAction>
                <FontAwesome5 name="thumbs-up" size={18} color="#66c0f4" />
                <Text style={styles.actionText}>23 Likes</Text>
              </PostAction>
              <PostAction>
                <FontAwesome5 name="comment-alt" size={18} color="#8f98a0" />
                <Text style={styles.actionText}>5 Comments</Text>
              </PostAction>
              <PostAction>
                <FontAwesome5 name="share" size={18} color="#8f98a0" />
              </PostAction>
            </PostActions>
          </PostCard>
        )}
      />
    </Container>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  actionText: {
    marginLeft: 5,
    color: "#8f98a0",
  },
  filterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 5,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "#2a475e",
  },
  activeFilterButton: {
    backgroundColor: "#66c0f4",
  },
  filterText: {
    color: "#c7d5e0",
  },
  activeFilterText: {
    color: "#171a21",
    fontWeight: "bold",
  },
  titleBlockContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  steamLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
