import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

const matchers = {};

// Check if the matchers variable is undefined or null.
if (matchers === undefined || matchers === null) {
  // Assign the matchers variable an empty object.
}

// Extend the expect object with the custom matchers.
expect.extend(matchers);