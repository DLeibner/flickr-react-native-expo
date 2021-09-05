import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

function Photo({ item }) {
  return (
    <Pressable>
      <Image 
        source={{uri: item.url}}
        style={styles.image}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderColor: "#00e3f3",
    borderWidth: 2,
    resizeMode: 'contain'
  },
});

export default Photo;