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

  const parameters = new URLSearchParams(data);
  const url = `https://api.flickr.com/services/rest/?${parameters}`;

  return (new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      // get an array of image-url
      let res: string[] = [];
      if (data.photos) {
        console.log('This is data', data);
        res = data.photos.photo.map((photo : any) => getFlickrImageURL(photo, 'q'))
      } else {
        alert(data.message);
      }
      resolve(res);
    })
    .catch(err => reject(err));
  }));
};

export default searchFlickr;