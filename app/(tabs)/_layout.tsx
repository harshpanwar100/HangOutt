import { Tabs } from 'expo-router';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { Image } from 'react-native';
import HomeIcon from '../../assets/home.png';
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image source={HomeIcon} style={{ width: size, height: size }} resizeMode='contain' />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'compass' : 'compass-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="social"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'people' : 'people-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
