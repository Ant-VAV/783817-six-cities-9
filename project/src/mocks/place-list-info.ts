import { PlaceInfo } from '../types/client';

export const getPlaceListInfo = (): PlaceInfo[] => ([
  {
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 13,
      },
    },
    previewImage: 'https://9.react.pages.academy/static/hotel/14.jpg',
    images: [
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/17.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
    ],
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: true,
    rating: 3.5,
    type: 'house',
    bedrooms: 4,
    maxAdults: 6,
    price: 154,
    goods: [
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Fridge',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Washing machine',
      'Dishwasher',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    id: 1,
  },
  {
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    previewImage: 'https://9.react.pages.academy/static/hotel/13.jpg',
    images: [
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/6.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/1.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
    ],
    title: 'Tile House',
    isFavorite: true,
    isPremium: false,
    rating: 5,
    type: 'apartment',
    bedrooms: 1,
    maxAdults: 1,
    price: 238,
    goods: [
      'Breakfast',
      'Laptop friendly workspace',
      'Washer',
      'Baby seat',
      'Air conditioning',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    id: 2,
  },
  {
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    previewImage: 'https://9.react.pages.academy/static/hotel/9.jpg',
    images: [
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/4.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/5.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/10.jpg',
      'https://9.react.pages.academy/static/hotel/9.jpg',
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 123,
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Breakfast',
      'Fridge',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    id: 3,
  },
  {
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: 'https://9.react.pages.academy/static/hotel/7.jpg',
    images: [
      'https://9.react.pages.academy/static/hotel/9.jpg',
      'https://9.react.pages.academy/static/hotel/13.jpg',
      'https://9.react.pages.academy/static/hotel/16.jpg',
      'https://9.react.pages.academy/static/hotel/3.jpg',
      'https://9.react.pages.academy/static/hotel/19.jpg',
      'https://9.react.pages.academy/static/hotel/18.jpg',
      'https://9.react.pages.academy/static/hotel/8.jpg',
      'https://9.react.pages.academy/static/hotel/11.jpg',
      'https://9.react.pages.academy/static/hotel/15.jpg',
      'https://9.react.pages.academy/static/hotel/2.jpg',
      'https://9.react.pages.academy/static/hotel/14.jpg',
      'https://9.react.pages.academy/static/hotel/7.jpg',
      'https://9.react.pages.academy/static/hotel/20.jpg',
      'https://9.react.pages.academy/static/hotel/12.jpg',
    ],
    title: 'Wood and stone place',
    isFavorite: true,
    isPremium: false,
    rating: 2.2,
    type: 'room',
    bedrooms: 1,
    maxAdults: 1,
    price: 176,
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Breakfast',
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    id: 4,
  }]);
