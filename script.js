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
    //Setting the rows
    var element = ""
    for (var i = 9; i < 18; i++) {
        element += `<div id="${i}-block" class="time-block row">
        <p class="hour text-center">${i}</p>
        <textarea class="user-input" id="${i}-txt" row="2" cols="100"></textarea>
        <button id="${i}-btn" class="saveBtn">Save</button>
        </div>`;

    }
    $(".container").html(element)

    // storing user's data in localstorage
    $(".container").on("click", ".saveBtn", function () {
        var id = $(this).attr("id")
        //  console.log("ID",id)
        var time = id.split("-")[0]
        //  console.log(time)
        var userdata = $(`#${time}-txt`).val()
        //  console.log("Test",userdata)
        localStorage.setItem(time, userdata)
    })

    // setting background text color and displaying user's input
    for (var j = 9; j < 18; j++) {
        var newData = localStorage.getItem(j)
        $(`#${j}-txt`).val(newData)
        console.log(newData)
        if (currentHour > j) {
            $(`#${j}-txt`).attr("class", "past");

        }
        else if (currentHour == j) {
            $(`#${j}-txt`).attr("class", "present");
        }
        else {
            $(`#${j}-txt`).attr("class", "future")
        }

    }

})