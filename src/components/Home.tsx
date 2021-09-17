import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PhotoDefinition } from '../types/PhotoClass';
import { HomeScreenProp } from '../types/PropTypes';
import Gallery from './Gallery';
import Loading from './Loading';
import Search from './Search';

const Home = () : JSX.Element => {
  const navigation = useNavigation<HomeScreenProp>();

  const [photos, setPhotos] = React.useState<Array<PhotoDefinition>>([]);
  const [searchText, setSearchText] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [page, setPage] = React.useState<number>(1);

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