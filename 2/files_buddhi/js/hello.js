$( document ).ready(function() {
   
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://172.17.0.1:9444/services/PEOPLE_HR_DataService/counts", false); 
xmlHttp.setRequestHeader("Content-Type","application/json");
xmlHttp.setRequestHeader("Accept","application/json");
xmlHttp.send(null);

console.log(xmlHttp.responseText);
var jsonResponse = JSON.parse(xmlHttp.responseText);

console.log("end of second request");


$('#sample').html('</tr><td>Srilanka</td><td>'+jsonResponse.employee.count+'</td></tr>');


});


