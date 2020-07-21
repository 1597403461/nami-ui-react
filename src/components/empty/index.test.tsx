import React from 'react';
import { render } from '@testing-library/react';
import Empty, { emptyProps } from './index';
import '@testing-library/jest-dom/extend-expect';

const defaultProps: emptyProps = {
    imgUrl: 'https://img.shurongdai.cn/group1/M00/00/13/wKgX2VyZ4SqATCZFAABd9w8Dj1E540.png',
    message: 'welcome to Empty component'
};

describe('test Empty component', () => {
    it('should render the Empty component', () => {
        const wrapper = render(<Empty {...defaultProps} />);
        const element = wrapper.getByText('welcome to Empty component');
        expect(element).toBeTruthy();
        expect(element.parentElement).toHaveClass('nami-empty');
        expect(element.previousElementSibling).toHaveAttribute(
            'src',
            'https://img.shurongdai.cn/group1/M00/00/13/wKgX2VyZ4SqATCZFAABd9w8Dj1E540.png'
        );
    });
});
