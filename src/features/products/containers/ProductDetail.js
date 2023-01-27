import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Box, Container, View, Center} from 'native-base';
import {SafeAreaView, StatusBar} from 'react-native';
import NavBar from '../../../components/NavBar';
import {colors} from '../../../utils/cartUtils';
import labels from '../../../constants/labels';
import useProductDetailController from '../hooks/useProductDetailController';
import DetailTitle from '../components/DetailTitle';
import DetailImage from '../components/DetailImage';
import DetailControls from '../components/DetailControls';
import DetailStack from '../components/DetailStack';

const ProductDetail = ({navigation, route: {params}}) => {
  const {
    amiiboSeries,
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
  } = useProductDetailController(params);

  return (
    <SafeAreaView
      style={{
        minWidth: '100%',
        minHeight: '110%',
        flex: 0.5,
        backgroundColor: colors.nintendo1,
      }}>
      <NavBar
        navigation={navigation}
        title={labels.PRODUCT_DETAIL.NAV_BAR_TITLE}
      />
      <ScrollView>
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
          <View
            style={{
              minWidth: '100%',
            }}>
            <Center padding={4}>
              <Box
                bg="white"
                shadow={4}
                rounded="xl"
                maxWidth="100%"
                minWidth="100%"
                key={tail}
                padding={4}>
                <DetailTitle productName={name} />
                <DetailImage
                  productName={name}
                  productImage={image}
                  win={window}
                  ratio={ratio}
                />
                <DetailStack
                  gameLabel={labels.PRODUCT_DETAIL.GAME}
                  gameData={gameSeries}
                  seriesLabel={labels.PRODUCT_DETAIL.SERIES}
                  seriesData={amiiboSeries}
                  typeLabel={labels.PRODUCT_DETAIL.TYPE}
                  typeData={type}
                  dateLabel={labels.PRODUCT_DETAIL.LAUNCH_DATE}
                  dateData={moment(release.na).format('L')}
                  priceLabel={labels.PRODUCT_DETAIL.PRICE}
                  priceData={price}
                />
                <DetailControls cart={cart} tail={tail} dispatch={dispatch} />
              </Box>
            </Center>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect()(memo(ProductDetail));
