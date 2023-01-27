import React from 'react';
import {View, Text, Image} from 'native-base';
import {colors} from '../../../utils/cartUtils';
import ItemControls from '../../../components/ItemControls';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const propTypes = {
  cart: PropTypes.array.isRequired,
  item: PropTypes.shape({}).isRequired,
  productName: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  tail: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const CartItem = ({
  cart,
  item,
  image,
  tail,
  onPress,
  productName,
  value,
  dispatch,
}) => {
  const render = () => (
    <View
      key={tail}
      style={{
        flexDirection: 'row',
        marginBottom: 16,
        maxWidth: '100%',
        minWidth: '100%',
        paddingBottom: 8,
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        paddingLeft: '35%'
      }}>
      <View
        alignItems="center"
        style={{justifyContent: 'center', flexDirection: 'column-reverse'}}>
        <View alignItems="center">
          <TouchableOpacity onPress={onPress}>
            <Text bold>{productName}</Text>
            <Text>
              {'$'}
              {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexGrow: 1}} alignItems="center">
          <TouchableOpacity onPress={onPress}>
            <Image
              source={{
                uri: image,
              }}
              alt={productName}
              resizeMode="cover"
              roundedTop="md"
              style={{height: 80, width: 54}}
              mr={3}
            />
          </TouchableOpacity>
          <ItemControls
            cart={cart}
            tail={item.tail}
            dispatch={dispatch}
            contentStyle={{marginBottom: 16, minWidth: 100}}
            buttonSize={32}
          />
        </View>
      </View>
    </View>
  );

  return render();
};

CartItem.propTypes = propTypes;

export default CartItem;
