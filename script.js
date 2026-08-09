/* =========================================================
   HEERIX PORTFOLIO — INTERACTIONS
========================================================= */

const ACCESS_CODE = "9868096233";

/* =========================================================
   ELEMENTS
========================================================= */

const entryScreen = document.getElementById("entryScreen");
const portfolio = document.getElementById("portfolio");
const accessCode = document.getElementById("accessCode");
const unlockButton = document.getElementById("unlockBtn");
const accessError = document.getElementById("accessError");

const heerixButton = document.getElementById("heerixButton");
const heerixChat = document.getElementById("heerixChat");
const closeChat = document.getElementById("closeChat");
const contactForm = document.getElementById("contactForm");


/* =========================================================
   CINEMATIC HEERIX BOOT
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

    /*
     * Heerix materializes first.
     * The access interface becomes active after the intro.
     */

   setTimeout(() => {
    entryScreen.classList.add("ready");
}, 1800);


    /*
     * Focus the access field after the animation.
     */

    setTimeout(() => {

        if (
            entryScreen &&
            !entryScreen.classList.contains("hidden") &&
            accessCode
        ) {
            accessCode.focus();
        }

   }, 2400);

});


/* =========================================================
   UNLOCK PORTFOLIO
========================================================= */

function unlockPortfolio() {

    if (!accessCode || !entryScreen || !portfolio) {
        return;
    }

    const enteredCode = accessCode.value.trim();


    /* =====================================================
       WRONG PASSWORD
    ===================================================== */

    if (enteredCode !== ACCESS_CODE) {

        if (accessError) {
            accessError.textContent =
                "Incorrect access code. Nice try. Try again.";
        }


        /* Restart shake animation */

        accessCode.style.animation = "none";

        void accessCode.offsetWidth;

        accessCode.style.animation =
            "wrongCode .35s ease";


        accessCode.value = "";


        setTimeout(() => {

            accessCode.focus();

        }, 50);


        return;
    }


  /* =========================================================
   CORRECT PASSWORD
========================================================= */

accessError.textContent = "";

/* Start cinematic unlock */
entryScreen.classList.add("unlocking");


setTimeout(() => {

    entryScreen.classList.add("hidden");

    portfolio.classList.remove("hidden");

    window.scrollTo(0, 0);

    /* Home entrance */
    portfolio.classList.add("portfolio-enter");

    setTimeout(() => {
        portfolio.classList.remove("portfolio-enter");
    }, 1200);

    showWelcomeMessage();

}, 1100);


    /*
     * Give Heerix time to react before
     * the lock screen disappears.
     */

    setTimeout(() => {

        entryScreen.style.transition =
            "opacity .9s ease, transform 1s cubic-bezier(.2,.8,.2,1)";

        entryScreen.style.opacity = "0";

        entryScreen.style.transform =
            "scale(1.035)";

    }, 500);


    /*
     * Show portfolio.
     */

    setTimeout(() => {

        entryScreen.classList.add("hidden");

        portfolio.classList.remove("hidden");


        /*
         * Reset temporary inline styles.
         */

        entryScreen.style.opacity = "";

        entryScreen.style.transform = "";

        entryScreen.style.transition = "";


        window.scrollTo(0, 0);


        /*
         * Heerix welcome message.
         */

        showWelcomeMessage();

    }, 1450);

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
        <strong>ACCESS GRANTED</strong>
        <span>Welcome home, Himanshu.</span>
    `;


    document.body.appendChild(message);


    setTimeout(() => {

        message.classList.add("show");

    }, 50);


    setTimeout(() => {

        message.classList.remove("show");

    }, 4000);


    setTimeout(() => {

        message.remove();

    }, 4500);

}


/* =========================================================
   UNLOCK BUTTON
========================================================= */

if (unlockButton) {

    unlockButton.addEventListener(
        "click",
        unlockPortfolio
    );

}


/* =========================================================
   ENTER KEY
========================================================= */

if (accessCode) {

    accessCode.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                unlockPortfolio();

            }

        }
    );

}


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


            this.classList.add(
                "active"
            );

        }
    );

});


/* =========================================================
   HEERIX CHAT
========================================================= */

if (
    heerixButton &&
    heerixChat &&
    closeChat
) {

    heerixButton.addEventListener(
        "click",
        () => {

            heerixChat.classList.toggle(
                "open"
            );

        }
    );


    closeChat.addEventListener(
        "click",
        () => {

            heerixChat.classList.remove(
                "open"
            );

        }
    );

}


/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value.trim();


            const email =
                document.getElementById(
                    "contactEmail"
                ).value.trim();


            const subject =
                document.getElementById(
                    "contactSubject"
                ).value.trim();


            const message =
                document.getElementById(
                    "contactMessage"
                ).value.trim();


            const emailBody =
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`;


            const mailtoLink =
                "mailto:himanshutanwar860750@gmail.com" +
                `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(emailBody)}`;


            window.location.href =
                mailtoLink;

        }
    );

}
