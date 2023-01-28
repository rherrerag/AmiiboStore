import React, {memo} from 'react';
import {connect} from 'react-redux';
import {Container} from 'native-base';
import {SafeAreaView} from 'react-native';
import Product from '../components/Product';
import NavBar from '../../../components/NavBar';
import StoreStatusBar from '../../../components/StoreStatusBar';
import {colors} from '../../../utils/cartUtils';
import labels from '../../../constants/labels';
import useProductsHomeController from '../hooks/useProductsHomeController';
import ProductsLoader from '../components/ProductsLoader';
import ProductList from '../components/ProductList';

const ProductsHome = ({navigation}) => {
  const {isLoadingProducts, itemsArray, animate} = useProductsHomeController();

  const renderItem = item => (
    <Product data={item} key={item.index} navigation={navigation} />
  );

  const loading = () => <ProductsLoader />;

  const renderContent = () => {
    if (!itemsArray?.length || isLoadingProducts) {
      return loading();
    }
    // Orden random para productos
    itemsArray.sort((a, b) => 0.5 - Math.random());
    return (
      itemsArray.length && (
        <ProductList data={itemsArray} renderItem={renderItem} />
      )
    );
  };

  return (
    <SafeAreaView
      style={{minWidth: '100%', flex: 0.5, backgroundColor: colors.nintendo1}}>
      <NavBar
        title={labels.HOME.NAV_BAR_TITLE}
        hideBackButton
        animate={animate}
      />
      <Container
        style={{
          backgroundColor: colors.white,
          maxWidth: '100%',
          minHeight: '100%',
        }}>
        <StoreStatusBar />
        {renderContent()}
      </Container>
    </SafeAreaView>
  );
};

export default connect()(memo(ProductsHome));
