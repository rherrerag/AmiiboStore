import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {getProducts} from '../../../../../src/features/products/services';
import {
  responseOK,
  responseError,
} from '../../../../../__mocks__/responseProducts';
import config from '../../../../../src/constants/config';

const endpoints = {
  BASE_URL: config.ENDPOINTS.BASE_URL,
};

describe('test invocacion Api', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  test('deberia invocar api getProducts', async () => {
    mock.onGet(endpoints.BASE_URL).reply(200, responseOK);
    const response = await getProducts();
    expect(response).toBeTruthy();
  });

  test('deberia invocar api eliminarDispositivos', async () => {
    mock.onPost('https://api-incorrecta.com').reply(404, true);
    const response = await getProducts();
    expect(response.baseURL).not.toBeDefined();
  });

  test('deberia invocar api error', async () => {
    mock.onGet(endpoints.BASE_URL).reply(500, responseError);
    const response = await getProducts();
    expect(response.error).not.toBeDefined();
  });
});
