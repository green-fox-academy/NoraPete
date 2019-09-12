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

// test('DELETE/playlists/id ep with valid id', (t) => {
//   request(app)
//     .delete('/playlists/15')
//     .end((err, res) => {
//       if (err) throw err;
//       t.equals(res.status, 200);
//       t.same(res.body, { message: 'Playlist is deleted' });
//       t.end();
//     });
// });

test('GET/playlist-tracks ep', (t) => {
  request(app)
    .get('/playlist-tracks')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 200);
      t.same(res.body, [
        {
            "id": 1,
            "title": "That Was Just Your Life",
            "artist": "MetallicA",
            "duration": 428,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\01 - That Was Just Your Life.mp3"
        },
        {
            "id": 2,
            "title": "The End Of The Line",
            "artist": "MetallicA",
            "duration": 472,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\02 - The End Of The Line.mp3"
        },
        {
            "id": 3,
            "title": "Broken, Beat & Scarred",
            "artist": "MetallicA",
            "duration": 386,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\03 - Broken, Beat & Scarred.mp3"
        },
        {
            "id": 4,
            "title": "The Day That Never Comes",
            "artist": "MetallicA",
            "duration": 476,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\04 - The Day That Never Comes.mp3"
        },
        {
            "id": 5,
            "title": "All Nightmare Long",
            "artist": "MetallicA",
            "duration": 478,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\05 - All Nightmare Long.mp3"
        },
        {
            "id": 6,
            "title": "Cyanide",
            "artist": "MetallicA",
            "duration": 400,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\06 - Cyanide.mp3"
        },
        {
            "id": 7,
            "title": "The Unforgiven III",
            "artist": "MetallicA",
            "duration": 467,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\07 - The Unforgiven III.mp3"
        },
        {
            "id": 8,
            "title": "The Judas Kiss",
            "artist": "MetallicA",
            "duration": 481,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\08 - The Judas Kiss.mp3"
        },
        {
            "id": 9,
            "title": "Suicide & Redemption",
            "artist": "MetallicA",
            "duration": 598,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\09 - Suicide & Redemption.mp3"
        },
        {
            "id": 10,
            "title": "My Apocalypse",
            "artist": "MetallicA",
            "duration": 301,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\10 - My Apocalypse.mp3"
        },
        {
            "id": 11,
            "title": "Purple Drift",
            "artist": "Organoid",
            "duration": 209,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Organoid_-_09_-_Purple_Drift.mp3"
        }
    ]);
      t.end();
    });
});

test('GET/playlist-tracks/id ep', (t) => {
  request(app)
    .get('/playlist-tracks/1')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 200);
      t.same(res.body, [
        {
            "id": 5,
            "title": "All Nightmare Long",
            "artist": "MetallicA",
            "duration": 478,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\05 - All Nightmare Long.mp3"
        },
        {
            "id": 4,
            "title": "The Day That Never Comes",
            "artist": "MetallicA",
            "duration": 476,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\04 - The Day That Never Comes.mp3"
        },
        {
            "id": 7,
            "title": "The Unforgiven III",
            "artist": "MetallicA",
            "duration": 467,
            "path": "C:\\Users\\Nora\\greenfox\\NoraPete\\week-10\\foxplayer\\static\\music\\Metallica - 2008 - Death Magnetic\\07 - The Unforgiven III.mp3"
        }
    ]);
      t.end();
    });
  });

test('POST/playlist-tracks/playlist_id/track_id ep without ids', (t) => {
  request(app)
    .post('/playlist-tracks')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 404);
      t.end();
    });
});

test('POST/playlist-tracks/playlist_id/track_id ep missing one id', (t) => {
  request(app)
    .post('/playlist-tracks/1')
    .end((err, res) => {
      if (err) throw err;
      t.equals(res.status, 404);
      t.end();
    });
});

// test('POST/playlist-tracks/playlist_id/track_id ep with wrong playlist id', (t) => {
//   request(app)
//     .post('/playlist-tracks/3/2')
//     .end((err, res) => {
//       if (err) throw err;
//       t.equals(res.status, 400);
//       t.same(res.body, { error: 'You cannot delete this playlist' });
//       t.end();
//     });
// });