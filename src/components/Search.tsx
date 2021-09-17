import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import { searchFlickr } from '../api/flickr';
import { API_KEY } from '@env';
import { PhotoDefinition } from '../types/PhotoClass';

type Props = {
  setPhotos: (photos: Array<PhotoDefinition>) => void;
  setSearchText: (searchText: string) => void;
  setLoading: (loading: boolean) => void;
  setPage: (page: number) => void;
};

function Search( {setPhotos, setSearchText, setLoading, setPage} : Props) : JSX.Element {
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
    <View style={styles.container} >
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
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },
  container: {
    padding: 12,
  }
});

export default Search;