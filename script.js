/* =========================================================
   HEERIX PORTFOLIO
========================================================= */


/* =========================================================
   ACCESS CODE
========================================================= */

const ACCESS_CODE = "9868096233";


/* =========================================================
   ELEMENTS
========================================================= */

const entryScreen =
    document.getElementById("entryScreen");

const portfolio =
    document.getElementById("portfolio");

const accessCode =
    document.getElementById("accessCode");

const unlockButton =
    document.getElementById("unlockBtn");

const accessError =
    document.getElementById("accessError");



/* =========================================================
   UNLOCK
========================================================= */

function unlockPortfolio() {

    const enteredCode =
        accessCode.value.trim();


    /* WRONG PASSWORD */

    if (enteredCode !== ACCESS_CODE) {

        accessError.textContent =
            "Incorrect access code. Nice try. Try again.";


        accessCode.animate(
            [
                {
                    transform: "translateX(0)"
                },

                {
                    transform: "translateX(-8px)"
                },

                {
                    transform: "translateX(8px)"
                },

                {
                    transform: "translateX(-5px)"
                },

                {
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 300
            }
        );


        accessCode.value = "";

        return;
    }



    /* CORRECT PASSWORD */

    accessError.textContent = "";


    entryScreen.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";


    entryScreen.style.opacity = "0";

    entryScreen.style.transform =
        "scale(1.03)";


    setTimeout(() => {

        entryScreen.classList.add("hidden");

        portfolio.classList.remove("hidden");

        window.scrollTo(0, 0);


        /*
            Small welcome message.
            We can later replace this with
            a much better Heerix animation.
        */

        showWelcomeMessage();


    }, 800);

}



/* =========================================================
   WELCOME MESSAGE
========================================================= */

function showWelcomeMessage() {

    const message =
        document.createElement("div");


    message.className =
        "welcome-message";


    message.innerHTML = `
        <strong>HEERIX</strong>
        <span>Access granted. Welcome home, Himanshu.</span>
    `;


    document.body.appendChild(message);


    setTimeout(() => {

        message.classList.add("show");

    }, 100);


    setTimeout(() => {

        message.classList.remove("show");

    }, 4000);


    setTimeout(() => {

        message.remove();

    }, 4700);

}



/* =========================================================
   BUTTON + ENTER KEY
========================================================= */

unlockButton.addEventListener(
    "click",
    unlockPortfolio
);


accessCode.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            unlockPortfolio();

        }

    }
);



/* =========================================================
   SMOOTH SCROLL
========================================================= */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth"
    });

}



/* =========================================================
   NAVBAR ACTIVE LINK
========================================================= */

const navLinks =
    document.querySelectorAll(
        ".navbar nav a"
    );


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(
                (item) => {
                    item.classList.remove(
                        "active"
                    );
                }
            );


            this.classList.add("active");

        }
    );

});



/* =========================================================
   HEERIX CHAT
========================================================= */

const heerixButton =
    document.getElementById(
        "heerixButton"
    );


const heerixChat =
    document.getElementById(
        "heerixChat"
    );


const closeChat =
    document.getElementById(
        "closeChat"
    );


heerixButton.addEventListener(
    "click",
    function () {

        heerixChat.classList.toggle(
            "open"
        );

    }
);


closeChat.addEventListener(
    "click",
    function () {

        heerixChat.classList.remove(
            "open"
        );

    }
);



/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "contactName"
            ).value;


        const email =
            document.getElementById(
                "contactEmail"
            ).value;


        const subject =
            document.getElementById(
                "contactSubject"
            ).value;


        const message =
            document.getElementById(
                "contactMessage"
            ).value;


        const emailBody =

            `Name: ${name}

Email: ${email}

Message:

${message}`;


        const mailtoLink =

            `mailto:himanshutanwar860750@gmail.com` +

            `?subject=${encodeURIComponent(subject)}` +

            `&body=${encodeURIComponent(emailBody)}`;


        window.location.href =
            mailtoLink;

    }
);
