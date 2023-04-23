const pool = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'perntodo',
    password: 'password',
    port: 5432
});

module.exports = pool;