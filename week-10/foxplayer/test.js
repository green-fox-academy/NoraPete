'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('./app/app');

test('test if tape workes', (t) => {
  t.equals(1, 1);
  t.end();
});

test('GET/playlists ep', (t) => {
  request(app)
    .get('/playlists')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 200);
      //t.same(res.body, [ { id: 1, playlist: 'favorites', sys: 1 } ]);
      t.end();
    });
});

test('POST/playlists ep without body', (t) => {
  request(app)
    .post('/playlists')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Please provide a playlist name' });
      t.end();
    });
});

test('POST/playlists ep with wrong body', (t) => {
  request(app)
    .post('/playlists')
    .send({ name: 'Something' })
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Please provide a playlist name' });
      t.end();
    });
});

test('POST/playlists ep with correct body', (t) => {
  request(app)
    .post('/playlists')
    .send({ playlist: 'Something' })
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 200);
      t.same(res.body, { message: 'Playlist created' });
      t.end();
    });
});

test('DELETE/playlists/id ep with wrong id', (t) => {
  request(app)
    .delete('/playlists/2')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'Could not find the requested playlist' });
      t.end();
    });
});

test('DELETE/playlists/id ep with favorites id', (t) => {
  request(app)
    .delete('/playlists/1')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 400);
      t.same(res.body, { error: 'You cannot delete this playlist' });
      t.end();
    });
});

