import React, {memo} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView} from 'react-native';
import {Container, StatusBar} from 'native-base';
import NavBar from '../../../components/NavBar';
import {colors} from '../../../utils/cartUtils';
import labels from '../../../constants/labels';
import useCartController from '../hooks/useCartController';
import CartItem from '../components/CartItem';
import ShoppingCart from '../components/ShoppingCart';
import EmptyCart from '../components/EmptyCart';
import config from '../../../constants/config';

const Cart = () => {
  const {cart, products, getTotal, dispatch, navigation} = useCartController();

  const goToHome = () => navigation.navigate('Home');
  const paymentResult = () => {
    if (config.ERROR_FLAG) {
      navigation.navigate('Error');
    } else {
      navigation.navigate('Success');
    }
  };

  const renderItem = item => {
    const {quantity} = cart.find(prod => prod.tail === item.tail);
    const productitem = products.find(prod => prod.tail === item.tail);
    const {price, tail, image, name} = productitem;
    const value = quantity > 0 ? price * quantity : price;
    const productName = `${name}`;
    const goToProduct = () =>
      navigation.navigate('Detail', {
        item: productitem,
      });
    return (
      <CartItem
        cart={cart}
        item={item}
        value={value}
        onPress={goToProduct}
        productName={productName}
        tail={tail}
        image={image}
        dispatch={dispatch}
      />
    );
  };

  const renderShoppingCart = () => {
    const total = getTotal();
    if (total === 0) {
      return (
        <EmptyCart
          onPress={goToHome}
          titleLabel={labels.CART.EMPTY_TITLE}
          descriptionLabel={labels.CART.EMPTY_DESCRIPTION}
          buttonLabel={labels.CART.HOME_BACK_BUTTON}
        />
      );
    }
    return (
      <ShoppingCart
        cart={cart}
        renderItem={renderItem}
        buttonLabel={labels.CART.PAY}
        total={total}
        onPress={paymentResult}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        minWidth: '100%',
        minHeight: '110%',
        flex: 0.5,
        backgroundColor: colors.nintendo1,
      }}>
      <NavBar title={labels.CART.NAV_BAR_TITLE} />
      <ScrollView>
        <Container
          style={{
            backgroundColor: colors.white,
            maxWidth: '100%',
            minHeight: '100%',
            flex: 1,
            flexDirection: 'column',
            paddingBottom: '30%',
          }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={colors.nintendo1}
          />
          {renderShoppingCart()}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect()(memo(Cart));
