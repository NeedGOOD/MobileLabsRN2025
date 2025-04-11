import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';

const GalleryScreen = () => {
  const items = Array(12).fill(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        renderItem={() => (
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/news-placeholder.png')} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 5 },
  imageContainer: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    backgroundColor: '#eee',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GalleryScreen;
