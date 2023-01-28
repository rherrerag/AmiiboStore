import React from 'react';
import {StatusBar} from 'native-base';
import {colors} from '../utils/cartUtils';

const StoreStatusBar = () => {
  const render = () => (
    <StatusBar barStyle="light-content" backgroundColor={colors.nintendo1} />
  );

  return render();
};

export default StoreStatusBar;
