# flickr-react-native-expo
React Native app for searching Flickr images

Steps how to install and run:

1. clone repository
2. navigate in cmd to path of cloned repository
3. run command -> yarn (yarn install) to install dependencies from package.json file
4. create .env file and place it in the root folder of cloned repo
5. in .env file add the following line -> API_KEY = "xyz" where xyz is api key for Flickr
6. run application with yarn start

Used third party library react-native-dotenv.
This library was used not to expose private api_key for Flickr.
