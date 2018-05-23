$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyBb1aBpu_QJSDe3ve1z4NAkDDJyp1Y7jhA",
        authDomain: "trainschedule-1c628.firebaseapp.com",
        databaseURL: "https://trainschedule-1c628.firebaseio.com",
        projectId: "trainschedule-1c628",
        storageBucket: "https//trainschedule-1c628.appspot.com",
        messagingSenderId: "562600325932"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $('#submitBtn').on('click', function (event) {
        event.preventDefault();
        var trainName = $('#train-input').val().trim();
        var destination = $('#destination-input').val().trim();
        var firstTrain = $('#first-train-input').val().trim();
        var frequency = $('#frequency-input').val().trim();

        var newTrain = {
            name: trainName,
            place: destination,
            start: firstTrain,
            rate: frequency

        };

        database.ref().push(newTrain);

        $("#train-input").val("");
        $("#destination-input").val("");
        $("#first-train-input").val("");
        $("#frequency-input").val("");
       
    
    });

    database.ref().on("child_added", function (childSnapshot, prevChildKey) {

        var trainName = childSnapshot.val().name;
        var destination = childSnapshot.val().place;
        var firstTrain = childSnapshot.val().start;
        var frequency = childSnapshot.val().rate;
        var timeArr = firstTrain.split(":");
        var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
        var maxMoment = moment.max(moment(), trainTime);
        var tMinutes;
        var tArrival;

        if (maxMoment === trainTime) {
            tArrival = trainTime.format("hh:mm A");
            tMinutes = trainTime.diff(moment(), "minutes");
        } else {
            var differenceTimes = moment().diff(trainTime, "minutes");
            var tRemainder = differenceTimes % frequency;
            tMinutes = frequency - tRemainder;
            tArrival = moment().add(tMinutes, "m").format("hh:mm A");
        }


        $('.table-dark>tbody:last').append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + tArrival + "</td><td>" + tMinutes);

        

    });
    


});


// need to add ability to submit form multiple times
// need to prevent user from leaving area's of form blank triggering a warning 
