$( document ).ready(function() {
   //load2();
});



$(function() {
     $("#datepicker").datepicker();
     $("#datepicker").datepicker('option', 'onSelect', function(dateText,inst) { 
	  alert(dateText +" " + this.value +" "); 
          $('#date').val(this.value);
	  $('#sample').empty();
	  load3(new Date(this.value));
     });
});

function load3(date) {
var xmlHttp = new XMLHttpRequest();

//var toDate = Util.formatDate(date);
var yyyy = date.getFullYear().toString();
var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
var dd  = date.getDate().toString();
var toDate = (yyyy + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + (dd[1]?dd:"0"+dd[0]));
//var fromDate = Util.getFromDate(date);
var yyyy2 = date.getFullYear().toString();
var mm2 = (date.getMonth()+1).toString(); // getMonth() is zero-based
var fromDate = (yyyy2 + '-' + (mm2[1]?mm2:"0"+mm2[0]) + '-' + '01');

$('#totalExcludingInternsFrom').append(fromDate);
$('#totalInternsFrom').append(fromDate);
$('#totalExcludingInternsTo').append(toDate);
$('#totalInternsTo').append(toDate);

xmlHttp.open("GET", "https://172.17.0.1:9444/services/peoplehr/employeeCount?fromDate="+ fromDate +"&toDate="+toDate, false); 
xmlHttp.setRequestHeader("Accept","application/json");
xmlHttp.send(null);

console.log(xmlHttp.responseText);
var jsonResponse = JSON.parse(xmlHttp.responseText);

console.log("end of second request");

var locationBasedCount = jsonResponse.employee.locationBasedCount;

for(var i in locationBasedCount)
{
     var location = locationBasedCount[i].location;
     var totalExcludingInternsFrom = locationBasedCount[i].totalExcludingInternsFrom;
     var newJoineesInFrom = locationBasedCount[i].newJoineesInFrom;
     var resignationInFrom = locationBasedCount[i].resignationInFrom;
     var totalExcludingInternsTo = locationBasedCount[i].totalExcludingInternsTo;
     var totalInternsFrom = locationBasedCount[i].totalInternsFrom;
     var internsInFrom = locationBasedCount[i].internsInFrom;
     var resignationInternsTo = locationBasedCount[i].resignationInternsTo;
     var totalInternsTo = locationBasedCount[i].totalInternsTo;

$('#sample').append('<tr><td>'+location+'</td>'+
'<td>'+totalExcludingInternsFrom+'</td>'+
'<td>'+newJoineesInFrom+'</td>'+
'<td>'+resignationInFrom+'</td>'+
'<td>'+totalExcludingInternsTo+'</td>'+
'<td>'+totalInternsFrom+'</td>'+
'<td>'+internsInFrom+'</td>'+
'<td>'+resignationInternsTo+'</td>'+
'<td>'+totalInternsTo+'</td>'+
'</tr>');

}
}



function load(date) {
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://172.17.0.1:9444/services/PEOPLE_HR_DataService/counts", false); 
xmlHttp.setRequestHeader("Content-Type","application/json");
xmlHttp.setRequestHeader("Accept","application/json");
xmlHttp.send(null);

console.log(xmlHttp.responseText);
var jsonResponse = JSON.parse(xmlHttp.responseText);

console.log("end of second request");


$('#sample').html('</tr><td>Srilanka</td><td>'+jsonResponse.employee.count+'</td></tr>');


}

function load2() {
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://172.17.0.1:9444/services/peoplehr/employeeCount?fromDate=2015-01-01&toDate=2015-01-15", false); 
xmlHttp.setRequestHeader("Accept","application/json");
xmlHttp.send(null);

console.log(xmlHttp.responseText);
var jsonResponse = JSON.parse(xmlHttp.responseText);

console.log("end of second request");

var locationBasedCount = jsonResponse.employee.locationBasedCount;

for(var i in locationBasedCount)
{
     var location = locationBasedCount[i].location;
     var totalExcludingInternsFrom = locationBasedCount[i].totalExcludingInternsFrom;
     var newJoineesInFrom = locationBasedCount[i].newJoineesInFrom;
     var resignationInFrom = locationBasedCount[i].resignationInFrom;
     var totalExcludingInternsTo = locationBasedCount[i].totalExcludingInternsTo;
     var totalInternsFrom = locationBasedCount[i].totalInternsFrom;
     var internsInFrom = locationBasedCount[i].internsInFrom;
     var resignationInternsTo = locationBasedCount[i].resignationInternsTo;
     var totalInternsTo = locationBasedCount[i].totalInternsTo;

$('#sample').append('<tr><td>'+location+'</td>'+
'<td>'+totalExcludingInternsFrom+'</td>'+
'<td>'+newJoineesInFrom+'</td>'+
'<td>'+resignationInFrom+'</td>'+
'<td>'+totalExcludingInternsTo+'</td>'+
'<td>'+totalInternsFrom+'</td>'+
'<td>'+internsInFrom+'</td>'+
'<td>'+resignationInternsTo+'</td>'+
'<td>'+totalInternsTo+'</td>'+
'</tr>');

}











}


