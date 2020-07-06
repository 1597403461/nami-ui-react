import React from 'react';
import { render } from '@testing-library/react';
import Icon, { IconProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const testProps: IconProps = {
    className: 'iconclass',
    type: '&#xe69a;'
};

describe('test icon component', () => {
    it('should render the correct component base on different props', () => {
        const wrapper = render(<Icon {...testProps} />);
        const element = wrapper.getByTestId('i');
        expect(element).toHaveTextContent('&#xe69a;');
        expect(element).toHaveClass('iconclass');
    });
});
