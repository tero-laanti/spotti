export const AUTOCOMPLETE_SUGGESTIONS = [
  {
    label: 'Auran Panimo, Turku',
    coordinates: {
      latitude: 60.441288,
      longitude: 22.246677,
    },
  },
  {
    label: 'Hippoksentie 33, Kupittaa, Turku',
    coordinates: {
      latitude: 60.443,
      longitude: 22.302,
    },
  },
  {
    label: 'Kupittaanpuisto, Turku',
    coordinates: {
      latitude: 60.445886,
      longitude: 22.288588,
    },
  },
  {
    label: 'Ravintola Kaskis, Turku',
    coordinates: {
      latitude: 60.446574,
      longitude: 22.272875,
    },
  },
  {
    label: 'Turun kauppakorkeakoulu, Turku',
    coordinates: {
      latitude: 60.454665,
      longitude: 22.288474,
    },
  },
];

export const SEARCH_COORDINATES = {
  latitude: 60.443,
  longitude: 22.302,
};

export const SPOTS = [
  {
    id: 1,
    latitude: 60.448,
    longitude: 22.289,
    address: 'Spot street 37',
    distance: '12 min',
    price: 3,
    imageUrls: ['www.test.url'],
    description: 'This is a long Spot description that should be scrollable in the spotinfopage. '.repeat(
      15
    ),
    availableTimes: {},
  },
  {
    id: 2,
    latitude: 60.452,
    longitude: 22.286,
    address: 'Spot address 138',
    price: 2,
    distance: '6 min',
    imageUrls: ['www.test.url', 'www.another.url'],
    description: 'This is a description',
    availableTimes: {
      '2019-07-20': { start: { hour: 12, minute: 15 }, end: { hour: 13, minute: 45 } },
      '2019-07-22': { start: { hour: 16, minute: 0 }, end: { hour: 17, minute: 0 } },
    },
  },
  {
    id: 3,
    latitude: 60.451,
    longitude: 22.288,
    address: 'Hämeenkatu 1000',
    price: 5,
    distance: '',
    imageUrls: [],
    description: '',
    availableTimes: {},
  },
];
