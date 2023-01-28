import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';
import {getProductsThunk} from '../actions/products';

const useProductsHomeController = () => {
  const [itemsArray, setItemsArray] = useState([]);
  const {products} = useSelector(state => state.products);
  const {isLoadingProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  /**
   * Ejecuta método que setea los productos en storage con redux
   */
  const initData = async () => {
    if (!itemsArray.length) {
      dispatch(getProductsThunk(navigation));
    }
  };

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    setItemsArray(products);
  }, [products]);

  let opacity = new Animated.Value(0);

  const animate = easing => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      easing,
    }).start();
  };

  return {
    isLoadingProducts,
    itemsArray,
    animate,
  };
};

export default useProductsHomeController;
