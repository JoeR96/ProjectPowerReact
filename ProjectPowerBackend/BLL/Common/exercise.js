var A2sFl = require('../FormulaLibrary/Average 2 Savage/A2SFormulaLibrary');

const { activeAccount, currentWeek } = require('../UserLogin/loginHandler');
//get a list of exercises


async function returnWeight(exerciseList) {
    
    var workingWeight;
    var liftViewInfo;
    var exerciseObject = [];

    for (let i = 0; i < exerciseList.recordset.length; i++) {
        workingWeight = A2sFl.ReturnExerciseWeight(exerciseList.recordset[i].TrainingMax, exerciseList.recordset[i].Intensity);
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


module.exports = {
    returnWeight: returnWeight
}