window.onload = init;

function init() {
    gatherInfo();
    var button = document.getElementById("reload");
    button.onclick = gatherInfo;
}

function gatherInfo() {
    var request = new XMLHttpRequest();
    var address =
        "http://student.cs.appstate.edu/crr/3440/OtherExamples/BooneCurrentConditions.php"
    request.onload = function() {
        if (request.status == 200) {
            show(request.responseText);
        }
    };
    request.open("GET", address);
    request.send(null);
}

function show(responseText) {
    var array = responseText.split("\n");
    var dateAndTime = array[0].split(" ");
    document.getElementById("date").innerHTML = dateAndTime[0];
    document.getElementById("time").innerHTML = dateAndTime[1];
    document.getElementById("temp").innerHTML = array[1];
    document.getElementById("high").innerHTML = array[2];
    document.getElementById("low").innerHTML = array[3];
    document.getElementById("humidity").innerHTML = array[4];
    document.getElementById("wind").innerHTML = array[5];
    console.log("Displayed.");
}