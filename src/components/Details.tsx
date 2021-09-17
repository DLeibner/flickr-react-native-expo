import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { getPhotoInfo } from '../api/flickr';
import { API_KEY } from '@env';
import { PhotoInformation } from '../types/PhotoClass';
import { useRoute } from '@react-navigation/native';
import { DetailsScreenRouteProp } from '../types/PropTypes';
import { DetailStyle } from '../styles/CustomStyles';

const window = Dimensions.get('window');

function Details() : JSX.Element {
  const route = useRoute<DetailsScreenRouteProp>();
  const [photoInfo, setPhotoInfo] = useState<PhotoInformation>();

  useEffect(() => {
    const dataPromise = getPhotoInfo(API_KEY, route.params.item.id, route.params.item.secret);
    dataPromise.then((data: PhotoInformation | unknown) => {
      if (data instanceof PhotoInformation) {
        setPhotoInfo(data);
      }
    });
  }, []);

  const Details = () => (
    <View style={{padding: 8}}>
      <Text style={DetailStyle.title} >{photoInfo && photoInfo.title}</Text>
      <Text style={DetailStyle.info} >{photoInfo && photoInfo.description && 'Description: ' + photoInfo.description }</Text>
      <Text style={DetailStyle.info} >{photoInfo && photoInfo.owner && (photoInfo.owner.username || photoInfo.owner.realname) && 'User: ' + (photoInfo.owner.realname || photoInfo.owner.username)}</Text>
      <Text style={DetailStyle.info} >{photoInfo && photoInfo.owner && photoInfo.owner.location && 'Location: ' + photoInfo.owner.location}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1}}>
      <Image 
        source={{uri: route.params.item.url}}
        resizeMode='stretch'
        style={{width: window.width, height: window.height}}
      />
      {photoInfo && <Details />}
    </View>
  );
}

export default Details;