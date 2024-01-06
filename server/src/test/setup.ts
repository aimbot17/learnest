// src/test/setup.ts
import { server } from '../index';

beforeAll(() => {
  // Setup code, if any
});

afterAll(async () => {
  // Teardown code, close the server
  await server.close();
});
