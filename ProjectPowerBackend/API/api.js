var Db = require('../DAL/Common/database')
var EXE = require('../BLL/Common/exercise');
var uam = require('../BLL/UserLogin/loginHandler')
var A2SDBAccess = require('../DAL/A2S/A2SDbAccess')
const loginDbController = require('../DAL/Common/loginDbController');

var express = require('express');
var cookieParser = require("cookie-parser");
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var session;
var app = express();
var router = express.Router();
var port = process.env.PORT || 8090;
var oneDay = 1000 * 60 * 60 * 24;

app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
    secret: 'cookie',
    resave: false,
    cookie: { maxAge: 30000 },
    saveUninitialized: false,
}));
app.use('/api', router);

router.use((request, response, next) => {

    next();
});

router.route('/exercise/:id').get((request, response) => {
    Db.getExerciseTemplate(request.params.id, request.session.userid).then((data) => {
        response.json(data);
    })
})

router.route('/exerciseHtt/:exerciseName/:trainingMax').get((request, response) => {
    Db.getExerciseWeight(request.params.exerciseName, request.parms.trainingMax).then((data) => {
        response.json(data);
    })
})



router.route('/exercises').get((request, response) => {
    Db.getExercises().then((data) => {
        response.json(data);
    })
})


router.route('/getExerciseView').get((request, response) => {
    A2SDBAccess.returnWeeklyWorkout(session.userid).then((data) => {
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
 
        A2SDBAccess.postAmrapResult(amrapResult, session.userid).then(data => {
            response.status(201).json(data);
        })
    })

router.route('/scaffoldExercise')
    .post((request, response) => {
        let exerciseInfo = { ...request.body }
        A2SDBAccess.scaffoldHyperTrophyTemplate(exerciseInfo,session.userid).then(data => {
            response.status(201).json(data);
        })
    })

router.route('/login')
    .post(async (request, response) => {
        let userAndPass = { ...request.body }
    if (uam.login(userAndPass)) {
        var uid = await loginDbController.getUserId(userAndPass.data.username)
        session = request.session;
        session.userid = uid[0][0].UserId
    }
})

module.exports = {
    session: session
}