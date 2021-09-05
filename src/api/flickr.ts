import { Owner, PhotoDefinition, PhotoInformation } from "../types/PhotoClass";

const yourApiKey = 'your api comes here';

const getFlickrImageURL = (photo: any, size: string) => {
  let url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
  if (size) {
    // Configure image size
    url += `_${size}`;
  }
  url += '.jpg';
  return url;
};

const getAPIURL = (params: any) : string => {
  const parameters = new URLSearchParams(params);
  const url = `https://api.flickr.com/services/rest/?${parameters}`;

  return url;
}

const searchFlickr = (apiKey: string, searchText: string, pageNum: string) : any => {
  const data = {
    method: 'flickr.photos.search',
    api_key: apiKey,
    text: searchText,
    sort: 'interestingness-desc',
    per_page: '12',
    license: '4',
    extras: 'owner_name,license',
    format: 'json',
    nojsoncallback: '1',
    page: pageNum
  };

  const url = getAPIURL(data);

  return (new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      // get an array of image-url
      let res: Array<PhotoDefinition> = [];
      if (data.photos) {
        console.log('This is data', data);
        res = data.photos.photo.map((photo : any) => new PhotoDefinition(getFlickrImageURL(photo, 'q'), photo.id))
      } else {
        alert(data.message);
      }
      resolve(res);
    })
    .catch(err => reject(err));
  }));
};
 
const getPhotoInfo = (apiKey: string, id: string) => {
  const data = {
    method: 'flickr.photos.getInfo',
    api_key: apiKey,
    id: id
  }

  const url = getAPIURL(data);

  return (new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let res: PhotoInformation = {} as PhotoInformation;
      if (data.photo) {
        console.log('This is data', data);
        res = new PhotoInformation(
          data.photo.title,
          data.photo.description,
          data.photo.url,
          new Owner(data.photo.username, data.photo.realname, data.photo.location)
        );
      } else {
        alert(data.message);
      }
      resolve(res);
    })
    .catch(err => reject(err));
  }));
};

export default searchFlickr;