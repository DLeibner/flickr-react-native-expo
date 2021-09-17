import { API_KEY } from '@env';
import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { searchFlickr } from '../api/flickr';
import { PhotoDefinition } from '../types/PhotoClass';
import { GalleryProps } from '../types/PropTypes';
import Photo from './Photo';

function Gallery( {photos, setPhotos, navigation, page, setPage, searchText} : GalleryProps) : JSX.Element {
  const renderItem = function ({item} : ListRenderItemInfo<PhotoDefinition>) : JSX.Element {
    return (<Photo item={item} navigation={navigation} />);
  }

  const searchAndAppendPhotos = () => {
    setPage(page + 1);
    const dataPromise = searchFlickr(API_KEY, searchText, page.toString());
    dataPromise.then((data: unknown) => {
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
        keyExtractor={(photo) => photo.id}
        numColumns={2}
        onEndReached={() => {if (navigation.isFocused()) return searchAndAppendPhotos();}}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}

export default Gallery;