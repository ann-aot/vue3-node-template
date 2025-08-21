import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';

// Stub global fetch during tests to avoid real network calls
const mockFetch = vi.fn(async () => ({
	ok: true,
	json: async () => ({ status: 'ok' }),
})) as unknown as typeof fetch;

vi.stubGlobal('fetch', mockFetch);

afterEach(() => {
	// Reset mock between tests
	(mockFetch as unknown as { mockClear: () => void }).mockClear();
});
