import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getPhotoInfo } from '../api/flickr';
import { API_KEY } from '@env';

function Details({ route }) {
  const [photoInfo, setPhotoInfo] = useState();

  useEffect(() => {
    let dataPromise = getPhotoInfo(API_KEY, route.params.item.id, route.params.item.secret);
    dataPromise.then((data: any) => {
      setPhotoInfo(data);
    });
  }, []);

  return (
    <View style={{ flex: 1}}>
      <Image 
        source={{uri: route.params.item.url}}
        resizeMode={'cover'}
        style={{width: '100%', height: 200}}
      />
      <View style={{margin: 8}}>
        <Text style={styles.title} >{photoInfo && photoInfo.title}</Text>
        <Text style={styles.info} >{photoInfo && photoInfo.description && 'Description: ' + photoInfo.description }</Text>
        <Text style={styles.info} >{photoInfo && photoInfo.owner && (photoInfo.owner.username || photoInfo.owner.realname) && 'User: ' + (photoInfo.owner.realname || photoInfo.owner.username)}</Text>
        <Text style={styles.info} >{photoInfo && photoInfo.owner && photoInfo.owner.location && 'Location: ' + photoInfo.owner.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'darkblue',
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 8,
  },
  info: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
  }
});

export default Details;