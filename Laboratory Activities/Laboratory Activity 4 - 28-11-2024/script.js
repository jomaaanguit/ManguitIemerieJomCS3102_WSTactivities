document.addEventListener("DOMContentLoaded", () => {
    const greetingElement = document.getElementById("greeting");
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning! 🌞";
    } else if (hours < 18) {
        greeting = "Good Afternoon! ☀️";
    } else {
        greeting = "Good Evening! 🌙";
    }

    greetingElement.textContent = greeting;
    greetingElement.style.fontSize = "1.5rem";
    greetingElement.style.fontWeight = "bold";
    greetingElement.style.textAlign = "center";
    greetingElement.style.color = "white";
});

const text = "Get to Know Me! 💫";
const typewriter = document.getElementById("typewriter");

let i = 0;
function typeEffect() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();


const facts = [
    "Style (Taylor's Version) is my favorite song.",
    "I am a two-time ambassador of Samsung Philippines.",
    "My dream destination is Paris!",
    "I am involved in 3 school organizations.",
    "I look like a drunk person when I am sleepy.",
];

document.getElementById("factButton").addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factDisplay = document.getElementById("randomFact");
    factDisplay.textContent = randomFact;
    factDisplay.style.fontSize = "1rem";
    factDisplay.style.textAlign = "center";
    factDisplay.style.color = "white";
});
