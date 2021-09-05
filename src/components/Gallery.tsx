import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Photo from './Photo';

function Gallery( {photos} ) {
  return (
    <View>
      <FlatList
        data={photos}
        renderItem={Photo}
        keyExtractor={(item) => item.id}
        // ItemSeparatorComponent= {Separator}
        // ListHeaderComponent={Separator}
        numColumns={2}
      />
    </View>
  );
}

export default Gallery;