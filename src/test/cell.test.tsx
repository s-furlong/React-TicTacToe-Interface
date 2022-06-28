import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Cell} from '../components/cell';

describe('cell', () => {
    const mockOnClick = jest.fn();

    it('displays X value in the indiviudal container', async () => {

        render(<Cell value="X" onClick={mockOnClick} />);

        expect(screen.getByTestId("singleCell").textContent).toBe("X")
    });

    it('accepts the onClick event on the indiviudal container', async () => {

        render(<Cell value="X" onClick={mockOnClick} />);

        fireEvent.click(screen.getByTestId("singleCell"));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    })

});