const Pool = require('pg').Pool

const pool = new Pool({
    user: 'dgwnzzaqlzutze',
    password: '8ef6e65a38e23a8a5fc79c89c2a4d546a1e663726f7215c61215d69f16d8e57a',
    host: 'ec2-3-248-141-201.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd8on5vsrdiaofr',
    ssl: {
        rejectUnauthorized: false,
    }
})



module.exports = pool;
