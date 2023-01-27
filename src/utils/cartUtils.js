import {Platform} from 'react-native';
import {setCart} from '../features/cart/actions/cart';

const isAndroid = Platform.OS === 'android';

/**
 * Gama de colores
 */
const colors = {
  nintendo1: '#d42c26',
  nintendo2: '#449ae5',
  nintendo3: '#eaad3c',
  black: '#000000',
  white: '#ffffff',
  red: '#ef4444',
  gray: '#d6d3d1',
  dark_gray: '#292524',
};

/**
 * Agrega items al carro de compras
 * @param {*} shoppingCart objeto
 * @param {*} tail int
 * @param {*} dispatch func
 * @param {*} navigation func
 */
const addToCart = (shoppingCart, tail, dispatch, navigation) => () => {
  try {
    const arrToCart = [...shoppingCart];
    const exist = arrToCart.find(prod => tail === prod.tail);
    if (exist) {
      exist.quantity++;
    } else {
      arrToCart.push({
        tail,
        quantity: 1,
      });
    }
    dispatch(setCart(arrToCart));
  } catch (error) {
    console.log(error);
    navigation.navigate('Error');
  }
};
/**
 * Elimina items del carro de compras
 * @param {*} shoppingCart objeto
 * @param {*} tail int
 * @param {*} dispatch func
 * @param {*} navigation func
 */
const removeFromCart = (shoppingCart, tail, dispatch, navigation) => () => {
  try {
    let arrToCart = [...shoppingCart];
    const exist = arrToCart.find(prod => tail === prod.tail);
    if (exist) {
      if (exist.quantity === 1) {
        arrToCart = shoppingCart.filter(prod => tail !== prod.tail);
      } else {
        exist.quantity--;
      }
    }
    dispatch(setCart(arrToCart));
  } catch (error) {
    console.log(error);
    navigation.navigate('Error');
  }
};

export {isAndroid, colors, addToCart, removeFromCart};
