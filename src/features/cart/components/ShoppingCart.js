import React from 'react';
import {View, Button} from 'native-base';
import {colors} from '../../../utils/cartUtils';
import PropTypes from 'prop-types';

const propTypes = {
  cart: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

const ShoppingCart = ({cart, renderItem, buttonLabel, total, onPress}) => {
  const render = () => (
    <View padding={4} pt={4}>
      <View>{cart.map(item => renderItem(item))}</View>
      <Button
        mt={6}
        size="lg"
        bgColor={colors.nintendo2}
        style={{color: colors.white}}
        onPress={onPress}>
        {`${buttonLabel}: $${total
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
      </Button>
    </View>
  );

  return render();
};

ShoppingCart.propTypes = propTypes;

export default ShoppingCart;
