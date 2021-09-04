import React from 'react';
import { View, Text } from 'react-native';
import Photo from './Photo';

function Gallery( {photos} ) {
  return (
    <View>
      <Text> This is Gallery </Text>
      <Photo> </Photo>
    </View>
  );
}

export default Gallery;