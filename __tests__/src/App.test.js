import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../../src/App';

describe('App container tests', () => {
  test('deberia renderizar componente App correctamente', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
