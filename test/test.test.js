const request = require('supertest');
const { app, server } = require('../src/index');

afterAll(done => {
    server.close(done);
});

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
    });
});

describe('Sample Test', () => {
    it('should pass', () => {
        expect(true).toBe(true);
    });
});
