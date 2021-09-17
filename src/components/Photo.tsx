import React from 'react';
import { Image, Pressable } from 'react-native';
import { PhotoStyle } from '../styles/CustomStyles';
import { PhotoProps } from '../types/PropTypes';

function Photo({ item, navigation} : PhotoProps) : JSX.Element {

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {item})}
    >
      <Image 
        source={{uri: item.url}}
        style={PhotoStyle.image}
      />
    </Pressable>
  );
}

export default Photo;