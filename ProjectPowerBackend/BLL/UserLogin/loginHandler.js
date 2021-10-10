
var loginDbController = require('../../DAL/Common/loginDbController')
var userInfo = require('../Common/userGlobal')
var bcrypt = require('bcrypt');
var saltRounds = 10;

    async function createPassword() {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                db.saveUsernameAndPassword(username, hash);
            });
        });
    }

async function login(loginInfo) {

        if (authenticatePassword(loginInfo.username, loginInfo.password)) {
            return true;
        }
        else {
            console.log("Login failed");
            return false
        }
    }

    async function authenticatePassword(username, password) {
        var hashedPw = await loginDbController.getPassword(username)
        bcrypt.compare(hashedPw, password, function (error, result) {
            try {
                if (result) {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                console.log(error)
            }
        })
    }

    module.exports = {
        login: login,
        authenticatePassword: authenticatePassword,
        createPassword: createPassword
    }




