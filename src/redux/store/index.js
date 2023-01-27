import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import products from '../../features/products/reducers/products';
import cart from '../../features/cart/reducers/cart';

export default configureStore({
  reducer: {products, cart},
  middleware: [thunk],
});
