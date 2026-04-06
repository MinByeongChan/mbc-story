import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { handlers } from './src/mocks/handler';
import { setupServer } from 'msw/node';

// export const server = setupServer(...handlers);

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
