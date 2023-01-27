import React from 'react';
import {Center, Spinner} from 'native-base';

const ProductsLoader = () => {
  const render = () => (
    <Center flex={0.8} minWidth="100%">
      <Spinner accessibilityLabel="cargando" color="emerald.400" />
    </Center>
  );

  return render();
};

export default ProductsLoader;
