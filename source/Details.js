import React from 'react';
import {Button, View, Text, Image, StyleSheet, StatusBar} from 'react-native';

export default function Details({route, navigation}) {
  const {title, subTitle} = route.params;
  const path = require('../assets/happy_new_year.jpg');
  return (
    <View style={styles.container}>
      <Image source={path} style={{height: 200}} />
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <Button
          title="Go to News"
          onPress={() => {
            navigation.navigate({
              name: 'NewsFeed',
              params: {status: 'I have read this post'},
              merge: true,
            });
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    elevation: 5,
    shadowRadius: 3,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});
