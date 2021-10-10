
    currentUserId = 0
    currentUserWeek = 0
    currentUserDay = 0


    function setUserId(userId) {
        currentUserId = parseInt(userId);
console.log(currentUserDay)
}

function setUserWeek(userWeek) {
    currentUserWeek = parseInt(userWeek)
    console.log(currentUserWeek)
}

function setUserDay(userDay) {
    currentUserDay = parseInt(userDay)
    console.log(currentUserDay)
}




module.exports = {
    setUserDay: setUserDay,
    setUserWeek: setUserWeek,
    setUserId: setUserId,
    currentUserId: currentUserId,
    currentUserWeek: currentUserWeek,
    currentUserDay: currentUserDay
}


