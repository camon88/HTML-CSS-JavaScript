var temperatureMax, temperatureMin, relativeMax, relativeMin, tablespan;

function createTable()
{
    setGlobals();

    var container = document.getElementById("heatIndexTableContainer");
    var table = document.createElement("TABLE");
    table.id = "heatIndexTable";
    table.setAttribute("border", "1");

    var header = document.createElement("THEAD");
    var headRow = document.createElement("TR");
    var headTitle = document.createElement("TH");
    headTitle.setAttribute("colspan", tablespan);
    headTitle.innerHTML = "Temperature (F) versus Relative Humidity (%)";
    headRow.appendChild(headTitle);
    headRow.id = "header";
    header.appendChild(headRow);
    header.appendChild(createKeyRow());
    table.appendChild(header);

    var body = document.createElement("TBODY");

    for (var temp = temperatureMin; temp <= temperatureMax; temp = temp + 5)
    {
        body.appendChild(createRow(temp));
    }

    table.appendChild(body);

    container.replaceChild(table, document.getElementById("heatIndexTable"));
}

window.onload = init;

function init()
{
    document.getElementById("createTable").onclick = createTable;
    document.getElementById("cautionLevel").onclick = displayCautionLevel;
    setCautionFormDefault();
}

function setGlobals() {
    temperatureMax = parseInt(document.getElementById("tempMax").value);
    temperatureMin = parseInt(document.getElementById("tempMin").value);
    relativeMax = parseInt(document.getElementById("humidMax").value);
    relativeMin = parseInt(document.getElementById("humidMin").value);
    tablespan = (relativeMax - relativeMin) / 10 + 2;
}

function setCautionFormDefault()
{
    var date = new Date();
    document.getElementById("year").value = date.getFullYear();
    document.getElementById("month").value = date.getMonth() + 1;
    document.getElementById("day").value = date.getDate();
}

function createKeyRow()
{
    var keyRow = document.createElement("TR");

    var farHead = document.createElement("TH");
    farHead.innerHTML = "&deg;F";
    farHead.setAttribute("style", "background-color: #69FCF8;");
    farHead.className = "tempKey";
    keyRow.appendChild(farHead);

    for (var humid = relativeMax; humid >= relativeMin; humid = humid - 10)
    {
        var humidHead = document.createElement("TH");
        humidHead.innerHTML = humid + "%";
        humidHead.setAttribute("style", "background-color: #92FF8F;");
        humidHead.className = "relativeKey";
        keyRow.appendChild(humidHead);
    }

    return keyRow;
}

function createRow(temp)
{
    var row = document.createElement("TR");

    var tempHead = document.createElement("TH");
    tempHead.innerHTML = temp;
    tempHead.setAttribute("style", "background-color: #69FCF8;");
    tempHead.className = "tempKey";
    row.appendChild(tempHead);

    for (var humid = relativeMax; humid >= relativeMin; humid = humid - 10)
    {
        var heatIndexCell = document.createElement("TD");
        var index = heatIndex(temp, humid);
        heatIndexCell.innerHTML = index;
        colorCell(heatIndexCell, index);
        row.appendChild(heatIndexCell);
    }

    return row;
}

function color(index)
{
    if(index > 124)
    {   
        $("createTable").click(function()
        {
            $("button").click(function(){
            $(this).replaceWith('<td class=".extreme-danger"> + $().text(index) + </td>');
            });0
        });

    }
    if (index > 103)
    {
        $(this).css("background-color","#F3330F");
    }
    if (index > 89)
    {
        $(this).css("background-color","#FC9B2A");
    }
    if (index > 80)
    {
        $(this).css("background-color","#FDD164");
    }
    else
    {
        $(this).css("background-color","green");
    }
}


function colorCell(cell, heatIndex)
{
    if (heatIndex < 90)
    {
        cell.setAttribute("style", "background-color: #FEC965;");
    }

    else if (heatIndex < 104)
    {
        cell.setAttribute("style", "background-color: #FE9934;");
    }

    else if (heatIndex < 125)
    {
        cell.setAttribute("style", "background-color: #FE3300;");
    }

    else
    {
        cell.setAttribute("style", "background-color: #CD3301;");
    }
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

function displayCautionLevel()
{
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var date = new Date(year, month - 1, day);
    var temperature = parseInt(document.getElementById("temp").value);
    var humidity = parseInt(document.getElementById("humid").value);
    var heatIndexValue = heatIndex(temperature, humidity);
    var cautionLevel = getCautionLevel(heatIndexValue);
    
    var alertMsg = "Date: " + convertDate(date) + "\n" +
             "Heat Index: " + heatIndexValue + "\n" +
             "Caution Level: " + cautionLevel;
    
    alert(alertMsg);
    return false; //Keeps data in form fields
}

function convertDate(date)
{
    var dateString = date.toString();
    var dateArray = dateString.split(" ");
    var day = dateArray[0];
    var month = dateArray[1];
    var dateNum = dateArray[2];
    var year = dateArray[3];
    
    return day + " " + month + " " + dateNum + " " + year;
    
}

function getCautionLevel(index)
{
    if(index > 124)
    {
        return "Extreme Danger";
    }
    if (index > 103)
    {
        return "Danger";
    }
    if (index > 89)
    {
        return "Extreme Caution";
    }
    if (index > 80)
    {
        return "Caution";
    }
    else
    {
        return "No Caution";
    }

   
}
