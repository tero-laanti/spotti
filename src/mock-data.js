export const AUTOCOMPLETE_SUGGESTIONS = {
  kup: [
    'Kupari, Croatia',
    'Kupjak, Croatia',
    'Kupang, Indonesia',
    'Kupa',
    'Kupres, Bosnia and Herzegovina',
  ],
  kupi: [
    'Brod Na Kupi, Croatia',
    'Kupiskis, Lithuania',
    'Kupittaa, Turku',
    'Kupittaankatu, Turku',
    'Kupinovo, Serbia',
  ],
  kupit: [
    'Kupittaa, Turku',
    'Kupittaankatu, Turku',
    'Kupittaanpuisto, Turku',
    'Kupittaan asema, Turku',
    'Kupittaan urheiluhalli, Turku',
  ],
  kupitt: [
    'Kupittaa, Turku',
    'Kupittaankatu, Turku',
    'Kupittaanpuisto, Turku',
    'Kupittaan asema, Turku',
    'Kupittaan urheiluhalli, Turku',
  ],
  kupitta: [
    'Kupittaa, Turku',
    'Kupittaankatu, Turku',
    'Kupittaanpuisto, Turku',
    'Kupittaan asema, Turku',
    'Kupittaan urheiluhalli, Turku',
  ],
  kupittaa: [
    'Kupittaa, Turku',
    'Kupittaankatu, Turku',
    'Kupittaanpuisto, Turku',
    'Kupittaan asema, Turku',
    'Kupittaan urheiluhalli, Turku',
  ],
};

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
