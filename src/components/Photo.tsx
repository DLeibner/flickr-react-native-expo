import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';

function Photo({ item, navigation }) {
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', item.id)}
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
    width: 150,
    height: 150,
    borderColor: "#00e3f3",
    borderWidth: 2,
    resizeMode: 'center',
    position: 'relative'
  },
});

export default Photo;