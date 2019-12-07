import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
import '@testing-library/jest-dom/extend-expect'


test('displays if it is open or closed and locked or unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/locked/i) || getByText(/unlocked/i);
    getByText(/open/i) || getByText(/closed/i);
});


test('display renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

test('displays "closed" if closed prop is true.', () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
})

test('default setting is unlocked open.', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
    getByText(/open/i);
});

test('uses "red-led" if locked.', () => {
    const { queryByText } = render(<Display locked={true} />);
    const locked = queryByText(/locked/i);
    expect(locked).toHaveClass("red-led");
});

test('uses "green-led" if open.', () => {
    const { queryByText } = render(<Display closed={false} />);
    const open = queryByText(/open/i);
    expect(open).toHaveClass('green-led');
});

test('displays "closed" if closed prop is true.', () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
});

test('uses "red-led" if closed.', () => {
    const { queryByText } = render(<Display closed={true} />);
    const closed = queryByText(/closed/i);
    expect(closed).toHaveClass("red-led");
});

test('displays "open if closed prop is false.', () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
});