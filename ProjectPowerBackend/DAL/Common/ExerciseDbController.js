var db = require('./database')
var config = db.config
var sql = db.sql

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


