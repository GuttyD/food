import { useEffect, useState } from 'react'
import yelp from '../api/Yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    try {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term: searchTerm,
        location: 'san jose'
      }
    });
    setResults(response.data.businesses);
  } catch (e) {
    console.log(e);
    setErrorMessage('Something went wrong')
  }
  };

//call search api when component is first rendered

useEffect(() => {
  searchApi('Cake');
}, [])

return[searchApi, results, errorMessage];

};