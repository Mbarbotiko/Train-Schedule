$(document).ready(function () {




    var config = {
        apiKey: "AIzaSyBb1aBpu_QJSDe3ve1z4NAkDDJyp1Y7jhA",
        authDomain: "trainschedule-1c628.firebaseapp.com",
        databaseURL: "https://trainschedule-1c628.firebaseio.com",
        projectId: "trainschedule-1c628",
        storageBucket: "",
        messagingSenderId: "562600325932"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    var words = "string of words user"
    function addingRows() {

        $('.table-dark>tbody:last').append("<td>" + words, "<td>" + words, "<td>" + words, "<td>" + words, "<td>" + words);


    };

    addingRows();

$('#submitBtn').one('click', function(event){
    event.preventDefault();
var trainName=$('#train-input').val().trim();
var destination=$('#destination-inpu').val().trim();
var firstTrain=$('#first-train-inpu').val().trim();
var frequency=$('#frequency-input').val().trim();


}


    // function to add user input into the table




});

