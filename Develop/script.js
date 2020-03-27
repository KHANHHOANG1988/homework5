$(document).ready(function () {
    var currentDay = moment().format('LLL');
    $("#currentDay").text(currentDay);
})


    var currentTime = parseInt(moment().format("k"))
    var times = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    var future = false;
    for (var i = 0; i < times.length; i++)
     {
        var currentId = "#" + times[i];
        // check if its before 8AM
        if (currentTime < times[i]) {
            $(currentId).addClass("future");
        }
        // check if times[i] is right now
        else if (times[i] == currentTime) {
            $(currentId).addClass("present");
            // further iterations should set future class
            future = true;
        }
        else if (future) {
            $(currentId).addClass("future");
        }
        else {
            $(currentId).addClass("past");
        }
    }



