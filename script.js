
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
     * The screen starts dark.
     * Heerix materializes first, then the access card becomes usable.
     */
    setTimeout(() => {
        entryScreen.classList.add("ready");
    }, 2600);

    /*
     * Put focus on the access field after the cinematic intro.
     * This is intentionally delayed so the animation can finish first.
     */
    setTimeout(() => {
        if (!entryScreen.classList.contains("hidden")) {
            accessCode.focus();
        }
    }, 3300);
});

/* =========================================================
   UNLOCK
========================================================= */

function unlockPortfolio() {
    const enteredCode = accessCode.value.trim();

    /* WRONG PASSWORD */

    if (enteredCode !== ACCESS_CODE) {
        accessError.textContent =
            "Incorrect access code. Nice try. Try again.";

        accessCode.style.animation = "none";
        void accessCode.offsetWidth;
        accessCode.style.animation = "wrongCode .35s ease";

        accessCode.value = "";

        setTimeout(() => {
            accessCode.focus();
        }, 50);

        return;
    }

    /* CORRECT PASSWORD */

    accessError.textContent = "";
    entryScreen.classList.add("unlocking");

    unlockButton.disabled = true;
    unlockButton.querySelector("span").textContent = "ACCESS GRANTED";

    /*
     * Give Heerix a short reaction before the whole screen leaves.
     */
    setTimeout(() => {
        entryScreen.style.transition =
            "opacity .9s ease, transform 1s cubic-bezier(.2,.8,.2,1)";

        entryScreen.style.opacity = "0";
        entryScreen.style.transform = "scale(1.035)";
    }, 500);

    setTimeout(() => {
        entryScreen.classList.add("hidden");
        portfolio.classList.remove("hidden");

        entryScreen.style.opacity = "";
        entryScreen.style.transform = "";
        entryScreen.style.transition = "";

        window.scrollTo(0, 0);

        showWelcomeMessage();
    }, 1450);
}

/* =========================================================
   WELCOME MESSAGE
========================================================= */

function showWelcomeMessage() {
    const message = document.createElement("div");

    message.className = "welcome-message";

    message.innerHTML = `
        <strong>HEERIX</strong>
        <span>Access granted. Welcome home, Himanshu.</span>
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
   BUTTON + ENTER KEY
========================================================= */

unlockButton.addEventListener("click", unlockPortfolio);

accessCode.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        unlockPortfolio();
    }
});

/* =========================================================
   SMOOTH SCROLL
========================================================= */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

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

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

/* =========================================================
   HEERIX CHAT
========================================================= */

if (heerixButton && heerixChat && closeChat) {
    heerixButton.addEventListener("click", () => {
        heerixChat.classList.toggle("open");
    });

    closeChat.addEventListener("click", () => {
        heerixChat.classList.remove("open");
    });
}

/* =========================================================
   CONTACT FORM
========================================================= */

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const emailBody =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`;

        const mailtoLink =
            "mailto:himanshutanwar860750@gmail.com" +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;
    });
}
