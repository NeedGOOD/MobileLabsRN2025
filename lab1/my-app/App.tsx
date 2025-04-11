import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './src/screens/HomeScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require('./assets/image-placeholder.jpg')}
          style={styles.logo}
        />
        <Text style={styles.appTitle}>FirstMobileApp</Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarShowIcon: true,
            tabBarIndicatorStyle: { backgroundColor: '#007bff' },
            tabBarStyle: {
              backgroundColor: '#ccc',
              elevation: 4,
            },
            tabBarLabel: ({ focused }) => {
              let label = '';
              let icon = '';

              switch (route.name) {
                case 'Головна':
                  label = 'Головна';
                  icon = 'home';
                  break;
                case 'Фотогалерея':
                  label = 'Фотогалерея';
                  icon = 'images';
                  break;
                case 'Профіль':
                  label = 'Профіль';
                  icon = 'person';
                  break;
              }

              return (
                <View style={styles.tabItem}>
                  <Ionicons
                    name={icon as any}
                    size={20}
                    color={focused ? '#007bff' : 'gray'}
                  />
                  <Text style={{ color: focused ? '#007bff' : 'gray', fontSize: 12 }}>
                    {label}
                  </Text>
                </View>
              );
            },
          })}
        >
          <Tab.Screen name="Головна" component={HomeScreen} />
          <Tab.Screen name="Фотогалерея" component={GalleryScreen} />
          <Tab.Screen name="Профіль" component={ProfileScreen} />
        </Tab.Navigator>
        <Text style={styles.footer}>Прізвище ім’я та по-батькові, група</Text>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 19,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  logo: {
    width: '40%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitle: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    paddingBottom: 10,
  },
});

export default App;
