/* =========================================
   MOBILE HAMBURGER MENU
========================================= */

const hamburger =
    document.getElementById("hamburger");

const navigation =
    document.getElementById("navigation");


hamburger.addEventListener("click", function () {

    navigation.classList.toggle("active");

    hamburger.classList.toggle("active");


    const isOpen =
        hamburger.classList.contains("active");


    hamburger.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================= */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        hamburger.classList.remove("active");

        hamburger.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});