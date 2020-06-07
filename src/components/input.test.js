import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr} from '../test/testUtils';

import Input from './input';

const setup = () => {
    return shallow(<Input />);
}

it('renders the input component', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-app');
    expect(component.length).toBe(1);
});