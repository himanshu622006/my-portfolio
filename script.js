// Change this before deployment.
const ACCESS_CODE = "9868096233";

const entryScreen = document.getElementById("entryScreen");
const portfolio = document.getElementById("portfolio");
const accessCode = document.getElementById("accessCode");
const unlockBtn = document.getElementById("unlockBtn");
const accessError = document.getElementById("accessError");
const heerixBtn = document.getElementById("heerixBtn");
const heerixChat = document.getElementById("heerixChat");
const closeChat = document.getElementById("closeChat");

function unlock() {
  if (accessCode.value === ACCESS_CODE) {
    accessError.textContent = "";
    entryScreen.style.transition = "opacity .7s ease, transform .7s ease";
    entryScreen.style.opacity = "0";
    entryScreen.style.transform = "scale(1.02)";
    setTimeout(() => {
      entryScreen.classList.add("hidden");
      portfolio.classList.remove("hidden");
      window.scrollTo(0, 0);
    }, 700);
  } else {
    accessError.textContent = "Incorrect access code. Nice try. Try again.";
    accessCode.animate(
      [{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],
      {duration:260}
    );
  }
}

unlockBtn.addEventListener("click", unlock);
accessCode.addEventListener("keydown", e => {
  if (e.key === "Enter") unlock();
});

heerixBtn.addEventListener("click", () => heerixChat.classList.toggle("open"));
closeChat.addEventListener("click", () => heerixChat.classList.remove("open"));

document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".navbar nav a").forEach(a => a.classList.remove("active"));
    link.classList.add("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  // Replace this with your actual email before deployment.
  const mail = "himanshutanwar860750@gmail.com";
  const subject = encodeURIComponent(document.getElementById("contactSubject").value);
  const body = encodeURIComponent(
    `Name: ${document.getElementById("contactName").value}\n` +
    `Email: ${document.getElementById("contactEmail").value}\n\n` +
    `${document.getElementById("contactMessage").value}`
  );
  window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
});

document.getElementById("resumeBtn").addEventListener("click", e => {
  e.preventDefault();
  alert("Add your resume PDF as assets/resume.pdf, then change this button to open it.");
});
