$(document).ready(function () {

    //Time update function
    $("#time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    changeColor();

    //Time update function interval so that it runs every second (1000ms)
    setInterval(function () {
        $("#time").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
        changeColor();
    }, 1000);

    //Save user-input into localStorage
     var saveBtn = $(".save-button");

     saveBtn.click(function () {
         var results = this.previousElementSibling.firstElementChild;
        localStorage.setItem("mschedule" + results.id, $(results).val());
     });
 
     //localStorage function
     for (var i = 0; i <= 34; i++) {
         $('#' + i).val(localStorage.getItem("mschedule" + i));
      }

    //Clears and Refreshes Page
    var clearBtn = $(".clear-button");

    clearBtn.click(function () {
      localStorage.clear();
      location.reload();
    });
  

    //Change color between tomato and grey based on if the time has passed
    function changeColor() {

        for (i = 0; i <= 34; i++) {
            var currentTime = moment().day();

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