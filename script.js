$(document).ready(function(){

    //Today's date in Day of the week, month, day, year
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
    
    //Finding current hour
    var currentHour = parseInt(moment().format('HH'));
    
    var $8AM = $("#8");
    var $9AM = $("#9");
    var $10AM = $("#10");
    var $11AM = $("#11");
    var $12PM = $("#12");
    var $1PM = $("#13");
    var $2PM = $("#14");
    var $3PM = $("#15");
    var $4PM = $("#16");
    var $5PM = $("#17");
    
//sets backgroud color for each hour based on current hour
    $("input").each(function(){
        var hour = parseInt($(this).attr("id"));
        if(hour < currentHour){
            $(this).addClass("past");
        } else if (hour > currentHour){
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    })
 
//Saves (setItem) all rows when a single button is clicked, it will override old plans 
    $("button").on("click", function () {
        localStorage.setItem("8AM", $8AM.val());
        localStorage.setItem("9AM", $9AM.val());
        localStorage.setItem("10AM", $10AM.val());
        localStorage.setItem("11AM", $11AM.val());
        localStorage.setItem("12PM", $12PM.val());
        localStorage.setItem("1PM", $1PM.val());
        localStorage.setItem("2PM", $2PM.val());
        localStorage.setItem("3PM", $3PM.val());
        localStorage.setItem("4PM", $4PM.val());
        localStorage.setItem("5PM", $5PM.val());
    })

//Sets all saved plans into the correct location
    $8AM.val((localStorage.getItem('8AM')));
    $9AM.val((localStorage.getItem('9AM')));
    $10AM.val((localStorage.getItem('10AM')));
    $11AM.val((localStorage.getItem('11AM')));
    $12PM.val((localStorage.getItem('12PM')));
    $1PM.val((localStorage.getItem('1PM')));
    $2PM.val((localStorage.getItem('2PM')));
    $3PM.val((localStorage.getItem('3PM')));
    $4PM.val((localStorage.getItem('4PM')));
    $5PM.val((localStorage.getItem('5PM')));
    
})

