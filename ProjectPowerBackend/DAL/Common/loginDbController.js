var db = require('./database')
var config = db.config
var sql = db.sql

async function updatePassword(username, newPassword) {
        let pool = await sql.connect(config);
        let updatedPassword = await pool.request()
            .input('UserName', sql.NVarChar, username)
            .input('Password', sql.NVarChar, newPassword)
            .execute('UpdatePassword');
        return updatedPassword;
    }

    async function saveUsernameAndPassword(username, password) {
        try {
  
            let pool = await sql.connect(config);
            let exercise = await pool.request()
                .input('UserName', sql.NVarChar, username)
                .input('Password', sql.NVarChar, password)
                .execute('AddUserAndPasswordToDb');
            return exercise.recordsets;
        }
        catch (err) {
            console.log(err);
        }
    }

    async function getPassword(username) {

        let pool = await sql.connect(config);
        let password = await pool.request()
            .input('inputField1', sql.NVarChar, username)
            .query("SELECT Password from UserAccounts WHERE UserName = @inputField1 ")
        return password;

    }

async function getUserId(username) {
        let pool = await sql.connect(config);
        let userId = await pool.request()
            .input('inputField1', sql.NVarChar, username)
            .query('SELECT UserId FROM UserAccounts WHERE UserName = @inputField1');
        return userId.recordsets;
    }


    async function  getCurrentUserWeekAndDay(userId) {
        try {
            let pool = await sql.connect(config);
            let weekAndDay = await pool.request()
                .input('inputField1', sql.Int, parseInt(userId))
                .query('SELECT CurrentWeek,CurrentDay FROM UserGlobalInfo WHERE UserId = @inputField1');
            return weekAndDay;
        }
        catch (error) {
            console.log(error);
        }
    }

module.exports = {
    getCurrentUserWeekAndDay: getCurrentUserWeekAndDay,
    getPassword: getPassword,
    getUserId: getUserId,
    saveUsernameAndPassword: saveUsernameAndPassword,
    updatePassword: updatePassword

}
