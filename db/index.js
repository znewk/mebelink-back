const Pool = require('pg').Pool

const pool = new Pool({
    user: 'omvadtkklmqiis',
    password: '2f1e36953183818cdc39cce33272328f5aa9c3a1699d793c524c806c915da8c9',
    host: 'ec2-54-75-177-251.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd4u28774s9vcqa',
    ssl: {
        rejectUnauthorized: false,
    }
})



module.exports = pool;
