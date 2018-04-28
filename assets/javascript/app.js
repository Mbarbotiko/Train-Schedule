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

    $('#submitBtn').one('click', function (event) {
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
        var minutesAway = "I dont know";
        //I cannot figure out how to calculate how far away the train is based on how often it runs .

        function addingRows() {

            $('.table-dark>tbody:last').append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrain + "</td><td>" + minutesAway);


        };

        addingRows();

    });



});

