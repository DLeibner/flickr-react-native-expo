import { API_KEY } from '@env';
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { searchFlickr } from '../api/flickr';
import Photo from './Photo';

function Gallery( {photos, setPhotos, navigation, page, setPage, searchText} ) {
  const renderItem = function (item) {
    return (<Photo item={item.item} navigation={navigation} />);
  }

  const searchAndAppendPhotos = () => {
    setPage(page + 1);
    let dataPromise = searchFlickr(API_KEY, searchText, page.toString());
    dataPromise.then((data: any) => {
      if (Array.isArray(data)) {
        setPhotos([...photos, ...data]);
      } else {
        setPhotos([]);
      }
    });
  }

  return (
    <View style={{padding:7, flex: 1}}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        onEndReached={(dist) => {if (navigation.isFocused()) return searchAndAppendPhotos();}}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default Gallery;