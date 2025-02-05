import {  View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useEffect, useState } from 'react';

const TokenGenerator = (): JSX.Element => {
  const [token, setToken] = useState('');

  useEffect(() => {
    requestUserPermission();

    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Message Received in foreground!', remoteMessage);
    });

    const unsubscribeOnTokenRefresh = messaging().onTokenRefresh(async newToken => {
      console.log('FCM Token refreshed:', newToken);
      await storeToken(newToken);
    });

    return () => {
      unsubscribeOnMessage();
      unsubscribeOnTokenRefresh();
    };
  }, []);

  useEffect(() => {
    const getTokenFunc = async () => {
      await requestUserPermission(); // Ensure permission is granted first

      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        await storeToken(fcmToken);
      } else {
        console.log("Failed", "No token received");
      }
    };

    getTokenFunc();
  }, []);

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  async function storeToken(fcmToken: string) {
    try {
      await AsyncStorage.setItem('fcmToken', fcmToken);
      setToken(fcmToken);
      sendTokenToServer(fcmToken);
    } catch (error) {
      console.log("Error storing FCM Token", error);
    }
  }

  async function sendTokenToServer(token: string) {
    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', { // Replace with your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      const data = await response.json();
      console.log('Token sent to server:', data);
    } catch (error) {
      console.error('Error sending token to server:', error);
    }
  }

  return (
    <View>
      <Text>FCM Token: {token}</Text>
    </View>
  );
}

export default TokenGenerator;