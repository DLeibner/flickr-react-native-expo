import React from 'react';
import { Image, Pressable, StyleSheet, Dimensions } from 'react-native';
import { PhotoDefinition } from '../types/PhotoClass';
import { HomeScreenProp } from './Home';

const window = Dimensions.get('window');

type Props = {
  item: PhotoDefinition;
  navigation: HomeScreenProp;
};

function Photo({ item, navigation} : Props) : JSX.Element {

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {item})}
    >
      <Image 
        source={{uri: item.url}}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    alignContent: 'center',
    width: window.width*0.48,
    height: window.width*0.48,
    //borderColor: "#a2e7ec",
    borderColor: 'white',
    borderWidth: 5,
    resizeMode: 'cover',
    position: 'relative'
  },
});

export default Photo;