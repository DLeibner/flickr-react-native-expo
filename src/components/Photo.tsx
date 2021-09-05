import React from 'react';
import { Image, Pressable, StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

function Photo({ item, navigation }) {
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
    borderColor: "#00e3f3",
    borderWidth: 5,
    resizeMode: 'cover',
    position: 'relative'
  },
});

export default Photo;