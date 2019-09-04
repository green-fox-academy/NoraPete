'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('test tape', (t) => {
  t.equals(1, 1);
  t.end();
});

test('[GET] /rocket test if it sends the data', (t) => {
  request(app)
    .get('/rocket')
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { caliber25: 0, caliber30: 0, caliber50: 0, shipstatus: 'empty', ready: false });
      t.end();
    });
});

test('[GET] /rocket/fill sends error and status 500 without query', (t) => {
  request(app)
    .get('/rocket/fill')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 500);
      t.same(res.body, { error: 'Please provide a valid amount!' });
      t.end();
    });
});

test('[GET] /rocket/fill sends error and status 500 with partial query', (t) => {
  request(app)
    .get('/rocket/fill?amount=300')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 500);
      t.same(res.body, { error: 'Please provide a valid caliber!' });
      t.end();
    });
});

test('[GET] /rocket/fill test if it sends proper data if query is fine', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.25&amount=12500')
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { received: '.25', amount: 12500, shipstatus: 'full', ready: true });
      t.end();
    });
});

test('[GET] /rocket test if values are updated', (t) => {
  request(app)
    .get('/rocket')
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, { caliber25: 12500, caliber30: 0, caliber50: 0, shipstatus: 'full', ready: true });
      t.end();
    });
});