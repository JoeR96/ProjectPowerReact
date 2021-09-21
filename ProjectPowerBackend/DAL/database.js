var sql = require('mssql');
var EXE = require('../BLL/Common/exercise')

config = {
    server: "DESKTOP-72FH6UA",
    user: "test",
    password: "test",
    database: "ProjectPower",
    trustServerCertificate: true
}

async function updatePassword(username,newPassword){
    let pool = await sql.connect(config);
    let updatedPassword = await pool.request()
        .input('UserName', sql.NVarChar, username)
        .input('Password', sql.NVarChar, newPassword)
        .execute('UpdatePassword');
    return updatedPassword;
}

async function saveUsernameAndPassword(username,password) {
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
async function getPassword(username){
    
 let pool = await sql.connect(config);
 let password = await pool.request()
     .input('inputField1', sql.NVarChar, username)
     .query("SELECT Password from UserAccounts WHERE UserName = @inputField1 ")
 return password;
 
}

async function getExercises() {
    try {
        let pool = await sql.connect(config);
        let exercises = await pool.request()
        .query("SELECT * from ExerciseBase")

        return exercises.recordsets
    }
    catch (error) {
        console.log(error);
    }
}

async function getExercise(name) {
    try {
        let pool = await sql.connect(config);
        let exercise = await pool.request()
        .input('inputField1', sql.NVarChar, name)
        .query("SELECT * from ExerciseBase Where Name = @inputField1 ");
 
        return exercise.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function postExercise(exe) {
    try {
        let pool = await sql.connect(config);
        let exercise = await pool.request()
            .input('Name', sql.NVarChar, exe.name)
            .input('Template', sql.NVarChar, exe.template)
            .input('TrainingMax', sql.Decimal, exe.trainingMax)
            .execute('AddExerciseToDB');

        return exercise.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function returnWeekIntensity(exerciseName, currentWeek){
    try{
        let pool = await sql.connect(config);
        let weekIntensityTm = await pool.request()
            .input('Week', sql.Int, currentWeek)
            .input('ExerciseName', sql.NVarChar, exerciseName)
            .execute('ReturnWeekIntensity');
            return weekIntensityTm;
    }
    catch(err){
        console.log(err);
    }
}

async function returnWeeklyWorkout(userid, currentWeek) {
    try {
        let pool = await sql.connect(config);
        let weeklyWorkout = await pool.request()
            .input('CurrentWeek', sql.Int, currentWeek)
            .input('UserId', sql.NVarChar, userid)
            .execute('GetWorkoutExercises');

        
            var transformedList = await EXE.returnWeight(weeklyWorkout);
        
        return transformedList;
    }
    catch (err) {
        console.log(err);
    }
}

async function getExerciseTemplate(name) {
    try {
        let pool = await sql.connect(config);
        let exercise = await pool.request().input('inputField1', sql.NVarChar, name)
        .query("SELECT * FROM A2SHyperTrophyTemplate WHERE Week = 1");

        return exercise.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getCurrentUserWeekAndDay(userId){
    try{
        let pool = await sql.connect(config);
        let weekAndDay = await pool.request()
        .input('inputField1', sql.Int, userId)
        .query('SELECT CurrentWeek,CurrentDay FROM UserGlobalInfo WHERE UserId = @inputField1');
        return weekAndDay;
    }
    catch(err){
        throw(err);
    }
}

async function getUserId(username){
    let pool = await sql.connect(config);
    let userId = await pool.request()
    .input('inputField1', sql.NVarChar, username)
    .query('SELECT UserId FROM UserAccounts WHERE UserName = @inputField1');
    return userId.recordsets;
}

module.exports = {
    getCurrentUserWeekAndDay: getCurrentUserWeekAndDay,
    getExercises: getExercises,
    getExercise: getExercise,
    postExercise: postExercise,
    getExerciseTemplate: getExerciseTemplate,
    updatePassword: updatePassword,
    saveUsernameAndPassword: saveUsernameAndPassword,
    getPassword: getPassword,
    returnWeekIntensity: returnWeekIntensity,
    getUserId: getUserId,
    returnWeeklyWorkout: returnWeeklyWorkout
}
