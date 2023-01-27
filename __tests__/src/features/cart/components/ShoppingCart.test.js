import React from 'react';
import {render} from '@testing-library/react-native';
import ShoppingCart from '../../../../../src/features/cart/components/ShoppingCart';
import {NativeBaseProvider} from 'native-base';

const totalMock = 3000;

describe('ShoppingCart component tests', () => {
  test('deberia renderizar componente ShoppingCart correctamente', () => {
    const {toJSON} = render(
      <NativeBaseProvider>
        <ShoppingCart
          cart={[]}
          renderItem={jest.fn()}
          buttonLabel="Test Label"
          total={totalMock}
          onPress={jest.fn()}
        />
      </NativeBaseProvider>);
    expect(toJSON()).toMatchSnapshot();
  });
});
