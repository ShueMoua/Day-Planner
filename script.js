// Set the day to the current day ref: https://www.w3schools.com/js/js_date_methods.asp
var date = new Date();

var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var day = weekDay[date.getDay()];

var arrayMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month = arrayMonths[date.getMonth()];
// Hour variable
var currentHour = date.getHours()
console.log(currentHour)
$("#currentDay").text(day + ", " + month + " " + date.getDate())
// function for JS to wait till the page is loaded to take effect
$(document).ready(function () {
    let element
    for (var i = 9; i < 18; i++) {
       element += `<div id="${i}-block" class="time-block row">
        <p class="hour">${i}</p>
        <textarea class="user-input" id="${i}-txt" row="2" cols="100"></textarea>
        <button id="${i}-btn" class="saveBtn">Save</button>
        </div>`;
        
    }
    $(".container").html(element)

    $(".container").on("click",".saveBtn", function(){
         var id = $(this).attr("id")
         console.log("ID",id)
         var time = id.split("-")[0]
         console.log(time)
         var userdata = $(`#${time}-txt`).val()
         console.log("Test",userdata)
         localStorage.setItem(time, userdata)
    })
    // var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    // hours.forEach(function (time) {
    //     var hourList = $("<div>");
    //     hourList.text(time);
    //     $(".container").append(hourList);
    //     hourList.attr("class", "hour row")
    //     // Setting background text color to past/present/future
    //     if (currentHour > time || currentHour < time || time < 12) {
    //         hourList.attr("class", "hour row past");
    //         hourList.text(time + " AM")
    //     }
        
    //     if (currentHour < time && time <= 12) {
    //         hourList.attr("class", "hour row past");
    //         hourList.text(time + " PM")
    //     }

    //     if (currentHour == time && currentHour > 8) {
    //         hourList.attr("class", "hour row present");
    //         hourList.text(time + " AM")
    //     }

    //     if (currentHour == time && currentHour < 9) {
    //         hourList.attr("class", "hour row present");
    //         hourList.text(time + " PM")
    //     }

    //     // if (currentHour < time && time < 12) {
    //     //     hourList.attr("class", "hour row future");
    //     //     hourList.text(time + " AM")
    //     // }

    //     // if (currentHour > time && time < 12) {
    //     //     hourList.attr("class", "hour row future");
    //     //     hourList.text(time + " AM")
    //     // }

    //     // if (currentHour != time) {
    //     //     hourList.attr("class", "hour row future")
    //     // }
    // })


})