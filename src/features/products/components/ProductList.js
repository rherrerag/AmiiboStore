import React from 'react';
import {FlatList, View} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

const ProductList = ({data, renderItem}) => {
  const render = () => (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => 'item' + index}
        contentContainerStyle={{
          padding: 16,
          maxWidth: '100%',
        }}
        numColumns={2}
      />
    </View>
  );

  return render();
};

ProductList.propTypes = propTypes;

export default ProductList;
