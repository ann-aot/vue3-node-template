import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../src/index';

describe('POST /api/echo', () => {
  it('echoes message', async () => {
    const res = await request(app).post('/api/echo').send({ message: 'hi' });
    expect(res.status).toBe(200);
    expect(res.body.echo).toBe('hi');
  });

  it('validates message', async () => {
    const res = await request(app).post('/api/echo').send({});
    expect(res.status).toBe(400);
  });
});
