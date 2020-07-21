import React from 'react';
import { render } from '@testing-library/react';
import FixedButtonContainer, { FixedButtonContainerProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps: FixedButtonContainerProps = {
    position: 'absolute',
    className: 'fix-cls'
};

describe('test FixedButtonContainer component', () => {
    it('should render the default FixedButtonContainer', () => {
        const wrapper = render(<FixedButtonContainer {...defaultProps} />);
        const element = wrapper.getByTestId('fixedContainer');
        expect(element).toBeTruthy();
        expect(element).toHaveClass('fix-cls');
        expect(element).toHaveAttribute('data-position', 'absolute');
    });
});
