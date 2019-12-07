import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

test('dashboard renders correctly.', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});


test("gate default is unlocked and open", () => {
    const dashboard = render(<Dashboard/>);
    const lockBtn = dashboard.getByText(/locK gate/i);
    const openBtn = dashboard.getByText(/close gate/i);
    expect(lockBtn.disabled).toBe(true);
    expect(openBtn.disabled).toBe(false);
});


//tried like 5 other tests here and all failed...