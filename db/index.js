const Pool = require('pg').Pool

const pool = new Pool({
    user: 'lykjqxjwxtaxuv',
    password: '5464953f9b296f91238fe8e345c4ddc18522f0e8d719e1019d5ee0d7c3e314e4',
    host: 'ec2-54-73-22-169.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dapmgj37heh8uf',
    ssl: {
        rejectUnauthorized: false,
    }
})



module.exports = pool;
