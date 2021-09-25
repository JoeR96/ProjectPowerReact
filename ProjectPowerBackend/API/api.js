var Db = require('../DAL/database')
var EXE = require('../BLL/Common/exercise');
var express = require('express');
var bodyParser = require('body-parser');
var uam = require('../BLL/UserLogin/loginHandler');
var cors = require('cors');
const { activeAccount, currentWeek } = require('../BLL/UserLogin/loginHandler');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request, response, next) => {

    next();
});

router.route('/exercise/:id').get((request, response) => {
    Db.getExerciseTemplate(request.params.id).then((data) => {
        response.json(data);
    })
})

router.route('/exerciseHtt/:exerciseName/:trainingMax').get((request, response) => {
    Db.getExerciseWeight(request.params.exerciseName, request.parms.trainingMax).then((data) => {
        response.json(data);
    })
})

router.route('/getExerciseTemplate/:id').get((request, response) => {
    Db.getExerciseTemplate(request.params.id).then((data) => {
        response.json(data[0]);
    })
})

router.route('/exercises').get((request, response) => {
    Db.getExercises().then((data) => {
        response.json(data);
    })
})

router.route('/getExerciseView').get((request, response) => {
    Db.returnWeeklyWorkout(0, 1).then((data) => {
        response.json(data)
    })
});
    

router.route('/exercise/:name').get((request, response) => {
    Exercise.returnWeight(request.params.name).then((data) => {
        response.json(data);
    })
})

router.route('/newexercise')
.post((request, response) => {
    let exercise = { ...request.body }
    Db.postExercise(exercise).then(data => {
        response.status(201).json(data);
    })
})

router.route('/postAmrapResult')
    .post((request, response) => {
        let amrapResult = { ...request.body }
        Db.postAmrapResult(amrapResult).then(data => {
            response.status(201).json(data);
        })
    })

router.route('/login')
.post((request, response) => {
    let userAndPass = { ...request.body }
    uam.login(userAndPass).then(data => {
        response.status(201).json(data);
    })
})


var port = process.env.PORT || 8090;
app.listen(port);

