/* =========================================================
   HEERIX PORTFOLIO — COBALT + COOL GREY
   Responsive: desktop / tablet / phone
========================================================= */

:root {
    --bg: #070a0f;
    --bg-2: #0b1119;
    --panel: #101822;
    --panel-2: #151f2b;
    --cobalt: #315fa8;
    --cobalt-light: #4778be;
    --cobalt-soft: rgba(49, 95, 168, .22);
    --grey: #a7b0bc;
    --grey-light: #d7dce3;
    --white: #f4f7fb;
    --muted: #718092;
    --border: rgba(137, 157, 181, .20);
    --danger: #d36c76;
    --shadow: 0 24px 70px rgba(0,0,0,.38);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--bg);
    color: var(--white);
    font-family: "Segoe UI", Arial, sans-serif;
    overflow-x: hidden;
}

body::selection {
    background: var(--cobalt);
    color: white;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

/* =========================================================
   ENTRY / CINEMATIC HEERIX BOOT — V3
========================================================= */

.entry-screen {
    position: fixed;
    inset: 0;
    z-index: 9999;
    overflow: hidden;
    background:
        radial-gradient(circle at 24% 48%, rgba(49,95,168,.10), transparent 27%),
        radial-gradient(circle at 76% 48%, rgba(49,95,168,.07), transparent 30%),
        var(--bg);
    isolation: isolate;
}

.entry-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    background:
        linear-gradient(rgba(120,145,175,.028) 1px, transparent 1px),
        linear-gradient(90deg, rgba(120,145,175,.028) 1px, transparent 1px);
    background-size: 58px 58px;
    mask-image: linear-gradient(to bottom, black, rgba(0,0,0,.45));
}

.grid-glow {
    position: absolute;
    width: 55vw;
    height: 55vw;
    max-width: 850px;
    max-height: 850px;
    left: 26%;
    top: 48%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(49,95,168,.10), transparent 64%);
    filter: blur(10px);
    animation: ambientPulse 6s ease-in-out infinite;
}

.scan-line {
    position: absolute;
    left: 0;
    right: 0;
    top: -2px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(71,120,190,.32), transparent);
    opacity: .35;
    animation: scanLine 7s linear infinite;
}

.circuit {
    position: absolute;
    width: 180px;
    height: 180px;
    opacity: .45;
}

.circuit::before,
.circuit::after {
    content: "";
    position: absolute;
    border-color: rgba(71,120,190,.30);
    border-style: solid;
}

.circuit-a { left: -55px; top: 8%; }
.circuit-b { right: -55px; top: 14%; transform: rotate(90deg); }
.circuit-c { left: 4%; bottom: -90px; transform: rotate(-25deg); }
.circuit-d { right: 3%; bottom: -80px; transform: rotate(155deg); }

.circuit::before {
    width: 110px;
    height: 70px;
    border-width: 1px 0 0 1px;
    clip-path: polygon(0 0, 55% 0, 100% 50%, 100% 100%, 70% 100%, 70% 55%, 55% 40%, 0 40%);
}

.circuit::after {
    width: 5px;
    height: 5px;
    border-width: 1px;
    border-radius: 50%;
    box-shadow: 0 0 14px rgba(71,120,190,.45);
}

.entry-layout {
    position: relative;
    z-index: 3;
    min-height: 100vh;
    width: min(1280px, 92vw);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(420px, .95fr) minmax(440px, 1.05fr);
    align-items: center;
    gap: clamp(50px, 7vw, 115px);
    padding: 48px 0 105px;
}

.entry-visual {
    min-height: 610px;
    display: grid;
    place-items: center;
}

.heerix-stage {
    position: relative;
    width: min(43vw, 560px);
    height: min(43vw, 560px);
    min-width: 390px;
    min-height: 390px;
    display: grid;
    place-items: center;
    animation: stageReveal 1.5s cubic-bezier(.16,1,.3,1) both;
}

.heerix-aura {
    position: absolute;
    width: 65%;
    height: 65%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(71,120,190,.18), transparent 68%);
    filter: blur(18px);
    animation: auraBreathe 4.5s ease-in-out infinite;
}

.heerix-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(71,120,190,.22);
    pointer-events: none;
}

.ring-one {
    width: 72%;
    height: 72%;
    border-left-color: transparent;
    border-right-color: rgba(71,120,190,.42);
    animation: rotateRing 18s linear infinite;
}

.ring-two {
    width: 57%;
    height: 57%;
    border-top-color: rgba(167,176,188,.17);
    border-bottom-color: transparent;
    animation: rotateRingReverse 13s linear infinite;
}

.orbit {
    position: absolute;
    width: 83%;
    height: 29%;
    border: 1px solid rgba(71,120,190,.19);
    border-radius: 50%;
    transform: rotate(-18deg);
}

.orbit-one { animation: orbitMove 12s linear infinite; }
.orbit-two {
    width: 69%;
    height: 23%;
    transform: rotate(35deg);
    border-color: rgba(167,176,188,.10);
    animation: orbitMoveReverse 16s linear infinite;
}

.heerix-wrap {
    position: relative;
    width: 56%;
    height: 56%;
    display: grid;
    place-items: center;
    animation: heerixFloat 4.4s ease-in-out 2s infinite;
}

.entry-heerix {
    width: 100%;
    height: 100%;
    object-fit: contain;
    mix-blend-mode: screen;
    filter: drop-shadow(0 18px 28px rgba(49,95,168,.25));
    transform-origin: center center;
    animation: heerixBootZoom 1.9s cubic-bezier(.16,1,.3,1) both;
}

.eye-glow {
    position: absolute;
    width: 9%;
    height: 11%;
    top: 22%;
    border-radius: 50%;
    background: rgba(71,120,190,.72);
    filter: blur(8px);
    opacity: 0;
    pointer-events: none;
}

.eye-glow-left { left: 37%; }
.eye-glow-right { left: 52%; }

.entry-screen.ready .eye-glow {
    animation: eyeFlicker 1.15s steps(5,end) 1.05s 1;
}

.hero-platform {
    position: absolute;
    bottom: 11%;
    width: 54%;
    height: 11%;
    border: 1px solid rgba(71,120,190,.24);
    border-radius: 50%;
    box-shadow: 0 0 35px rgba(49,95,168,.12);
    transform: perspective(200px) rotateX(58deg);
    opacity: .75;
}

.hero-platform::before,
.hero-platform::after {
    content: "";
    position: absolute;
    inset: 12% 14%;
    border: 1px solid rgba(71,120,190,.20);
    border-radius: 50%;
}

.hero-platform::after {
    inset: 28% 31%;
    background: rgba(71,120,190,.13);
    box-shadow: 0 0 22px rgba(71,120,190,.18);
}

.entry-content {
    align-self: center;
    padding-top: 12px;
}

.heerix-introduction {
    animation: textRise .9s ease 1.15s both;
}

.heerix-introduction h1 {
    font-size: clamp(48px, 5vw, 72px);
    line-height: .98;
    margin: 0 0 13px;
    letter-spacing: -2.5px;
    font-weight: 650;
}

.heerix-introduction h1 span {
    color: var(--cobalt-light);
}

.heerix-introduction p {
    color: var(--grey-light);
    font-size: clamp(19px, 2vw, 24px);
}

.access-area {
    margin-top: clamp(50px, 6vw, 72px);
    max-width: 600px;
    opacity: 0;
    transform: translateY(18px);
    pointer-events: none;
    transition: opacity .75s ease, transform .75s cubic-bezier(.2,.8,.2,1);
}

.entry-screen.ready .access-area {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.access-heading h2 {
    font-size: clamp(27px, 3vw, 38px);
    letter-spacing: 5px;
    font-weight: 650;
    line-height: 1;
}

.access-heading h2 em {
    color: var(--cobalt-light);
    font-style: normal;
}

.heading-line {
    display: block;
    width: 175px;
    height: 1px;
    margin: 18px 0 17px;
    background: linear-gradient(90deg, var(--cobalt), transparent);
    position: relative;
}

.heading-line i {
    position: absolute;
    left: 68%;
    top: 50%;
    width: 6px;
    height: 6px;
    border: 1px solid var(--cobalt-light);
    transform: translate(-50%, -50%) rotate(45deg);
    background: var(--bg);
}

.access-heading p {
    color: var(--grey);
    font-size: 14px;
    margin-bottom: 21px;
}

.glass-input-wrap {
    position: relative;
    width: 100%;
    height: 62px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(167,176,188,.28);
    border-radius: 10px;
    background: linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.012));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.055), 0 12px 40px rgba(0,0,0,.16);
    overflow: hidden;
    transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;
}

.glass-input-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--cobalt-light), transparent);
    opacity: .4;
}

.glass-input-wrap:focus-within {
    border-color: rgba(71,120,190,.75);
    box-shadow: inset 0 1px 0 rgba(255,255,255,.07), 0 0 0 4px rgba(49,95,168,.08), 0 18px 45px rgba(0,0,0,.20);
    transform: translateY(-1px);
}

.glass-lock {
    width: 54px;
    display: grid;
    place-items: center;
    color: var(--grey-light);
    font-size: 22px;
    border-right: 1px solid rgba(167,176,188,.15);
    height: 31px;
}

.glass-input-wrap input {
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0 14px;
    border: 0;
    outline: 0;
    background: transparent;
    color: var(--white);
    font-size: 15px;
}

.glass-input-wrap input::placeholder { color: #667487; }

.glass-arrow {
    width: 55px;
    display: grid;
    place-items: center;
    color: var(--grey-light);
    font-size: 25px;
}

.unlock-button {
    width: 100%;
    height: 58px;
    margin-top: 14px;
    border: 1px solid rgba(71,120,190,.65);
    border-radius: 8px;
    background: linear-gradient(180deg, #315fa8, #274e8a);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    letter-spacing: 2.5px;
    font-size: 11px;
    font-weight: 700;
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
}

.unlock-button b {
    font-size: 20px;
    font-weight: 400;
}

.unlock-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(49,95,168,.22);
    background: linear-gradient(180deg, #3a6eb8, #2b568f);
}

.unlock-button:active { transform: translateY(0); }
.unlock-button:disabled { opacity: .85; cursor: wait; }

.access-error {
    min-height: 18px;
    color: var(--danger);
    font-size: 10px;
    text-align: left;
    margin-top: 9px;
}

.access-footer {
    position: absolute;
    z-index: 4;
    left: 50%;
    bottom: 28px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    color: #7e8997;
    font-size: 9px;
    letter-spacing: 3.2px;
    white-space: nowrap;
}

.access-footer i {
    color: var(--cobalt-light);
    font-style: normal;
}

/* =========================================================
   PORTFOLIO / NAVBAR
========================================================= */


.hidden {
    display: none !important;
}

.portfolio {
    min-height: 100vh;
    background: var(--bg);
}

.navbar {
    position: fixed;
    z-index: 500;
    top: 15px;
    left: 1.5%;
    right: 1.5%;
    height: 68px;
    display: flex;
    align-items: center;
    gap: 22px;
    padding: 0 20px;
    background: rgba(9,14,21,.86);
    backdrop-filter: blur(18px);
    border: 1px solid var(--border);
    box-shadow: 0 10px 35px rgba(0,0,0,.18);
}

.brand {
    min-width: 190px;
    display: flex;
    align-items: center;
    gap: 9px;
}

.brand img {
    width: 38px;
    height: 38px;
    object-fit: contain;
    mix-blend-mode: screen;
    filter: drop-shadow(0 5px 12px rgba(49,95,168,.28));
}

.brand strong {
    display: block;
    color: var(--grey-light);
    letter-spacing: 1.5px;
    font-size: 13px;
}

.brand small {
    display: block;
    color: var(--muted);
    font-size: 7px;
    letter-spacing: 2px;
    margin-top: 2px;
}

.navbar nav {
    flex: 1;
    display: flex;
    justify-content: center;
    gap: clamp(13px, 2vw, 25px);
}

.navbar nav a {
    position: relative;
    color: #c5cdd7;
    font-size: 10px;
    padding: 25px 0;
    letter-spacing: .5px;
    transition: color .25s ease;
}

.navbar nav a:hover,
.navbar nav a.active {
    color: var(--white);
}

.navbar nav a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 15px;
    height: 1px;
    background: var(--cobalt-light);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform .25s ease;
}

.navbar nav a:hover::after,
.navbar nav a.active::after {
    transform: scaleX(1);
}

.connect-button {
    padding: 11px 17px;
    border: 1px solid rgba(71,120,190,.55);
    color: var(--grey-light);
    font-size: 9px;
    letter-spacing: 1.5px;
    white-space: nowrap;
    transition: .25s ease;
}

.connect-button:hover {
    background: rgba(49,95,168,.11);
    border-color: var(--cobalt-light);
    color: white;
}

/* =========================================================
   HOME
========================================================= */

.hero {
    min-height: 100vh;
    position: relative;
    display: grid;
    grid-template-columns: 1.02fr .98fr;
    align-items: center;
    padding: 125px 6vw 70px;
    overflow: hidden;
    background:
        radial-gradient(circle at 73% 48%, rgba(49,95,168,.13), transparent 32%),
        linear-gradient(135deg, #070a0f, #0a1018);
}

.hero-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
        linear-gradient(rgba(167,176,188,.022) 1px, transparent 1px),
        linear-gradient(90deg, rgba(167,176,188,.022) 1px, transparent 1px);
    background-size: 72px 72px;
    opacity: .7;
    animation: backgroundMove 24s linear infinite;
}

.hero::after {
    content: "";
    position: absolute;
    width: 520px;
    height: 520px;
    right: -160px;
    top: 45%;
    transform: translateY(-50%);
    border: 1px solid rgba(71,120,190,.09);
    border-radius: 50%;
    box-shadow: 0 0 100px rgba(49,95,168,.06);
}

.hero-content {
    position: relative;
    z-index: 3;
    max-width: 650px;
}

.hero-kicker {
    color: var(--cobalt-light);
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: 600;
}

.hero-content h1 {
    font-size: clamp(58px, 7.5vw, 108px);
    line-height: .9;
    margin: 18px 0;
    letter-spacing: -5px;
    background: linear-gradient(180deg, #ffffff, #c7d0db);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-content h2 {
    color: #88a7cc;
    font-size: 21px;
    font-weight: 500;
    line-height: 1.4;
    max-width: 540px;
}

.hero-content p {
    color: #9ba7b5;
    font-size: 15px;
    line-height: 1.8;
    max-width: 575px;
    margin: 24px 0 31px;
}

.home-cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(180px, 210px));
    gap: 12px;
}

.home-card {
    position: relative;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    border: 1px solid var(--border);
    background: rgba(15,23,33,.72);
    transition: transform .3s ease, border-color .3s ease, background .3s ease;
}

.home-card:hover {
    transform: translateY(-5px);
    border-color: rgba(71,120,190,.65);
    background: rgba(20,31,45,.92);
    box-shadow: 0 15px 40px rgba(0,0,0,.22);
}

.home-card span:nth-child(2) {
    margin-top: 9px;
    font-size: 12px;
    letter-spacing: 1.2px;
    color: var(--grey-light);
}

.card-number {
    color: #7086a1;
    font-size: 9px;
    letter-spacing: 2px;
}

.home-card b {
    position: absolute;
    right: 14px;
    bottom: 12px;
    color: var(--cobalt-light);
    font-size: 17px;
    font-weight: 400;
}

/* Photo */

.hero-visual {
    position: relative;
    height: 700px;
    display: grid;
    place-items: center;
    z-index: 2;
}

.profile-photo {
    position: relative;
    z-index: 3;
    width: min(78%, 570px);
    height: 650px;
    object-fit: cover;
    object-position: center top;
    border-radius: 4px;
    filter: saturate(.68) contrast(1.07);
    mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
    box-shadow: 0 25px 70px rgba(0,0,0,.25);
}

.tech-circle,
.tech-circle-small {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

.tech-circle {
    width: 550px;
    height: 550px;
    border: 1px solid rgba(71,120,190,.35);
    box-shadow: 0 0 65px rgba(49,95,168,.10), inset 0 0 45px rgba(49,95,168,.04);
    animation: rotateRing 24s linear infinite;
}

.tech-circle-small {
    width: 430px;
    height: 430px;
    border: 1px solid rgba(167,176,188,.12);
    border-top-color: rgba(71,120,190,.4);
    animation: rotateRingReverse 16s linear infinite;
}

/* Scroll */

.scroll-indicator {
    position: absolute;
    z-index: 5;
    bottom: 14px;
    left: 50%;
    transform: translateX(-50%);
    background: none;
    border: none;
    color: var(--muted);
    letter-spacing: 2px;
    font-size: 9px;
}

.scroll-indicator b {
    display: block;
    color: var(--cobalt-light);
    font-size: 20px;
    margin-top: 4px;
    animation: arrowMove 1.5s infinite;
}

/* =========================================================
   PLACEHOLDER SECTIONS
========================================================= */

.placeholder-section {
    min-height: 100vh;
    display: grid;
    place-items: center;
    align-content: center;
    text-align: center;
    border-top: 1px solid rgba(137,157,181,.10);
    background:
        radial-gradient(circle at 50% 20%, rgba(49,95,168,.08), transparent 35%),
        linear-gradient(180deg, #070a0f, #0a1018);
    padding: 80px 6vw;
}

.placeholder-section span {
    color: #7086a1;
    letter-spacing: 3px;
    font-size: 10px;
}

.placeholder-section h2 {
    font-size: clamp(42px, 6vw, 65px);
    margin: 12px 0;
    letter-spacing: -2px;
}

.placeholder-section p {
    color: var(--muted);
}

/* =========================================================
   CONTACT
========================================================= */

.contact-section {
    min-height: 75vh;
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 70px;
    align-items: center;
    padding: 110px 7vw;
    border-top: 1px solid rgba(137,157,181,.12);
    background:
        radial-gradient(circle at 85% 50%, rgba(49,95,168,.10), transparent 35%),
        #080d14;
}

.contact-intro h2 {
    font-size: clamp(42px, 5vw, 58px);
    margin: 12px 0 18px;
    letter-spacing: -2px;
}

.contact-intro p {
    color: #929daa;
    line-height: 1.8;
    max-width: 450px;
}

.contact-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 13px;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 16px;
    background: #0a1119;
    border: 1px solid rgba(137,157,181,.20);
    color: white;
    outline: none;
    transition: .25s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: rgba(71,120,190,.7);
    box-shadow: 0 0 0 3px rgba(49,95,168,.08);
}

.contact-form textarea {
    grid-column: 2;
    grid-row: 1 / 3;
    min-height: 150px;
    resize: vertical;
}

.send-button {
    grid-column: 1;
    padding: 15px;
    border: 1px solid rgba(71,120,190,.65);
    background: #315fa8;
    color: white;
    letter-spacing: 1.5px;
    transition: .25s ease;
}

.send-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(49,95,168,.20);
}

/* =========================================================
   FLOATING HEERIX
========================================================= */

.floating-heerix {
    position: fixed;
    z-index: 700;
    right: 24px;
    bottom: 24px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 13px;
    border: 1px solid rgba(71,120,190,.45);
    background: rgba(10,16,24,.92);
    color: white;
    box-shadow: 0 12px 35px rgba(0,0,0,.25);
    backdrop-filter: blur(12px);
}

.floating-heerix img {
    width: 48px;
    height: 48px;
    object-fit: contain;
    mix-blend-mode: screen;
    filter: drop-shadow(0 6px 12px rgba(49,95,168,.25));
    animation: heerixFloat 3.5s ease-in-out infinite;
}

.floating-heerix strong,
.floating-heerix small {
    display: block;
    text-align: left;
}

.floating-heerix strong {
    color: var(--grey-light);
    font-size: 11px;
    letter-spacing: 1px;
}

.floating-heerix small {
    color: var(--muted);
    margin-top: 3px;
    font-size: 9px;
}

/* =========================================================
   HEERIX CHAT
========================================================= */

.heerix-chat {
    position: fixed;
    z-index: 800;
    right: 24px;
    bottom: 102px;
    width: 310px;
    padding: 19px;
    background: rgba(10,16,24,.97);
    border: 1px solid rgba(71,120,190,.45);
    box-shadow: 0 20px 50px rgba(0,0,0,.32);
    display: none;
}

.heerix-chat.open {
    display: block;
    animation: chatAppear .25s ease;
}

.chat-header {
    display: flex;
    justify-content: space-between;
    color: var(--grey-light);
}

.chat-header button {
    border: none;
    background: none;
    color: white;
    font-size: 24px;
}

.heerix-chat p {
    color: #b5bec9;
    line-height: 1.6;
    margin: 18px 0;
}

.ask-button {
    width: 100%;
    padding: 12px;
    border: 1px solid rgba(71,120,190,.6);
    background: #315fa8;
    color: white;
}

/* =========================================================
   WELCOME MESSAGE
========================================================= */

.welcome-message {
    position: fixed;
    z-index: 10000;
    top: 30px;
    left: 50%;
    transform: translate(-50%, -20px);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 17px;
    background: rgba(10,16,24,.94);
    border: 1px solid rgba(71,120,190,.45);
    box-shadow: 0 15px 45px rgba(0,0,0,.3);
    opacity: 0;
    transition: .4s ease;
    pointer-events: none;
}

.welcome-message.show {
    opacity: 1;
    transform: translate(-50%, 0);
}

.welcome-message strong {
    color: var(--cobalt-light);
    font-size: 10px;
    letter-spacing: 1.5px;
}

.welcome-message span {
    color: var(--grey-light);
    font-size: 11px;
}

/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes stageReveal {
    from { opacity: 0; transform: scale(.78) translateY(25px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes heerixBootZoom {
    0% { opacity: 0; transform: scale(.72); }
    55% { opacity: 1; transform: scale(1.08); }
    78% { transform: scale(.96); }
    100% { opacity: 1; transform: scale(1); }
}

@keyframes heerixFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(.4deg); }
}

@keyframes eyeBlink {
    0%, 8%, 15%, 100% { opacity: 0; transform: scaleY(.12); }
    10%, 13% { opacity: .96; transform: scaleY(1); }
}

@keyframes eyeFlicker {
    0%, 20%, 32%, 50%, 100% { opacity: 0; }
    22%, 28%, 38%, 45% { opacity: .9; }
}

@keyframes auraBreathe {
    0%, 100% { transform: scale(.92); opacity: .6; }
    50% { transform: scale(1.08); opacity: 1; }
}

@keyframes textRise {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes ambientPulse {
    0%, 100% { opacity: .65; transform: translate(-50%, -50%) scale(.96); }
    50% { opacity: 1; transform: translate(-50%, -50%) scale(1.05); }
}

@keyframes statusPulse {
    0%, 100% { opacity: .55; }
    50% { opacity: 1; }
}

@keyframes rotateRing {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
}

@keyframes rotateRingReverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0); }
}

@keyframes backgroundMove {
    from { background-position: 0 0; }
    to { background-position: 144px 144px; }
}

@keyframes arrowMove {
    50% { transform: translateY(6px); }
}

@keyframes chatAppear {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes wrongCode {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-8px); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(4px); }
}

@keyframes unlockFlash {
    0% { box-shadow: 0 0 0 rgba(71,120,190,0); }
    45% { box-shadow: 0 0 90px rgba(71,120,190,.32); }
    100% { box-shadow: 0 0 0 rgba(71,120,190,0); }
}

/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {
    .navbar nav { gap: 14px; }
    .navbar nav a { font-size: 9px; }
    .brand { min-width: 160px; }
    .connect-button { padding-inline: 12px; }
    .hero { padding-left: 4vw; padding-right: 4vw; }
}

/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 850px) {
    .boot-panel {
        width: min(100% - 26px, 500px);
        padding-top: 8px;
    }

    .heerix-stage {
        width: 230px;
        height: 230px;
        margin-bottom: 0;
    }

    .heerix-wrap {
        width: 205px;
        height: 205px;
    }

    .heerix-ring.ring-one {
        width: 220px;
        height: 220px;
    }

    .heerix-ring.ring-two {
        width: 190px;
        height: 190px;
    }

    .access-card {
        margin-top: 20px;
        padding: 21px 20px 18px;
    }

    .navbar {
        top: 0;
        left: 0;
        right: 0;
        height: 62px;
        border-left: 0;
        border-right: 0;
    }

    .navbar nav,
    .connect-button {
        display: none;
    }

    .brand {
        min-width: 0;
    }

    .hero {
        grid-template-columns: 1fr;
        padding: 92px 25px 70px;
    }

    .hero-visual {
        order: -1;
        height: 430px;
    }

    .profile-photo {
        width: 82%;
        height: 410px;
    }

    .tech-circle {
        width: 350px;
        height: 350px;
    }

    .tech-circle-small {
        width: 290px;
        height: 290px;
    }

    .hero-content h1 {
        font-size: 58px;
    }

    .hero-content h2 {
        font-size: 18px;
    }

    .hero-content p {
        font-size: 14px;
    }

    .home-cards {
        grid-template-columns: 1fr 1fr;
    }

    .contact-section {
        grid-template-columns: 1fr;
        padding: 90px 25px;
        gap: 45px;
    }

    .contact-form {
        grid-template-columns: 1fr;
    }

    .contact-form textarea,
    .send-button {
        grid-column: auto;
        grid-row: auto;
    }

    .floating-heerix {
        right: 14px;
        bottom: 14px;
    }
}

@media (max-width: 500px) {
    .entry-background {
        background-size: 48px 48px;
    }

    .heerix-stage {
        width: 200px;
        height: 200px;
    }

    .heerix-wrap {
        width: 180px;
        height: 180px;
    }

    .heerix-ring.ring-one {
        width: 192px;
        height: 192px;
    }

    .heerix-ring.ring-two {
        width: 164px;
        height: 164px;
    }

    .system-label {
        font-size: 8px;
        letter-spacing: 2px;
    }

    .heerix-introduction h1 {
        font-size: 28px;
    }

    .heerix-introduction p {
        font-size: 15px;
    }

    .access-card h2 {
        font-size: 30px;
    }

    .access-footer {
        letter-spacing: 1.8px;
    }

    .home-cards {
        grid-template-columns: 1fr;
    }

    .hero-content h1 {
        font-size: 51px;
        letter-spacing: -3px;
    }

    .hero-visual {
        height: 365px;
    }

    .profile-photo {
        height: 350px;
    }

    .tech-circle {
        width: 290px;
        height: 290px;
    }

    .tech-circle-small {
        width: 235px;
        height: 235px;
    }

    .floating-heerix {
        padding: 7px 10px;
    }

    .floating-heerix img {
        width: 42px;
        height: 42px;
    }

    .floating-heerix small {
        font-size: 8px;
    }

    .heerix-chat {
        right: 14px;
        width: calc(100% - 28px);
    }

    .welcome-message {
        width: calc(100% - 28px);
        justify-content: center;
        text-align: center;
        top: 16px;
    }
}

/* Respect reduced-motion settings */
@media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .001ms !important;
    }
}


/* =========================================================
   V3 ENTRY RESPONSIVE OVERRIDES
========================================================= */

@media (max-width: 900px) {
    .entry-layout {
        grid-template-columns: 1fr;
        width: min(650px, 92vw);
        gap: 10px;
        padding: 28px 0 100px;
        align-content: center;
    }

    .entry-visual {
        min-height: 350px;
    }

    .heerix-stage {
        width: 350px;
        height: 350px;
        min-width: 0;
        min-height: 0;
    }

    .entry-content {
        text-align: center;
        padding-top: 0;
    }

    .access-area {
        margin-inline: auto;
        margin-top: 38px;
    }

    .heading-line {
        margin-left: auto;
        margin-right: auto;
    }

    .access-error { text-align: center; }
}

@media (max-width: 520px) {
    .entry-layout {
        width: min(94vw, 430px);
        padding-top: 16px;
    }

    .entry-visual { min-height: 275px; }

    .heerix-stage {
        width: 275px;
        height: 275px;
    }

    .heerix-introduction h1 {
        font-size: 40px;
        letter-spacing: -1.7px;
    }

    .heerix-introduction p { font-size: 18px; }

    .access-area { margin-top: 31px; }

    .access-heading h2 {
        font-size: 24px;
        letter-spacing: 3px;
    }

    .access-heading p { font-size: 12px; }

    .glass-input-wrap { height: 56px; }
    .unlock-button { height: 54px; }

    .access-footer {
        bottom: 18px;
        font-size: 8px;
        letter-spacing: 2px;
    }
}

@keyframes scanLine {
    from { transform: translateY(-5vh); }
    to { transform: translateY(105vh); }
}

@keyframes orbitMove {
    from { transform: rotate(-18deg) rotate(0deg); }
    to { transform: rotate(-18deg) rotate(360deg); }
}

@keyframes orbitMoveReverse {
    from { transform: rotate(35deg) rotate(360deg); }
    to { transform: rotate(35deg) rotate(0deg); }
}
