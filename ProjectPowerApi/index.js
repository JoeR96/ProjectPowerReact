var sql = require('mssql');

config = {
    server: "DESKTOP-72FH6UA",
    user: "test",
    password: "test",
    database: "ProjectPower",
    trustServerCertificate: true
}

async function getExercises(){
    try{
        let pool = await sql.connect(config);
        let exercises = await pool.request().query("SELECT * from ExerciseBase")
        return exercises.recordsets
    }
    catch(error){
        console.log(error);
    }
}

async function getExercise(name) {
    try {
        let pool = await sql.connect(config);
        let exercise = await pool.request().input('inputField1', sql.NVarChar, name).query("SELECT * from ExerciseBase Where Name = @inputField1 ");
        return exercise.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function postExercise(exercise){
        try{
        let pool = await sql.connect(config);
        let exercise = await pool.request()
            .input('Name', sql.NVarChar, exercise.name)
            .input('Template', sql.NVarChar, exercise.template)
            .input('TrainingMax', sql.Decimal, exercise.trainingMax)
            .execute('AddExerciseToDB');
        return exercise.recordsets;
        }
    catch(err){
        console.log(err);
    }
}

var x = 'Deadlift';

//postExercise(ex)
getExercises();
getExercise(x);
