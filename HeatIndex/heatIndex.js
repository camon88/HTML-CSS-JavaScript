
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
 return index;
}