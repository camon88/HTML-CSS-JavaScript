window.onload = init;

function init(){

    var button = document.getElementById("createButton");
    button.onclick = createHeatIndexTable;

}

function createHeatIndexTable(){

    var minimumTemp = parseInt(document.getElementById("minimumTemp").value);
    var maximumTemp = parseInt(document.getElementById("maximumTemp").value);
    var minRelHum = parseInt(document.getElementById("minRelHum").value);
    var maxRelHum = parseInt(document.getElementById("maxRelHum").value);

    var table = document.createElement("table");
    table.id = "heatIndexTable";

    var startRow = document.createElement("tr");
    var degF = document.createElement("td");
    degF.innerHTML += "&deg;F";
    startRow.appendChild(degF);
    
    for(var i = maxRelHum; i >= minRelHum; i-=10){
    var td = document.createElement("td");
    td.innerHTML += i + "%";
    startRow.appendChild(td);
    }

    table.appendChild(startRow);

    for(var j = minimumTemp; j <= maximumTemp; j+=5){
    var tr = document.createElement("tr");

    var temp = j;
    var tdTemp = document.createElement("td");
    tdTemp.innerHTML += j + "&deg;";
    tr.appendChild(tdTemp);

    for(var h = maxRelHum; h >= minRelHum; h-=10){
        var td = document.createElement("td");
        td.innerHTML += heatIndex(j, h);
        tr.appendChild(td);
    }

    table.appendChild(tr);
    }

    heatIndexDiv.replaceChild(table, heatIndexTable);

    
}


function heatIndex(temperature, relativeHumidity)
{
     if (temperature < 80)
          {
               console.log(temperature + " is lower than 80. Heat index not calculated.");
                return temperature;
                 }
                  if (relativeHumidity < 40)
                       {
                            console.log(relativeHumidity + " is lower than 40. Heat index not calculated.");
                             return temperature;
                              }
                               var t = temperature;
                                var r = relativeHumidity;
                                 var t2 = Math.pow(t, 2);
                                  var rh2 = Math.pow(r, 2);
                                   var index = -42.379 + 2.04901523 * t + 10.14333127 * r - 0.22475541 * t * r
                                    - 6.83783e-03 * t2 - 5.481717e-02 * rh2 + 1.22874e-03 * t2 * r +
                                     8.5282e-04 * t * rh2 - 1.99e-06 * t2 * rh2;
                                      return Math.round(index);
}


