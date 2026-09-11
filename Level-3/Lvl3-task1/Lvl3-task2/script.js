// =========================
// Smooth navigation
// =========================

document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


// =========================
// Apply button interaction
// =========================

document
    .querySelectorAll(".primary-button, .apply-button")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                console.log(
                    "Application section opened."
                );

            }
        );

    });


// =========================
// Navbar shadow on scroll
// =========================

const header =
    document.querySelector(".header");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 5px 25px rgba(0, 0, 0, 0.25)";

        }

        else {

            header.style.boxShadow =
                "none";

        }

    }
);