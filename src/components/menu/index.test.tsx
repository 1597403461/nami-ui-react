import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react';
import Menu, { menuProps } from './menu';
import MenuItem from './item';

const testProps: menuProps = {
    defaultIndex: 0,
    onSelect: jest.fn(),
    className: 'nami-menu'
}

const generateMenu = (props: JSX.IntrinsicAttributes & menuProps & { children?: React.ReactNode; }) => {
    return <Menu {...props}>
        <MenuItem>active</MenuItem>
        <MenuItem disabled>link 2 disabled</MenuItem>
        <MenuItem>xyz</MenuItem>
    </Menu>
}
let wrapper: RenderResult, wrapper2: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test menu and menuItem component', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        menuElement = wrapper.getByTestId('test-menu')
        activeElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('link 2 disabled')
    })
    it('should render the correct component base on default props', () => {
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('nami-menu');
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(activeElement).toHaveClass('nami-menu-item is-active');
        expect(disabledElement).toHaveClass('nami-menu-item is-disabled');
    })

    it('click items should change active and call the right callback', () => {
        const thirdItem = wrapper.getByText('xyz')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })
})