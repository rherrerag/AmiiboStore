import React, {memo} from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Image, Text, Box, Heading} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/es';
import {colors} from '../../../utils/cartUtils';
import ItemControls from '../../../components/ItemControls';

moment.locale('es');

const Product = ({data}) => {
  const {cart} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const postionProd = data.index + 1;
  const isEven = postionProd % 2 === 0;
  const navigation = useNavigation();

  const {image, name, character, price, tail, type} = data.item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          item: data.item,
        })
      }
      style={{
        maxWidth: Dimensions.get('window').width,
        marginLeft: isEven ? 32 : 0,
      }}>
      <Box
        bg={colors.white}
        shadow={4}
        rounded="xl"
        maxWidth="100%"
        minWidth="100%"
        mb={6}
        key={data.index}
        padding={4}>
        <Image
          source={{
            uri: image,
          }}
          alt={name}
          borderRadius={50}
          resizeMode="contain"
          roundedTop="md"
          style={{height: 120, width: 'auto'}}
          mb={4}
        />
        <Heading
          textAlign="center"
          size={['xl']}
          mb={2}
          color={colors.dark_gray}>
          {character}
        </Heading>
        <Text textAlign="center" bold color={colors.dark_gray} mb={2}>
          {type}
        </Text>
        <Text textAlign="center" bold color={colors.nintendo3} mb={2}>
          ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
        </Text>
        <ItemControls cart={cart} tail={tail} dispatch={dispatch} />
      </Box>
    </TouchableOpacity>
  );
};

export default connect()(memo(Product));
