var sql = require('mssql');

        config = {
            server: "DESKTOP-72FH6UA",
            user: "test",
            password: "test",
            database: "ProjectPower",
            trustServerCertificate: true
        }

module.exports = {
    sql: sql,
    config: config
}