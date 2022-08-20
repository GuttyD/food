import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function HomeScreen({ navigation }) {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(results => {
      return results.price === price;
    })
  };
  
 return (
   <>
    <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
    { errorMessage ? <Text> {errorMessage} </Text> : null}
      <Text> We have found {results.length} results </Text>
      <ScrollView>
        <ResultsList 
        results={filterResultsByPrice('$')} 
        title='Cost Effective'
        navigation={navigation}
        />
        <ResultsList  
        results={filterResultsByPrice('$$')} 
        title='Bit Pricier'
        navigation={navigation}
        />
        <ResultsList  
        results={filterResultsByPrice('$$$')} 
        title='Big Spender'
        navigation={navigation}
        />
      </ScrollView>
   </>
  );
}