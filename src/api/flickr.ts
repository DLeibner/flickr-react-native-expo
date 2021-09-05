import { Owner, PhotoDefinition, PhotoInformation } from "../types/PhotoClass";

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

export const searchFlickr = (apiKey: string, searchText: string, pageNum: string) : any => {
  const data = {
    method: 'flickr.photos.search',
    api_key: apiKey,
    text: searchText,
    sort: 'interestingness-desc',
    per_page: '12',
    //license: '4',
    //extras: 'owner_name,license',
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
        res = data.photos.photo.map((photo : any) => new PhotoDefinition(getFlickrImageURL(photo, 'w'), photo.id, photo.secret))
      } else {
        alert(data.message);
      }
      resolve(res);
    })
    .catch(err => reject(err));
  }));
};
 
export const getPhotoInfo = (apiKey: string, id: string, secret: string) => {
  const data = {
    method: 'flickr.photos.getInfo',
    api_key: apiKey,
    photo_id: id,
    secret: secret,
    format: 'json',
    nojsoncallback: '1',
  }

  console.log('Getting info for photo: ', id);

  const url = getAPIURL(data);

  return (new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let res: PhotoInformation = {} as PhotoInformation;
      if (data.photo) {
        res = new PhotoInformation(
          data.photo.title._content,
          data.photo.description._content,
          new Owner(data.photo.owner.username, data.photo.owner.realname, data.photo.owner.location)
        );
      } else {
        alert(data.message);
      }
      resolve(res);
    })
    .catch(err => reject(err));
  }));
};
