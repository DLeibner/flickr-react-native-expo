import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Photo from './Photo';

function Gallery( {photos, navigation} ) {
  const renderItem = function (item) {
    return (<Photo item={item.item} navigation={navigation} />);
  }

  return (
    <View style={{padding:7}}>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // ItemSeparatorComponent= {Separator}
        // ListHeaderComponent={Separator}
        numColumns={2}
      />
    </View>
  );
}

export default Gallery;