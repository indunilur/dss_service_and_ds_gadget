$( document ).ready(function() {
   alert("bbaaa");
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://172.17.0.1:9444/services/peoplehr/counts", false); 

xmlHttp.setRequestHeader("Accept","application/json");
xmlHttp.send(null);

console.log(xmlHttp.responseText);
var jsonResponse = JSON.parse(xmlHttp.responseText);

console.log("end of second request");


$('#sample').append('<tr><td>Srilanka</td><td>'+jsonResponse.employee.count+'</td></tr><tr><td>Japan</td><td>'+jsonResponse.employee.count+'</td></tr>');


});


