'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('test tape', (t) => {
  t.equals(1, 1);
  t.end();
});

test('[GET] /groot status is 404 without query', (t) => {
  request(app)
    .get('/groot')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 404);
      t.end();
    })
});

test('[GET] /groot  sends error message without query', (t) => {
  request(app)
    .get('/groot')
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { error: 'I am Groot!' });
      t.end();
    })
});

test('[GET] /groot status is 200 with query', (t) => {
  request(app)
    .get('/groot?message=hello')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 200);
      t.end();
    })
});

test('[GET] /groot sends proper response if query is provided', (t) => {
  request(app)
    .get('/groot?message=hello')
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { received: 'hello', translated: 'I am Groot!' });
      t.end();
    })
});
