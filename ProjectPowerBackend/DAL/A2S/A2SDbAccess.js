/// <reference path="../../../projectpower/src/components/login/loginform.js" />
var db = require('../Common/database')
var userGlobal = require('../../BLL/Common/userGlobal');
const session = require('express-session');
const { getCurrentUserWeekAndDay } = require('../Common/loginDbController');
var config = db.config
var sql = db.sql
var A2sFl = require('../../BLL/Common/FormulaLibrary/Average2Savage/A2SFormulaLibrary')

let A2SHTTDefaultData = {  
    HypertrophyBlock: {
        PrimaryLift: {
            amrapRepTarget: [10, 8, 6, 9, 7, 5],
            repsPerSet: [5, 4, 3, 5, 4, 3],
            intensity: [0.70, 0.75, 0.80, 0.725, 0.775, 0.825],
            sets: 5
        },
        AuxillaryLift: {
            amrapRepTarget: [14, 12, 10, 13, 11, 9],
            repsPerSet: [7, 6, 5, 7, 6, 5],
            intensity: [0.60, 0.65, 0.70, 0.625, 0.675, 0.725],
            sets: 3
        }
    },
    StrengthBlock: {
        PrimaryLift: {
            amrapRepTarget: [8, 6, 4, 7, 5, 3],
            repsPerSet: [4, 3, 2, 4, 3, 2],
            intensity: [0.75, 0.80, 0.85, 0.775, 0.825, 0.875],
            sets: 5
        },
        AuxillaryLift: {
            amrapRepTarget: [12, 10, 8, 11, 9, 7],
            repsPerSet: [6, 5, 4, 6, 5, 4],
            intensity: [0.65, 0.70, 0.75, 0.675, 0.725, 0.775],
            sets: 3
        }
    },
    PeakingBlock: {
        PrimaryLift: {
            amrapRepTarget: [6, 4, 2, 4, 2, 2],
            repsPerSet: [3, 2, 1, 2, 1, 1],
            intensity: [0.80, 0.85, 0.90, 0.85, 0.90, 0.95],
            sets: 5
        },
        AuxillaryLift: {
            amrapRepTarget: [10, 8, 6, 8, 3, 2],
            repsPerSet: [5, 4, 3, 4, 6, 4],
            intensity: [0.70, 0.75, 0.80, 0.75, 0.80, 0.85],
            sets: 3
        }
    }   
}

let activeBlock = 0;
let blocks = [A2SHTTDefaultData.HypertrophyBlock, A2SHTTDefaultData.StrengthBlock, A2SHTTDefaultData.PeakingBlock]

function returnWeight(exerciseList) {

    var workingWeight;
    var liftViewInfo;
    var exerciseObject = [];

    for (let i = 0; i < exerciseList.recordset.length; i++) {
        workingWeight = A2sFl.ReturnExerciseWeight(exerciseList.recordset[i].TrainingMax, exerciseList.recordset[i].Intensity);
        liftViewInfo = {
            ExerciseName: exerciseList.recordset[i].ExerciseName,
            WorkingWeight: workingWeight + " x " + exerciseList.recordset[i].RepsPerSet,
            AmrapTarget: exerciseList.recordset[i].AmrapCount,
            Sets: exerciseList.recordset[i].Sets
        };

        exerciseObject.push(liftViewInfo)
    }

    return exerciseObject;
}

async function postAmrapResult(amrapResult, userid) {
        var currentWeekAndDay = await getCurrentUserWeekAndDay(userid)
        let pool = await sql.connect(config);
        await pool.request()
            .input('AmrapResult', sql.Int, parseInt(amrapResult.AmrapCount))
            .input('ExerciseName', sql.NVarChar, amrapResult.ExerciseName)
            .input('Week', sql.Int, currentWeekAndDay.recordset[0].CurrentWeek)
            .input('UserId', sql.Int, userid)
            .execute('InsertA2SAmrapResult');
}

async function returnWeekIntensity(exerciseName, currentWeek) {
        try {

            let pool = await sql.connect(config);
            let weekIntensityTm = await pool.request()
                .input('Week', sql.Int, currentWeek)
                .input('ExerciseName', sql.NVarChar, exerciseName)
                .execute('ReturnWeekIntensity');
            return weekIntensityTm;
        }
        catch (err) {
            console.log(err);
        }
    }

async function returnWeight(exerciseList) {

        var workingWeight;
        var liftViewInfo;
        var exerciseObject = [];

        for (let i = 0; i < exerciseList.recordset.length; i++) {
            workingWeight = A2sFl.ReturnExerciseWeight(exerciseList.recordset[i].TrainingMax, exerciseList.recordset[i].Intensity);
            console.log(typeof (exerciseList.recordset[i].Intensity))
            liftViewInfo = {
                ExerciseName: exerciseList.recordset[i].ExerciseName,
                WorkingWeight: workingWeight + " x " + exerciseList.recordset[i].RepsPerSet,
                AmrapTarget: exerciseList.recordset[i].AmrapRepTarget,
                Sets: exerciseList.recordset[i].Sets
            };

            exerciseObject.push(liftViewInfo)
        }

        return exerciseObject;
    }

async function returnWeeklyWorkout(userid) {
    
        var currentWeekAndDay = await getCurrentUserWeekAndDay(userid)
        try {
            let pool = await sql.connect(config);
            let weeklyWorkout = await pool.request()
                .input('CurrentWeek', sql.Int, currentWeekAndDay.recordset[0].CurrentWeek)
                .input('UserId', sql.Int, userid)
                .input('Day', sql.Int, currentWeekAndDay.recordset[0].CurrentDay)
                .execute('GetWorkoutExercises');

            console.log(weeklyWorkout)
            var transformedList = returnWeight(weeklyWorkout);
            console.log(transformedList)
            return transformedList;
        }
        catch (err) {
            console.log(err);
        }
    }

async function scaffoldHyperTrophyTemplate(exercise,userid) {
    for (let i = 0; i < A2SHTTDefaultData.HypertrophyBlock.PrimaryLift.amrapRepTarget.length; i++) {
        let currentBlock = {}
       
        try {
            if (exercise.auxiliaryLift == true) {
                currentBlock = blocks[activeBlock].AuxillaryLift
            }
            else {
                currentBlock = blocks[activeBlock].PrimaryLift
            }
            var n = currentBlock.intensity[i].toFixed(3);
            console.log("BLOCK" + currentBlock.intensity[i])
            let pool = await sql.connect(config);
            await pool.request()
                .input('Name', sql.NVarChar(50), exercise.exerciseName)
                .input('Block', sql.NVarChar(50), exercise.block)
                .input('TrainingMax', sql.Decimal(18, 3), exercise.trainingMax)
                .input('AmrapRepTarget', sql.Int, currentBlock.amrapRepTarget[i])
                .input('Week', sql.Int, i + 1)
                .input('Auxillary', sql.Bit, exercise.auxillaryLift ? 1 : 0)
                .input('Intensity', sql.Decimal(18, 3), currentBlock.intensity[i])
                .input('RepsPerSet', sql.Int, currentBlock.repsPerSet[i])
                .input('UserID', sql.Int, userid)
                .input('Sets', sql.Int, currentBlock.sets)
                .execute('ScaffoldA2SHypertrophyBlock');
            console.log(currentBlock.intensity[i])
            console.log(typeof (currentBlock.intensity[i]))
            
        }
        catch (err) {
            console.log(err);
        }
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



    



    async function returnWeeklyWorkout(userid) {

        var currentWeekAndDay = await getCurrentUserWeekAndDay(userid)
        try {
            let pool = await sql.connect(config);
            let weeklyWorkout = await pool.request()
                .input('CurrentWeek', sql.Int, currentWeekAndDay.recordset[0].CurrentWeek)
                .input('UserId', sql.Int, userid)
                .input('Day', sql.Int, currentWeekAndDay.recordset[0].CurrentDay)
                .execute('GetWorkoutExercises');

            console.log(weeklyWorkout)
            var transformedList = returnWeight(weeklyWorkout);
            console.log(session.userid)
            return transformedList;
        }
        catch (err) {
            console.log(err);
        }
    }

module.exports = {
    returnWeeklyWorkout: returnWeeklyWorkout,
    returnWeekIntensity: returnWeekIntensity,
    postAmrapResult: postAmrapResult,
    returnWeight: returnWeight,
    scaffoldHyperTrophyTemplate: scaffoldHyperTrophyTemplate
}
