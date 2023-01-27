import React, {memo} from 'react';
import {connect} from 'react-redux';
import {Container} from 'native-base';
import {SafeAreaView, StatusBar} from 'react-native';
import Product from '../components/Product';
import NavBar from '../../../components/NavBar';
import {colors} from '../../../utils/cartUtils';
import labels from '../../../constants/labels';
import useProductsHomeController from '../hooks/useProductsHomeController';
import ProductsLoader from '../components/ProductsLoader';
import ProductList from '../components/ProductList';

const ProductsHome = ({navigation}) => {
  const {isLoadingProducts, arrItems, animate} = useProductsHomeController();

  const loading = () => <ProductsLoader />;

  const renderItem = item => (
    <Product data={item} key={item.index} navigation={navigation} />
  );

  const renderContent = () => {
    if (!arrItems?.length || isLoadingProducts) {
      return loading();
    }
    // Orden random para productos
    arrItems.sort((a, b) => 0.5 - Math.random());
    return (
      arrItems.length && <ProductList data={arrItems} renderItem={renderItem} />
    );
  };

  return (
    <SafeAreaView
      style={{minWidth: '100%', flex: 0.5, backgroundColor: colors.nintendo1}}>
      <NavBar title={labels.HOME.NAV_BAR_TITLE} withSearch animate={animate} />
      <Container
        style={{
          backgroundColor: colors.white,
          maxWidth: '100%',
          minHeight: '100%',
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.nintendo1}
        />
        {renderContent()}
      </Container>
    </SafeAreaView>
  );
};

export default connect()(memo(ProductsHome));
