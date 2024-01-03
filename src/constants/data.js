import images from './images';

const wines = [
  {
    title: 'Chapel Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const burgers = [
  {
    title: 'Hamburger',
    price: '$20',
    tags: 'Aperol | Villa Marchesi',
  },
  {
    title: "Turkey Burger",
    price: '$16',
    tags: 'Dark rum | Ginger beer ',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus | Sugar',
  },
  {
    title: 'ELK Burger',
    price: '$31',
    tags: 'Bourbon | Brown sugar',
  },
  {
    title: 'Vegge Burger',
    price: '$26',
    tags: 'Gin | Sweet Vermouth ',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa prosecco',
  },
  {
    title: "Dark Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, burgers, cocktails, awards };
