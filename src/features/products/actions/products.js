import {getProducts} from '../services/';
import {
  SET_PRODUCTS,
  SET_IS_LOADING_PRODUCTS,
  SET_ERROR_PRODUCTS,
  CLEAR_ERROR_PRODUCTS,
  CLEAR_ALL_PRODUCTS,
} from './types';
import {randomPrice} from '../../../utils/priceUtils';

const setProducts = products => ({
  type: SET_PRODUCTS,
  products,
});

const setIsLoadingProducts = isLoadingProducts => ({
  type: SET_IS_LOADING_PRODUCTS,
  isLoadingProducts,
});

const setErrorProducts = errorProducts => ({
  type: SET_ERROR_PRODUCTS,
  errorProducts,
});

const clearErrorProducts = () => ({
  type: CLEAR_ERROR_PRODUCTS,
});

const clearAllProducts = () => ({
  type: CLEAR_ALL_PRODUCTS,
});

/**
 * Obtiene productos desde service
 * Seteo de productos en el storage
 */
const getProductsThunk = navigation => async dispatch => {
  dispatch(setIsLoadingProducts(true));
  try {
    const response = await getProducts();
    const {
      isCancel,
      data: {amiibo},
    } = response;
    if (response.status === 200) {
      const amibosPrice = amiibo.map(item => {
        item.price = randomPrice(1000, 10000);
        return item;
      });
      dispatch(setProducts(amibosPrice));
    } else {
      dispatch(setErrorProducts(true));
    }
    dispatch(setIsLoadingProducts(false));
    return isCancel;
  } catch (error) {
    console.log('error: ', error);
    navigation.navigate('Error');
  }
};

export {
  setProducts,
  setIsLoadingProducts,
  setErrorProducts,
  clearErrorProducts,
  clearAllProducts,
  getProductsThunk,
};
