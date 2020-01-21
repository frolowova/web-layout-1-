"use strict"

window.onload = function () {

    dropDownMenu();
    modal();

    function modal() {
        const modalWindow = document.querySelector(".modalW")
        const btnOpenModalWindow = document.querySelector("#btnOpenModalWindow")
        const closeModalWindow = document.querySelector(".close")
        const btnModalCancel = document.querySelector("#btnCancel")
        const container = document.querySelector(".container")
        let inputs = document.querySelectorAll(".inp")
        console.log(inputs)

        btnOpenModalWindow.addEventListener("click", function () {
            modalWindow.style.display = "block";
            container.style = "filter: blur(3px);"
        })

        closeModalWindow.addEventListener("click", function () {
            modalWindow.style.display = "none";
            container.style = "filter: blur(0px);"
        })

        btnModalCancel.addEventListener("click", function () {
            inputs.forEach((item, i) => {
                inputs[i].value = "";       // Clear all Input in modalWindow
            })
            modalWindow.style.display = "none";
            container.style = "filter: blur(0px);"
        })



        window.addEventListener("click", function (event) {
            if (event.target == modalWindow) {
                modalWindow.style.display = "none";
                container.style = "filter: blur(0px);"
            }
        })
    }


    function dropDownMenu() {
        const dropbtn = document.querySelector(".dropbtn");
        const btnMenu = document.querySelector(".dropdown-content");
        btnMenu.style.display = "none";

        dropbtn.addEventListener("click", () => {
            if (btnMenu.style.display == "none") {
                btnMenu.style.display = "grid";
            }
            else btnMenu.style.display = "none";
        })

        window.addEventListener("click", function (event) {
            if (!dropbtn.contains(event.target)) btnMenu.style.display = 'none';
        })
    }

}