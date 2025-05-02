import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView, TapGestureHandler, LongPressGestureHandler, PanGestureHandler, FlingGestureHandler, PinchGestureHandler, Directions, State } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [score, setScore] = useState(0);
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Зробити 10 кліків', done: false, progress: 0 },
    { id: '2', title: 'Зробити подвійний клік 5 разів', done: false, progress: 0 },
    { id: '3', title: `Утримувати об'єкт 3 секунди`, done: false, progress: 0 },
    { id: '4', title: `Перетягнути об'єкт`, done: false },
    { id: '5', title: 'Свайп вправо', done: false },
    { id: '6', title: 'Свайп вліво', done: false },
    { id: '8', title: 'Отримати 100 очок', done: false }
  ]);

  const updateTaskProgress = (id, inc = 1) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id && !t.done) {
        const newProgress = (t.progress || 0) + inc;
        const complete = (id === '1' && newProgress >= 10) ||
          (id === '2' && newProgress >= 5) ||
          (id === '3' && newProgress >= 1);
        return { ...t, progress: newProgress, done: complete };
      }
      return t;
    }));
  };

  const checkScoreTask = (newScore) => {
    if (newScore >= 100) {
      setTasks(prev => prev.map(t => t.id === '8' ? { ...t, done: true } : t));
    }
  };

  const handleTap = () => {
    const newScore = score + 1;
    setScore(newScore);
    updateTaskProgress('1');
    checkScoreTask(newScore);
  };

  const handleDoubleTap = () => {
    const newScore = score + 2;
    setScore(newScore);
    updateTaskProgress('2');
    checkScoreTask(newScore);
  };

  const handleLongPress = () => {
    const newScore = score + 5;
    setScore(newScore);
    updateTaskProgress('3');
    checkScoreTask(newScore);
  };

  const handlePan = () => {
    setTasks(prev => prev.map(t => t.id === '4' ? { ...t, done: true } : t));
  };

  const handleFling = (direction) => {
    const newScore = score + Math.floor(Math.random() * 10 + 1);
    setScore(newScore);
    checkScoreTask(newScore);
    if (direction === 'left') {
      setTasks(prev => prev.map(t => t.id === '6' ? { ...t, done: true } : t));
    } else {
      setTasks(prev => prev.map(t => t.id === '5' ? { ...t, done: true } : t));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Очки: {score}</Text>
      <Button title="Перейти до завдань" onPress={() => navigation.navigate('Tasks', { tasks })} />

      <TapGestureHandler onActivated={handleTap}>
        <View style={styles.button}><Text>Клік</Text></View>
      </TapGestureHandler>

      <TapGestureHandler numberOfTaps={2} onActivated={handleDoubleTap}>
        <View style={styles.button}><Text>Подвійний клік</Text></View>
      </TapGestureHandler>

      <LongPressGestureHandler minDurationMs={3000} onActivated={handleLongPress}>
        <View style={styles.button}><Text>Утримати 3 сек</Text></View>
      </LongPressGestureHandler>

      <PanGestureHandler onGestureEvent={handlePan} onEnded={handlePan}>
        <View style={styles.button}><Text>Перетягнути</Text></View>
      </PanGestureHandler>

      <FlingGestureHandler direction={Directions.RIGHT} onActivated={() => handleFling('right')}>
        <View style={styles.button}><Text>Свайп вправо</Text></View>
      </FlingGestureHandler>


      <FlingGestureHandler direction={Directions.LEFT} onActivated={() => handleFling('left')}>
        <View style={styles.button}><Text>Свайп вліво</Text></View>
      </FlingGestureHandler>
    </View>
  );
}

function TasksScreen({ route }) {
  const { tasks } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Завдання</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={item.done ? styles.taskDone : styles.task}>{item.title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' },
  score: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: '#ccc', padding: 15, marginVertical: 5, borderRadius: 8 },
  header: { fontSize: 20, marginBottom: 10 },
  task: { fontSize: 16, color: 'black' },
  taskDone: { fontSize: 16, color: 'green', textDecorationLine: 'line-through' },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Гра-клікер' }} />
          <Stack.Screen name="Tasks" component={TasksScreen} options={{ title: 'Завдання' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
