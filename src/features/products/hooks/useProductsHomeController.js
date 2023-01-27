import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useColorScheme, Animated} from 'react-native';
import {getProductsThunk} from '../actions/products';

const useProductsHomeController = () => {
  const [arrItems, setArrItems] = useState([]);
  const {products} = useSelector(state => state.products);
  const {isLoadingProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  /**
   * Ejecuta método que setea los productos en storage con redux
   */
  const initData = async () => {
    if (!arrItems.length) {
      dispatch(getProductsThunk(navigation));
    }
  };

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    setArrItems(products);
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
    arrItems,
    animate,
  };
};

export default useProductsHomeController;
