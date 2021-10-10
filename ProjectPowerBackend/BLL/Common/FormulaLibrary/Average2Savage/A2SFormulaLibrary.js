

function ReturnExerciseWeight(TM, ExerciseIntensity) {
        var x = (TM * ExerciseIntensity);
        x = RoundToNearestMultiple(x, 2.5)
        return x;
    }

function ReturnNewTrainingMax(modifierValue) {
        trainingMax = trainingMax * (1 + modifierValue)
    }

function RoundToNearestMultiple(number, roundingValue){
        return roundingValue * Math.ceil(number / roundingValue)
    }

function returnWeight(exerciseList) {

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
    ReturnExerciseWeight: ReturnExerciseWeight,
    ReturnNewTrainingMax: ReturnNewTrainingMax,
    RoundToNearestMultiple: RoundToNearestMultiple,
    returnWeight
}



