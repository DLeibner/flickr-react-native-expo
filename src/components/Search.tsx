import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import searchFlickr from '../api/flickr';
//import {API_KEY} from "@env"; // TODO fix
const API_KEY = 'fkafa';

function Search( {setPhotos} ) {
  const [text, onChangeText] = React.useState("");

  const searchAndSetPhotos = () => {
    let data = searchFlickr(API_KEY, text);
    if (Array.isArray(data)) {
      setPhotos(data);
    } else {
      setPhotos([]);
      alert(data);
    }
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button onPress={searchAndSetPhotos}  title="Search"  color="#841584"  accessibilityLabel="Learn more about this purple button"/>
    </View>
  );
}



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Search;