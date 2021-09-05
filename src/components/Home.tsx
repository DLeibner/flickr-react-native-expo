import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './Gallery';
import Loading from './Loading';
import Search from './Search';

const Home = () => {
  // todo state for array of flickr images
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <Search setPhotos = {setPhotos} setLoading = {setLoading} />
      { loading && <Loading /> }
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