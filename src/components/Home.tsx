import React from 'react';
import { StyleSheet, View } from 'react-native';
import Gallery from './Gallery';
import Loading from './Loading';
import Search from './Search';

const Home = ({navigation}) => {
  const [photos, setPhotos] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  return (
    <View style={styles.container}>
      <Search setPhotos={setPhotos} setSearchText={setSearchText} setLoading={setLoading} setPage={setPage} />
      { loading && <Loading /> }
      <Gallery photos={photos} setPhotos={setPhotos} navigation={navigation} page={page} setPage={setPage} searchText={searchText}/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#a2e7ec',
    backgroundColor: 'white',
  },
});