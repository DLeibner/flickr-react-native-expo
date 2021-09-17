import { Dimensions, StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#a2e7ec',
    backgroundColor: 'white',
  },
});

export const DetailStyle = StyleSheet.create({
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

export const SearchStyle = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white"
  },
  container: {
    padding: 12,
  }
});

const window = Dimensions.get('window');

export const PhotoStyle = StyleSheet.create({
  image: {
    alignContent: 'center',
    width: window.width*0.48,
    height: window.width*0.48,
    //borderColor: "#a2e7ec",
    borderColor: 'white',
    borderWidth: 5,
    resizeMode: 'cover',
    position: 'relative'
  },
});