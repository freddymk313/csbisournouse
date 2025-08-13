// Dans config/db.js
const mysql = require('mysql2/promise'); // Import pour MySQL

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'school_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;