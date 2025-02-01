import { Image, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';

import { icons } from '../../constants';
import { ITabIconProps } from '@/interfaces/tabIcon.interface';

const TabIcon = (props: ITabIconProps): JSX.Element => {
  const { icon, color, name, focused } = props;
  return (
    <View className="flex justify-center items-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5"
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs w-full text-gray-500`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = (): JSX.Element => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopColor: '#232533',
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name={'Home'}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Bookmark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name={'Bookmark'}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name={'Create'}
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name={'Profile'}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
