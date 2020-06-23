import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SlideleftPanel, { slideleftPanelProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const testProps: slideleftPanelProps = {
    visible: true,
    onClose: jest.fn(),
    children: 123
};

const disableMaskProps: slideleftPanelProps = {
    visible: true,
    onClose: jest.fn(),
    children: 456,
    maskClosable: false
};

describe('test SlideleftPanel component', () => {
    it('should render the correct testProps SlideleftPanel', () => {
        const { getByTestId, getByText, rerender, unmount } = render(
            <SlideleftPanel {...testProps} />
        );
        const maskElement = getByTestId('mask');
        expect(getByText('123')).toBeTruthy();
        fireEvent.click(maskElement);
        expect(testProps.onClose).toBeCalledTimes(1);
        rerender(<SlideleftPanel {...disableMaskProps} />);
        expect(getByText('456')).toBeTruthy();
        expect(disableMaskProps.onClose).not.toHaveBeenCalled();
        unmount();
    });
});
