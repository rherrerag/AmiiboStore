import React, {memo, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {HStack, Badge, Text} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/cartUtils';

const NavBar = ({title, hideBackButton}) => {
  const navigation = useNavigation();
  const {cart} = useSelector(state => state.cart);
  const [shoppingCartItems, setShoppingCartItems] = useState(cart.length);

  useEffect(() => {
    setShoppingCartItems(cart.length);
  }, [cart]);

  const renderLeft = () =>
    hideBackButton ? null : (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="chevron-left" size={28} color="white" />
      </TouchableOpacity>
    );

  const renderNotifications = () =>
    shoppingCartItems > 0 && (
      <Badge
        bg={colors.nintendo2}
        colorScheme="danger"
        rounded="full"
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        top={-16}
        _text={{
          fontSize: 12,
        }}
        style={{position: 'absolute'}}>
        {shoppingCartItems?.toString()}
      </Badge>
    );

  const renderRight = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Cart')}>
        {renderNotifications()}
        <MaterialCommunityIcons
          name="cart-minus"
          size={28}
          color={colors.white}
          style={{marginRight: 16}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <HStack
        bg={colors.nintendo1}
        p={4}
        justifyContent="space-between"
        alignItems="center">
        <HStack space={4} alignItems="center">
          {renderLeft()}
          <Text color="white" fontSize={20} fontWeight="bold">
            {title}
          </Text>
        </HStack>
        <HStack space={4}>{renderRight()}</HStack>
      </HStack>
    </>
  );
};

export default connect()(memo(NavBar));
