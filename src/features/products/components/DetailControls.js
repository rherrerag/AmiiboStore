import React from 'react';
import {View} from 'native-base';
import ProductQuantityControls from '../../../components/ProductQuantityControls';
import PropTypes from 'prop-types';

const propTypes = {
  cart: PropTypes.array.isRequired,
  tail: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const DetailControls = ({cart, tail, dispatch}) => {
  const render = () => (
    <View
      style={{
        justifyContent: 'center',
        flexDirection: 'row',
        flexGrow: 1,
      }}>
      <ProductQuantityControls
        cart={cart}
        tail={tail}
        dispatch={dispatch}
        contentStyle={{marginBottom: 16, minWidth: 200}}
        buttonSize={62}
      />
    </View>
  );

  return render();
};

DetailControls.propTypes = propTypes;

export default DetailControls;
