import React from 'react';
import {Image} from 'native-base';
import PropTypes from 'prop-types';

const propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  win: PropTypes.shape({}).isRequired,
  ratio: PropTypes.number.isRequired,
};

const DetailImage = ({productName, productImage, win, ratio}) => {
  const render = () => (
    <Image
      source={{
        uri: productImage,
      }}
      alt={productName}
      resizeMode="contain"
      roundedTop="md"
      style={{width: win.width, height: 280 * ratio}}
      mb={4}
    />
  );

  return render();
};

DetailImage.propTypes = propTypes;

export default DetailImage;
