let squatTm = 100.00;
let squatWeekIntensity = [0.70, 0.75, 0.80, 0.725, 0.775, 0.825]
let squatModifier = [-0.05, -0.02, 0.00, 0.05, 0.01, 0.015, 0.02, 0.03]

var trainingMax = squatTm;
var exercises = [];

for (let i = 0; i < squatWeekIntensity.length; i++) {

    weight = ReturnExerciseWeight(trainingMax, squatWeekIntensity[i]);

    exercises[i] = {
        name: "Squat",
        exerciseWeight: weight,
        trainMax: trainingMax
    };

    ReturnNewTrainingMax(0.03); 
}

function ReturnExerciseWeight(TM,ExerciseIntensity){
    var x = (TM*ExerciseIntensity);
    x = RoundToNearestMultiple(x,2.5)
    return x;
}

function ReturnNewTrainingMax(modifierValue){
    trainingMax = trainingMax * (1 + modifierValue)
}

function RoundToNearestMultiple(number,roundingValue){
    return roundingValue * Math.ceil(number / roundingValue)
}


module.exports = {
    ReturnExerciseWeight: ReturnExerciseWeight
}

