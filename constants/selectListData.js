import localData from './local.json';

export const nations = [
  { name: 'Viet Nam', symbol: 'VN' },
  { name: 'Laos', symbol: 'LAO' },
  { name: 'America', symbol: 'USA' },
];

export const citieslist = [
  {
    symbol: 'VN',
    cities: localData,
  },
  {
    symbol: 'LAO',
    cities: [],
  },
  {
    symbol: 'USA',
    cities: [],
  },
];
