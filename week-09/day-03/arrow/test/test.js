'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('test tape', (t) => {
  t.equals(1, 1);
  t.end();
});

test('[GET] /yondu sets status 400 and sends error message in case of missing query', (t) => {
  request(app)
    .get('/yondu')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Please provide some numbers!' });
      t.end();
    });
});

test('[GET] /yondu sets status 400 and sends error message in case of deficient query', (t) => {
  request(app)
    .get('/yondu?distance=100.0')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Please provide some numbers!' });
      t.end();
    });
});

test('[GET] /yondu sets status 400 and sends error message if query provides strings', (t) => {
  request(app)
    .get('/yondu?distance=hundred&time=ten')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Please provide some numbers!' });
      t.end();
    });
});

test('[GET] /yondu sets status 400 and sends error message if time is 0', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=0')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Please provide some numbers!' });
      t.end();
    });
});

test('[GET] /yondu sets status 200 and sends proper message if everything is fine', (t) => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 200);
      t.same(res.body, { distance: 100.0, time: 10.0, speed: 10.0 });
      t.end();
    });
});