import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../src/index';

describe('GET /health', () => {
  it('returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});
