import React from 'react';
import {View, Text, Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../../utils/cartUtils';
import PropTypes from 'prop-types';

const propTypes = {
  onPress: PropTypes.func.isRequired,
  titleLabel: PropTypes.string.isRequired,
  descriptionLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

const EmptyCart = ({onPress, titleLabel, descriptionLabel, buttonLabel}) => {
  const render = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: '100%',
        flexGrow: 1,
        paddingLeft: 24,
        paddingRight: 24,
      }}>
      <Fontisto name="neutral" size={120} color={colors.nintendo3} />
      <Text fontSize="2xl" mt={4} mb={4} bold color={colors.nintendo3}>
        {titleLabel}
      </Text>
      <Text color="light.500" textAlign="center" mb={4}>
        {descriptionLabel}
      </Text>
      <Button
        size="lg"
        bgColor={colors.nintendo2}
        style={{color: colors.white}}
        onPress={onPress}>
        {buttonLabel}
      </Button>
    </View>
  );

  return render();
};

EmptyCart.propTypes = propTypes;

export default EmptyCart;
