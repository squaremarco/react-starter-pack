import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HelloWorld from '..';

afterEach(cleanup);

describe('HelloWorld', () => {
  it('Snapshot test', () => {
    const { asFragment } = render(<HelloWorld />);
    expect(asFragment()).toMatchSnapshot();
  });
});
