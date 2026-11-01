
/* =================================
   POOJA'S BIRTHDAY WEBSITE
================================= */

// Birthday date: December 13, 2026
const birthday = new Date(2026, 11, 13, 0, 0, 0);

// Daily messages
const messages = [
    "You deserve all the happiness in this world! 💗",
    "Never forget how special you are to me. 🌷",
    "Your smile makes ordinary days beautiful. 🎀",
    "Life is sweeter with a bestie like you! 🧸",
    "Sending you a virtual hug today! 💕",
    "Keep shining, my favourite girl! ✨",
    "More memories, more laughter, more us! ♡",
    "You are a beautiful reason to smile. 🌸",
    "Your friendship is one of my favourite gifts. 💌",
    "I hope all your dreams come true! 🎂"
];

// Display countdown
function updateCountdown() {

    const now = new Date();
    const difference = birthday.getTime() - now.getTime();

    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        document.getElementById("dailyMessage").textContent =
            "IT'S YOUR SPECIAL DAY! HAPPY BIRTHDAY POOJA! 🎂💗";

        document.getElementById("dailyNote").textContent =
            "Happy Birthday, Pooja! May your day be filled with love, laughter and endless happiness! 🌷";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    // Select a daily message based on remaining days
    const messageIndex = days % messages.length;

    document.getElementById("dailyMessage").textContent =
        messages[messageIndex];

    document.getElementById("dailyNote").textContent =
        messages[messageIndex];
}

updateCountdown();

setInterval(updateCountdown, 1000);


const letterPopup = document.getElementById("letterPopup");

document.querySelectorAll(".envelope").forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.letter);
        const selectedLetter = letters[index];

        document.getElementById("letterTitle").textContent =
            selectedLetter.title;

        document.getElementById("letterContent").textContent =
            selectedLetter.message;

        letterPopup.classList.remove("hidden");
    });

});

document.getElementById("closeLetter").addEventListener("click", () => {
    letterPopup.classList.add("hidden");
});

letterPopup.addEventListener("click", event => {
    if (event.target === letterPopup) {
        letterPopup.classList.add("hidden");
    }
});


// BIRTHDAY CAKE / BLOW CANDLE

const wishButton = document.getElementById("wishBtn");
const flame = document.getElementById("flame");
const cakeText = document.getElementById("cakeText");

let candleBlown = false;

wishButton.addEventListener("click", () => {

    if (!candleBlown) {

        flame.classList.add("blown");

        cakeText.textContent =
            "Your wish has been sent to the universe! ✨💗";

        wishButton.textContent = "Light the candle again 🕯️";

        candleBlown = true;

        createHearts(30);

    } else {

        flame.classList.remove("blown");

        cakeText.textContent =
            "Your birthday wish is waiting... ♡";

        wishButton.textContent = "Blow the candle ✨";

        candleBlown = false;
    }

});


// FLOATING HEARTS

function createHearts(amount = 8) {

    const container = document.getElementById("floating-hearts");

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("span");

        heart.className = "float-heart";

        const emojis = ["💗", "💕", "🌸", "🎀", "♡", "✨"];

        heart.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (5 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9500);
    }
}

setInterval(() => createHearts(3), 2000);


// ORIGINAL BACKGROUND MELODY
// Uses Web Audio API. No external song is required.

const music = new Audio("audio/kannu thangoo.mpeg");

music.loop = true;
music.volume = 0.5;

const musicButton = document.getElementById("musicBtn");

musicButton.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "♫ Music On";
        } catch (error) {
            console.log("Unable to play music:", error);
        }
    } else {
        music.pause();
        musicButton.textContent = "♫ Play Music";
    }

});



// BIRTHDAY DAY SPECIAL MESSAGE

if (
    new Date().getFullYear() === 2026 &&
    new Date().getMonth() === 11 &&
    new Date().getDate() === 13
) {

    document.querySelector(".hello").textContent =
        "Happiest Birthday, Pooja! 🎂";

    document.querySelector(".hero h1").innerHTML =
        "Today is all about<br><span>YOU!</span> 💗";

    createHearts(35);
}
