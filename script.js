/* =====================================================
   SMOOTH IMAGE LOADING
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const images = document.querySelectorAll(".art-card img");

    images.forEach(function (image) {

        image.addEventListener("load", function () {

            image.classList.add("loaded");

        });

    });


    /* =================================================
       CONTACT FORM
    ================================================= */

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (!name || !email || !message) {

                alert("Please fill in all the fields.");

                return;
            }


            /*
            This opens the visitor's email application.

            Your email:
            bhargaviie12@gmail.com
            */

            const subject =
                encodeURIComponent(
                    "Message from Bhargavi Art Portfolio"
                );

            const body =
                encodeURIComponent(
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message
                );


            window.location.href =
                "mailto:bhargaviie12@gmail.com" +
                "?subject=" + subject +
                "&body=" + body;

        });

    }

});