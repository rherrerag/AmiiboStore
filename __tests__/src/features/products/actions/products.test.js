import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {getProductsThunk} from '../../../../../src/features/products/actions/products';
import {getProducts} from '../../../../../src/features/products/services';
import {
  responseOK,
  responseError,
} from '../../../../../__mocks__/responseProducts';
import * as actions from '../../../../../src/features/products/actions/products';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../../../../src/features/products/services');

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

const sourceMock = jest.fn();

describe('Redux action tests', () => {
  test('deberia crear una acción CLEAR_ERROR_PRODUCTS para recibir una respuesta', () => {
    const expectedAction = {
      type: 'CLEAR_ERROR_PRODUCTS',
    };
    expect(actions.clearErrorProducts()).toEqual(expectedAction);
  });
  test('deberia crear una acción CLEAR_ALL_PRODUCTS para recibir una respuesta', () => {
    const expectedAction = {
      type: 'CLEAR_ALL_PRODUCTS',
    };
    expect(actions.clearAllProducts()).toEqual(expectedAction);
  });
  test('deberia ejecutar getProductsThunk sin error', async () => {
    const store = mockStore(initialState);
    await getProducts.mockReturnValueOnce(responseOK);
    store.dispatch(getProductsThunk(sourceMock));
    expect(getProductsThunk).toBeDefined();
  });
  test('deberia ejecutar getProductsThunk con error', async () => {
    const store = mockStore(initialState);
    getProducts.mockReturnValueOnce(responseError);
    store.dispatch(getProductsThunk(sourceMock));
    expect(getProductsThunk).toBeDefined();
  });
});
