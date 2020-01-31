$(document).ready(function() {

    // time format
    var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    var day = moment().format('dddd');
    $("#currentDay").text(day + ", " + dateTime)


    // this function save your data in localStorage
    $(".saveBtn").on("click", function() {
        var textArea = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id")

        localStorage.setItem(time, textArea);



    })

});




// var dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
// var day = moment().format('dddd');
// $("#currentDay").text(day + ", " + dateTime)

//moment().format('MMMM Do YYYY, h:mm:ss a');
//moment().format('dddd');