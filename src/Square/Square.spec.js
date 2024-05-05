import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Square from './Square'

test('display square with value', () => {

    render(<Square value="abc" />)


    expect(screen.queryByTestId("square")).not.toBeNull();

    expect(screen.getByTestId("square").textContent).toBe("abc")
})

test('handles click', () => {
    const mockCallback = jest.fn(() => {});

    render(<Square onSquareClick={mockCallback} />)

    fireEvent.click(screen.getByTestId("square"))
    expect(mockCallback.mock.calls.length).toBe(1);
})