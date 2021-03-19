const Pool = require("pg").Pool;

const pool = new Pool({
    user:"postgres",
    password:"Shazam12",
    host:"localhost",
    port:5432,
    database:"pernreact"

});

module.exports = pool;