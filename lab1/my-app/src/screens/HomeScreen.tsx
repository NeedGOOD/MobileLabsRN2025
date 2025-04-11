import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NewsItem from '../components/NewsItem';

const news = Array(8).fill({
  title: 'Заголовок новини',
  date: 'Дата новини',
  text: 'Короткий текст новини',
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Новини</Text>
      <FlatList
        data={news}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <NewsItem news={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  header: { fontSize: 22, textAlign: 'center', marginVertical: 10 },
});

export default HomeScreen;
