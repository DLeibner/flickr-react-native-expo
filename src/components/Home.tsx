import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Gallery from './Gallery';
import Search from './Search';

const Home = () => {
  return (
    <View style={styles.container}>
      <Search />
      <Gallery></Gallery>
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