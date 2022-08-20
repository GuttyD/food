import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Yelp from '../api/Yelp';

export default function DetailsScreen({ route, navigation }) {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id)
  }, []);

  if (!result) {
    return null;
  }

 return (
   <View>
    <Text> { result.name } </Text>
    <FlatList
    data={result.photos}
    keyExtractor={( photo) => photo}
    renderItem={({ item }) => {
      return <Image style={styles.image} source={{ uri: item }}/>
    }}
    />
   </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});