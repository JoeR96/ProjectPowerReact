var db = require('../../DAL/database')
var A2sFl = require('../FormulaLibrary/Average 2 Savage/A2SFormulaLibrary')
const bcrypt = require('bcrypt')
const e = require('express');
const { json } = require('express');
const saltRounds = 10
global.activeAccount = "";
global.currentWeek = 1;
global.currentDay = 1;

 function createPassword()
 {
     bcrypt.genSalt(saltRounds, function (err, salt) {
         bcrypt.hash(password, salt, function (err, hash) {
             db.saveUsernameAndPassword(username, hash);
         });
     });
 }

 async function login(loginInfo)
 {
     if(authenticatePassword(loginInfo.username,loginInfo.password)){
         setActiveAccount(loginInfo.username)
        return true;
    }
    else{
         console.log("Login failed");
        return false
    }
 }

async function authenticatePassword(username, password)
{
    var hashedPw = await db.getPassword(username)
    bcrypt.compare(hashedPw, password, function (err, result) {
        try {
            if(result){
                return true;
            }
            else{
                return false;
            }
        }
        catch (err) {
            throw (err);
        }
    })
}

async function setActiveAccount(username) {
    var acc = await db.getUserId(username);
    var weekAndDay = await db.getCurrentUserWeekAndDay(activeAccount)
    
    activeAccount = acc[0][0].UserId;
    currentWeek = weekAndDay.recordset[0].CurrentWeek;
    currentDay = weekAndDay.recordset[0].CurrentDay;

    var x = await db.returnWeeklyWorkout(activeAccount,currentWeek)

}


module.exports = {
    activeAccount: this.activeAccount,
    currentWeek: this.currentWeek,
    currentDay: this.currentDay,
    login:login
}


