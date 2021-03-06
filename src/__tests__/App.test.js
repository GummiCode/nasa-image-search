import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('component App renders', () => {
  const { asFragment } = render(<App />);
  const component = asFragment();
  expect (component).toMatchSnapshot();
});
