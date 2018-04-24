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

    var words = "string of words user"
    function addingRows() {

        $('.table-dark>tbody:last').append("<td>" + words, "<td>" + words, "<td>" + words, "<td>" + words, "<td>" + words);


    };

    addingRows();

    $('#submitBtn').one('click', function (event) {
        event.preventDefault();
        var trainName = $('#train-input').val().trim();
        var destination = $('#destination-input').val().trim();
        var firstTrain = $('#first-train-input').val().trim();
        //find moment js info later for this entry
        var frequency = $('#frequency-input').val().trim();

        var newTrain ={
            name:trainName,
            place:destination,
            start:firstTrain,
            rate:frequency
        };

        database.ref().push(newTrain);
        
        console.log(newTrain.name);
        console.log(newTrain.place);
        console.log(newTrain.start);
        console.log(newTrain.rate);

        alert('you added a train');


    });


    // function to add user input into the table




});

