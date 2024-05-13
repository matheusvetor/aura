import { StyleSheet, Text, View, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import  { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="gap-2 items-center justify-center"> 
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? 'fontp-semibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}>
          {name}</Text>
    </View>
  )

}

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            elevation: 0,
            height: 84,
          },
        }}>
        <Tabs.Screen 
          name="home"
          options={{ 
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                color={color}
                focused={focused}
                icon={icons.home}
                name="Home"
              />
            )
          }}
        />
        <Tabs.Screen 
          name="bookmark"
          options={{ 
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                color={color}
                focused={focused}
                icon={icons.bookmark}
                name="Bookmark"
              />
            )
          }}
        />
        <Tabs.Screen 
          name="create"
          options={{ 
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                color={color}
                focused={focused}
                icon={icons.plus}
                name="Create"
              />
            )
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{ 
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                color={color}
                focused={focused}
                icon={icons.profile}
                name="Profile"
              />
            )
          }}
        />
      r</Tabs>
    </>
  )
};

const styles = StyleSheet.create({});