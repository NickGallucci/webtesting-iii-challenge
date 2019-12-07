// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('control renders correctly.', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});


test('gate can be toggled closed on click.', () => {
    const toggleToClose = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleToClose} closed={false} />);

    const closeButton = getByText(/close/i);
    fireEvent.click(closeButton);
    expect(toggleToClose).toHaveBeenCalled();
})


test('gate cannot be closed when locked.', () => {
    const toggleToClose = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleToClose} closed={false} locked={true} />)

    const closeButton = getByText(/close/i);
    fireEvent.click(closeButton);
    expect(toggleToClose).not.toHaveBeenCalled();
})


test('gate cannot be opened when locked.', () => {
    const toggleToOpen = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleToOpen} closed={false} locked={true} />);

    const openButton = getByText(/close/i);
    fireEvent.click(openButton);
    expect(toggleToOpen).not.toHaveBeenCalled();
})


test('gate can be toggled open on click.', () => {
    const toggleToOpen = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleToOpen} closed={true} />);

    const openButton = getByText(/open/i);
    fireEvent.click(openButton);
    expect(toggleToOpen).toHaveBeenCalled();
})

//cant think of anymore currently.