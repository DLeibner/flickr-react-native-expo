import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PhotoDefinition } from "./PhotoClass";

export type RootStackParamList = {
  Home: undefined;
  Details: {item: PhotoDefinition };
};

export type HomeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export type SearchProps = {
  setPhotos: (photos: Array<PhotoDefinition>) => void;
  setSearchText: (searchText: string) => void;
  setLoading: (loading: boolean) => void;
  setPage: (page: number) => void;
};

export type GalleryProps = {
  photos: Array<PhotoDefinition>;
  setPhotos: (photos: Array<PhotoDefinition>) => void;
  navigation: HomeScreenProp;
  page: number;
  setPage: (page: number) => void;
  searchText: string;
};

export type PhotoProps = {
  item: PhotoDefinition;
  navigation: HomeScreenProp;
};

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;