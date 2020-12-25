import React from 'react';

import Enzyme, { configure, shallow, mount  } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Card, Typography } from '@material-ui/core';

import CardUI from './CardUI';

Enzyme.configure({ adapter: new Adapter() })

describe('<CardUI />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = mount(<CardUI variant="1" name="IBOV" />);
    });

    it('should render card\'s description', () => {
        const cardName = 'Card name';
        wrapper.setProps({description: cardName });
        expect(wrapper.find('h2').text()).toBe(cardName);
    });
});