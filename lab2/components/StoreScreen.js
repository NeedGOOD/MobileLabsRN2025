import React, { useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ThemeToggleContext } from "./ThemeContext";

const Container = ({ children, isDark }) => (
  <View style={[styles.container, { backgroundColor: isDark ? "#171a21" : "#fff" }]}>
    {children}
  </View>
);

const TitleBlock = ({ title, isDark }) => (
  <View style={styles.titleBlockContainer}>
    <Image
      source={require("../assets/logos/steam-logo.png")}
      style={styles.steamLogo}
    />
    <Text style={[styles.title, { color: isDark ? "#fff" : "#000" }]}>{title}</Text>
  </View>
);

const StoreHeaderImage = ({ children }) => (
  <View style={styles.storeHeaderImage}>{children}</View>
);

const ProductContentPost = ({ children }) => (
  <View style={styles.productContentPost}>{children}</View>
);

const GameTitle = ({ children, isDark }) => (
  <Text style={[styles.gameTitle, { color: isDark ? "#fff" : "#000" }]}>{children}</Text>
);

const DiscountPrice = ({ children }) => (
  <View style={styles.discountPrice}>{children}</View>
);

const Discount = ({ children }) => (
  <Text style={styles.discount}>{children}</Text>
);

const Price = ({ children }) => (
  <Text style={styles.price}>{children}</Text>
);

const Recommendation = ({ children, isDark }) => (
  <Text style={[styles.recommendation, { color: isDark ? "#fff" : "#000" }]}>
    {children}
  </Text>
);

const Platform = ({ children }) => (
  <View style={styles.platform}>{children}</View>
);

const FilterBar = ({ children }) => (
  <View style={styles.filterBar}>{children}</View>
);

const FilterButton = ({ active, children, isDark }) => (
  <TouchableOpacity
    style={[
      styles.filterButton,
      active && styles.activeFilterButton,
      { backgroundColor: isDark ? "#12151b" : "#ddd" },
    ]}
  >
    {children}
  </TouchableOpacity>
);

const FilterText = ({ active, children, isDark }) => (
  <Text style={[styles.filterText, active && styles.activeFilterText, { color: isDark ? "#fff" : "#000" }]}>
    {children}
  </Text>
);

const GameListItem = ({ children, isDark }) => (
  <View style={[styles.gameListItem, { backgroundColor: isDark ? "#13151a" : "#f5f5f5" }]}>
    {children}
  </View>
);

const ProductImage = ({ children }) => (
  <View style={styles.productImage}>{children}</View>
);

const GameDetails = ({ children }) => (
  <View style={styles.gameDetails}>{children}</View>
);

const GameText = ({ children, isDark }) => (
  <Text style={[styles.gameText, { color: isDark ? "#fff" : "#000" }]}>{children}</Text>
);

const PlatformText = ({ children, isDark }) => (
  <Text style={[styles.platformText, { color: isDark ? "#81838A" : "#333" }]}>{children}</Text>
);

const GamePrice = ({ children, isDark }) => (
  <Text style={[styles.gamePrice, { color: isDark ? "#0A84FF" : "#0077b6" }]}>
    {children}
  </Text>
);

const StoreScreen = () => {
  const { isDark } = useContext(ThemeToggleContext);

  const games = [
    {
      title: "Grand Theft Auto V",
      price: "$10",
      oldPrice: "$20",
      platform: "PC",
      image: require("../assets/picture/picture2.png"),
    },
    {
      title: "Battlefield 4™",
      price: "$35",
      platform: "PC",
      image: require("../assets/picture/picture3.png"),
    },
    {
      title: "Factorio",
      price: "$7",
      platform: "PC",
      image: require("../assets/picture/picture5.png"),
    },
    {
      title: "Horizon Zero Dawn",
      price: "$38",
      platform: "PC",
      image: require("../assets/picture/picture4.png"),
    },
  ];

  const posts = [
    {
      title: "Grand Theft Auto V",
      image: require("../assets/picture/picture2.png"),
      discount: "-40%",
      price: "$29.99",
      platform: "PC",
    },
    {
      title: "Battlefield 4™",
      image: require("../assets/picture/picture3.png"),
      discount: "-30%",
      price: "$35.00",
      platform: "PC",
    },
    {
      title: "Factorio",
      image: require("../assets/picture/picture5.png"),
      discount: "-25%",
      price: "$7.00",
      platform: "PC",
    },
    {
      title: "Horizon Zero Dawn",
      image: require("../assets/picture/picture4.png"),
      discount: "-10%",
      price: "$38.00",
      platform: "PC",
    },
  ];

  return (
    <Container isDark={isDark}>
      <TitleBlock title={"Store"} isDark={isDark} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
          data={posts}
          horizontal
          renderItem={({ item }) => (
            <StoreHeaderImage>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
              <ProductContentPost>
                <GameTitle isDark={isDark}>{item.title}</GameTitle>
                <DiscountPrice>
                  <Discount>{item.discount}</Discount>
                  <Price>{item.price}</Price>
                </DiscountPrice>
                <Recommendation isDark={isDark}>Recommended by your friend</Recommendation>
              </ProductContentPost>

              <Platform>
                <FontAwesome5 name="windows" size={20} color="#fff" />
              </Platform>
            </StoreHeaderImage>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FilterBar>
          {["Top seller", "Free to play", "Early access", "Most played"].map(
            (item, idx) => (
              <FilterButton key={item} active={idx === 0} isDark={isDark}>
                <FilterText active={idx === 0} isDark={isDark}>{item}</FilterText>
              </FilterButton>
            )
          )}
        </FilterBar>
      </ScrollView>
      <ScrollView contentContainerStyle={{ paddingBottom: 50, minHeight: '100%' }}>
        {games.map((item, idx) => (
          <GameListItem key={idx} isDark={isDark}>
            <ProductImage>
              <Image
                source={item.image}
                style={styles.productImage}
                resizeMode="cover"
              />
            </ProductImage>
            <GameDetails>
              <GameText isDark={isDark}>{item.title}</GameText>
              <PlatformText isDark={isDark}>{item.platform}</PlatformText>
            </GameDetails>
            <GamePrice isDark={isDark}>{item.price}</GamePrice>
          </GameListItem>
        ))}
      </ScrollView>
    </Container>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    marginLeft: 16,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  storeHeaderImage: {
    position: "relative",
    marginRight: 16,
    width: 250,
    height: 350,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  productContentPost: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 12,
    borderRadius: 8,
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  discountPrice: {
    flexDirection: "row",
    marginVertical: 6,
  },
  discount: {
    fontSize: 14,
    color: "#F5A623",
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  recommendation: {
    fontSize: 12,
  },
  platform: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  filterBar: {
    height: 30,
    gap: 5,
    flexDirection: "row",
    marginVertical: 15,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  activeFilterButton: {
    backgroundColor: "#0A84FF",
  },
  filterText: {
    color: "#fff",
  },
  activeFilterText: {
    fontWeight: "bold",
  },
  gameListItem: {
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 10,
    overflow: "hidden",
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  gameDetails: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 12,
  },
  gameText: {
    fontSize: 16,
  },
  platformText: {
    fontSize: 14,
  },
  gamePrice: {
    paddingRight: 12,
    paddingTop: 12,
    fontSize: 16,
    fontWeight: "bold",
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
