import React from 'react';
import { shallow } from 'enzyme';
import { snapshotify } from 'TestUtils';

import HelloWorld from '../helloWorld';

describe('HelloWorld', () => {
  it('Exists', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Should render an <h1> element', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('h1').exists()).toEqual(true);
  });

  it('Should render "Hello, World!"', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(wrapper.find('h1').text()).toEqual('Hello, World!');
  });

  it('Should match snapshot', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(snapshotify(wrapper)).toMatchSnapshot();
  });
});
