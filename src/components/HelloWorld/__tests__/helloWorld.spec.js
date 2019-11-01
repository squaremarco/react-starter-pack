import React from 'react';
import { mount } from 'enzyme';

import HelloWorld from '../helloWorld';

describe('HelloWorld', () => {
  it('Exists', () => {
    const wrapper = mount(<HelloWorld />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Should render an <h1> element', () => {
    const wrapper = mount(<HelloWorld />);
    expect(wrapper.find('h1').exists()).toEqual(true);
  });

  it('Should render "Hello, World!"', () => {
    const wrapper = mount(<HelloWorld />);
    expect(wrapper.find('h1').text()).toEqual('Hello, World!');
  });

  it('Should match snapshot', () => {
    const wrapper = mount(<HelloWorld />);
    expect(wrapper).toMatchSnapshot();
  });
});
