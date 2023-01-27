import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToCart, colors, removeFromCart} from '../utils/cartUtils';
import {useNavigation} from '@react-navigation/native';

const ItemControls = ({cart, tail, dispatch, contentStyle, buttonSize}) => {
  const [quantityInCart, setQuantityInCart] = useState(0);
  const navigation = useNavigation();

  const productQuantity = () => {
    if (cart.length) {
      const findProd = cart.find(product => product.tail === tail);
      if (findProd) {
        setQuantityInCart(findProd.quantity);
      } else {
        setQuantityInCart(0);
      }
    } else {
      setQuantityInCart(0);
    }
  };

  useEffect(() => {
    productQuantity();
  }, [cart]);

  return (
    <View
      mt={2}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        ...contentStyle,
      }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={addToCart(cart, tail, dispatch, navigation)}>
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={buttonSize || 40}
          color={colors.nintendo2}
        />
      </TouchableOpacity>
      <Text
        ml={2}
        mr={2}
        textAlign="center"
        fontSize={18}
        bold
        flexGrow={1}
        color={colors.dark_gray}>
        {quantityInCart}
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={removeFromCart(cart, tail, dispatch, navigation)}>
        <MaterialCommunityIcons
          name="minus-circle-outline"
          size={buttonSize || 40}
          color={quantityInCart > 0 ? colors.black : colors.gray}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ItemControls;
