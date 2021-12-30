import React from 'react';
import {Button, View, Text} from 'react-native';
import {StackActions} from '@react-navigation/native';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Hi :)</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.dispatch(
            StackActions.replace('NewsFeed', {
              name: 'Hi',
              msg: 'Welcome to the app',
            }),
          );
        }}
      />
    </View>
  );
}
