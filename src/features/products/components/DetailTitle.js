import React from 'react';
import {Text} from 'native-base';
import {colors} from '../../../utils/cartUtils';
import PropTypes from 'prop-types';

const propTypes = {
  productName: PropTypes.string.isRequired,
};

const DetailTitle = ({productName}) => {
  const render = () => (
    <Text
      fontSize="2xl"
      mb={4}
      letterSpacing={2}
      bold
      underline
      textAlign="center"
      color={colors.nintendo3}>
      {productName.toUpperCase()}
    </Text>
  );

  return render();
};

DetailTitle.propTypes = propTypes;

export default DetailTitle;
