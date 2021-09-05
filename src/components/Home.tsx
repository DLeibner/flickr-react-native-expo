import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Gallery from './Gallery';
import Loading from './Loading';
import Search from './Search';

const Home = ({navigation}) => {
  // todo state for array of flickr images
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  return (
    <ScrollView style={styles.container}>
      <Search setPhotos = {setPhotos} setLoading = {setLoading} />
      { loading && <Loading /> }
      <Gallery photos={photos} navigation={navigation} />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00e3f3',
  },
});