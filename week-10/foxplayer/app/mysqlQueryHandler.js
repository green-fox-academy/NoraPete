const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password.',
  database: 'foxplayer'
});

function mysqlQueryHandler(query, parameters = []) {
  return new Promise((resolve, reject) => {
    connection.query(query, parameters, function(err, res) {
      if(err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}


module.exports = mysqlQueryHandler;