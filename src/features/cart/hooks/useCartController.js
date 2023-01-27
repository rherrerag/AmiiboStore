import {useDispatch, useSelector} from 'react-redux';
import {LogBox} from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
import {useNavigation} from '@react-navigation/native';

const useCartController = () => {
  const {products} = useSelector(state => state.products);
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getTotal = () => {
    let total = 0;
    cart.forEach(({quantity, tail}) => {
      const product = products.find(product => product.tail === tail);
      const calculatePrice = product.price * quantity;
      total = total + calculatePrice;
    });
    return total;
  };

  return {
    cart,
    products,
    getTotal,
    dispatch,
    navigation,
  };
};

export default useCartController;
