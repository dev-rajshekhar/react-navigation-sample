import React from 'react';
import {
  Button,
  Text,
  FlatList,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function NewsFeedScreen({navigation, route}) {
  const {name, msg} = route.params;
  const DATA = [
    {
      id: '1',
      title: 'Article 1',
      subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '2',
      title: 'Article 2',
      subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '3',
      title: 'Article 3',
      subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
      id: '4',
      title: 'Article 4',
      subTitle: 'Lorem ipsum dolor sit amet',
    },
  ];

  React.useEffect(() => {
    if (route.params?.status) {
    }
  }, [route.params?.status]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            title: item.title,
            subTitle: item.subTitle,
          });
        }}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
  },
});
