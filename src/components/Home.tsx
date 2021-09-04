import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './Gallery';
import Search from './Search';

const Home = () => {
  // todo state for array of flickr images
  const [photos, setPhotos] = React.useState([]);

  return (
    <View style={styles.container}>
      <Search setPhotos={setPhotos} />
      <Gallery photos={photos} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#627754',
    alignItems: 'center',
    justifyContent: 'center',
  },
});