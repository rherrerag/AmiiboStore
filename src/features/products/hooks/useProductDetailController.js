import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import 'moment/locale/es';
import {Dimensions, useColorScheme} from 'react-native';

moment.locale('es');

const useProductDetailController = params => {
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const window = Dimensions.get('window');
  const ratio = window.width / 500;
  const {
    amiiboSeries,
    character,
    gameSeries,
    image,
    name,
    release,
    tail,
    type,
    price,
  } = params.item;
  return {
    amiiboSeries,
    character,
    gameSeries,
    image,
    name,
    release,
    tail,
    type,
    price,
    ratio,
    window,
    cart,
    dispatch,
    moment,
  };
};

export default useProductDetailController;
