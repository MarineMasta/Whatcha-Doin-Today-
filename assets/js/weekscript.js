$(document).ready(function () {

    //Save button variable
    var saveButton = $(".save-button");
    let data;

    //Time update function
    $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    changeColor();

    //Time update function interval so that it runs every second (1000ms)
    setInterval(function () {
        $("#exact-time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        changeColor();
    }, 1000);

    //localStorage function
    for (var i = 8; i <= 15; i++) {
        $('#' + i).val(localStorage.getItem("m " + i));
    }

    //Save user-input into localStorage
    saveButton.click(function () {
        event.preventDefault();
        var a = this;
        var results = a.previousElementSibling.firstElementChild;
        data = $(results).val().trim();
        var time = results.id;
        localStorage.setItem("hour " + time, data);
    });

    //Change color between tomato and grey based on if the time has passed
    function changeColor() {

        for (i = 8; i <= 15; i++) {
            var currentTime = moment().hour();

            //Present
            if (currentTime === i) {
                $("." + i).attr("style", "background-color: tomato");
            }

            //Past
            else if (currentTime > i) {
                $("." + i).attr("style", "background-color: #333333; color: grey");
            }
        }
    }
});