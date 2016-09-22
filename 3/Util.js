// Util functions

var util={};
//var log =new Log();

var util={};
var log =new Log();


(function(util){

    var DATE_FORMAT = "MM/DD/YYYY";
    var DATE_FORMAT_Y = "YYYY/MM/DD";
    var DATETIME_FORMAT = "MM/DD/YYYY HH:mm:ss"

    util.formatDate = function(date){
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
        var dd  = date.getDate().toString();

        return (yyyy + '-' + mm + '-' + dd);

        // return (mm[1]?mm:"0"+mm[0])  + '/' + (dd[1]?dd:"0"+dd[0]) + '/' + yyyy;
    };

util.getFromDate = function(date){
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based

        return (yyyy + '-' + mm + '-' + '01');

        // return (mm[1]?mm:"0"+mm[0])  + '/' + (dd[1]?dd:"0"+dd[0]) + '/' + yyyy;
    };
}(util));
