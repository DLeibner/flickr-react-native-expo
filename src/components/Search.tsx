import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { searchFlickr } from '../api/flickr';
import { API_KEY } from '@env';
import { SearchProps } from '../types/PropTypes';
import { SearchStyle } from '../styles/CustomStyles';

function Search( {setPhotos, setSearchText, setLoading, setPage} : SearchProps) : JSX.Element {
  const [text, onChangeText] = React.useState<string>("");

  const searchAndSetPhotos = () => {
    setLoading(true);
    setPage(1);
    setSearchText(text);
    setPhotos([]);
    const dataPromise = searchFlickr(API_KEY, text, "1");
    dataPromise.then((data: unknown) => {
      if (Array.isArray(data)) {
        setPhotos(data);
      } else {
        setPhotos([]);
      }

      setLoading(false);
    });
  }

  return (
    <View style={SearchStyle.container} >
      <TextInput
        style={SearchStyle.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={searchAndSetPhotos}  title="Search"  color="#841584"  accessibilityLabel="Learn more about this purple button"/>
    </View>
  );
}

export default Search;