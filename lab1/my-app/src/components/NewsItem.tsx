import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  news: {
    title: string;
    date: string;
    text: string;
  };
}

const NewsItem: React.FC<Props> = ({ news }) => {
  return (
    <View style={styles.item}>
      <Image source={require('../../assets/news-placeholder.png')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.date}>{news.date}</Text>
        <Text style={styles.text}>{news.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: { flexDirection: 'row', marginBottom: 10 },
  image: { width: 50, height: 50, backgroundColor: '#ccc', marginRight: 10 },
  content: { flex: 1 },
  title: { fontWeight: 'bold' },
  date: { fontSize: 12, color: 'gray' },
  text: { fontSize: 14 },
});

export default NewsItem;
