import {
  productsReducers,
  isLoadingProductsReducers,
} from '../../../../../src/features/products/reducers/products';

const initialState = {
  products: [
    {
      errorProducts: false,
      isLoadingProducts: false,
      products: [
        {
          amiiboSeries: 'Mario Sports Superstars',
          character: 'Metal Mario',
          gameSeries: 'Mario Sports Superstars',
          head: '09d00401',
          image:
            'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00401-02bc0e02.png',
          name: 'Metal Mario - Golf',
          price: 58720,
          release: {
            au: '2014-11-29',
            eu: '2014-11-28',
            jp: '2014-12-06',
            na: '2014-11-21',
          },
          tail: '02bc0e02',
          type: 'Card',
        },
      ],
    },
  ],
  cart: [
    {
      cart: [{quantity: 1, tail: '02bc0e02'}],
    },
  ],
};

describe('reducers tests', () => {
  test('debe devolver el initialState dispositivosRegistrados', () => {
    const reducer = productsReducers(undefined, initialState);
    expect(reducer).toEqual(null);
  });

  test('SET_PRODUCTS como expected', () => {
    const reducer = productsReducers(initialState, {
      type: 'SET_PRODUCTS',
    });
    expect(reducer).toBeFalsy();
  });

  test('CLEAR_ALL_PRODUCTS como expected', () => {
    const reducer = productsReducers([], {type: 'CLEAR_ALL_PRODUCTS'});
    expect(reducer).toBeDefined();
  });

  test('debe devolver el initialState isLoadingProducts', () => {
    const reducer = isLoadingProductsReducers(undefined, initialState);
    expect(reducer).toEqual(true);
  });

  test('SET_IS_LOADING_PRODUCTS como expected', () => {
    const reducer = isLoadingProductsReducers(initialState, {
      type: 'SET_IS_LOADING_PRODUCTS',
    });
    expect(reducer).toBeFalsy();
  });
});
