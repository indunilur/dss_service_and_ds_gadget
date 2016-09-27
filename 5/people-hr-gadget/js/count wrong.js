/**$(document).ready(function() {
    $.ajax({
        url: "http://172.17.0.1:9764/services/PEOPLE_HR_DataService/counts"
    }).then(function(data) {
       $('.count').append(data.employee.count);
    });
});**/


$( document ).ready(function() {
   //load2();
});



$(function() {
     $("#datepicker").datepicker();
     $("#datepicker").datepicker('option', 'onSelect', function(dateText,inst) {
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
'<td align="center">'+(totalExcludingInternsFrom!=0?totalExcludingInternsFrom:0)+'</td>'+
'<td align="center">'+(newJoineesInFrom!=0?newJoineesInFrom:0)+'</td>'+
'<td align="center">'+(resignationInFrom!=0?resignationInFrom:0)+'</td>'+
'<td align="center">'+(totalExcludingInternsTo!=0?totalExcludingInternsTo:0)+'</td>'+
'<td align="center">'+(totalInternsFrom!=0?totalInternsFrom:0)+'</td>'+
'<td align="center">'+(internsInFrom!=0?internsInFrom:0)+'</td>'+
'<td align="center">'+(resignationInternsTo!=0?resignationInternsTo:0)+'</td>'+
'<td align="center">'+(totalInternsTo!=0?totalInternsTo:0)+'</td>'+
'</tr>');

}

$('.display').dataTable( {
					"bJQueryUI": true,
					"sPaginationType": "full_numbers" 
				} );
}
