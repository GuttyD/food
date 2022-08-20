import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import DetailsScreen from '../screens/DetailsScreen';

export default function ResultsDetail({ result, navigation }) {
 return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: result.image_url }}/>
        <Text style={styles.name}> {result.name} </Text>
        <Text style={styles.rating}> {result.rating} Stars, {result.review_count} Reviews </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: 200,
        height: 120,
        borderRadius: 5,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    },
})