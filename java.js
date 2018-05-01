/*global document*/
var myInput = document.getElementById("input"),
    myDiv = document.getElementById("div"),
    myCurrency = document.getElementById("currency"),
    fanc = function () {
        "use strict";
        if (myInput.value > 0) {
            myDiv.innerHTML = " يساوي" + "<span style='color:green;'>" + (myInput.value * myCurrency.value).toFixed(2) + "</span>" + " " + "جنيه";
        } else {
            myDiv.innerHTML = "<span style='color:red;'>ادخل رقم صحيح</span>";
        }
    };



myInput.onkeyup = fanc;

myCurrency.onchange = fanc;
   
