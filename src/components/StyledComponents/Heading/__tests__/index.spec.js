import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Heading from '..';

afterEach(cleanup);

describe('Heading', () => {
  const message = 'test';
  const component = <Heading>{message}</Heading>;

  it('Renders text correctly', () => {
    const { findByText } = render(component);
    expect(findByText(message)).not.toBeNull();
  });

  it('Should apply default styles', () => {
    const { container } = render(component);
    expect(container.firstChild).toHaveStyleRule('color', '#4c4c4c');
  });

  it('Snapshot test', () => {
    const { asFragment } = render(component);
    expect(asFragment()).toMatchSnapshot();
  });
});
