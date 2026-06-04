import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../App';

describe('App renders correctly', () => {
    test("heding renders correctly", () => {
        render(<App/>);
        const heading = screen.getByText("Hello");
        expect(heading).toBeInTheDocument();
    });
});