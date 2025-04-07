const timeSelect = document.getElementById("time-select");
const spinBtn = document.getElementById("spin-btn");
const chaosBtn = document.getElementById("chaos-btn");
const spinner = document.getElementById("spinner");
const result = document.getElementById("result");
const loading = document.getElementById("loading-text");

const activities = {
  quick: [
    "Do 10 jumping jacks",
    "Doodle something weird",
    "Send a meme to a friend",
    "Stretch like a sleepy cat",
    "Clean your glasses or screen",
    "Say 'water' and then go drink some"
  ],
  short: [
    "Watch a 10-min documentary",
    "Try a new hair style",
    "Journal your thoughts",
    "Paint your nails a funky color",
    "Organize your desktop",
    "Do a 15-min dance workout"
  ],
  medium: [
    "Try a quick recipe from Instagram",
    "Sketch something using only circles",
    "Make a silly video and don’t post it",
    "Declutter one drawer",
    "Start a side project (just start)",
    "Write a letter to future you"
  ],
  long: [
    "Paint something dreamy",
    "Take yourself on a solo date",
    "Build a small website for fun",
    "Redecorate a corner of your room",
    "Start a book you've been avoiding",
    "Deep clean something and feel powerful"
  ]
};

const quotes = [
  "✨ Because why not?",
  "🌟 Your vibe demands it.",
  "💡 Genius moves only.",
  "🪩 This is your main character moment.",
  "🎈 Slightly unhinged. Fully fun.",
  "🔮 Cosmic recommendation approved.",
  "📣 You heard the spinner!"
];

const loadingPhrases = [
  "Calculating the maximum fun-per-minute ratio…",
  "Consulting the fun gods…",
  "Flipping a pastel coin…",
  "Asking your inner child what’s up…",
  "Pretending this is productive…"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function spinTheWheel(useRandomTime = false) {
  result.innerHTML = "";
  loading.textContent = "";

  const timeKey = useRandomTime ? getRandomItem(Object.keys(activities)) : timeSelect.value;
  const activity = getRandomItem(activities[timeKey]);

  let phraseIndex = 0;
  const loadingInterval = setInterval(() => {
    loading.textContent = loadingPhrases[phraseIndex % loadingPhrases.length];
    phraseIndex++;
  }, 800);

  spinner.style.animation = "spin 2s ease-out";

  setTimeout(() => {
    spinner.style.animation = "none";
    spinner.style.transform = "scale(1.2)";
    setTimeout(() => spinner.style.transform = "scale(1)", 200);

    clearInterval(loadingInterval);
    loading.textContent = "";

    dropEmojiConfetti(); // 🎉 blast of emojis!

    const resultTemplates = [
      `Time to finally ${activity}. You’ve got this 💪`,
      `Today's chaos pick: ${activity} 🌀`,
      `Softly urging you to: ${activity} 🧸`,
      `You didn’t ask, but you should definitely ${activity} 😌`,
      `✨ Cosmic forces say: ${activity}`,
      `🎈 Surprise! It’s ${activity} o’clock`,
      `Trust me. Just ${activity}. It’s fate.`,
      `The universe whispered: ${activity} 💫`
    ];

    const chosenQuote = getRandomItem(quotes);
    const finalResult = getRandomItem(resultTemplates);

    result.innerHTML = `
      <p style="font-size:1.3rem;">${finalResult}</p>
      <p style="font-style:italic; color:#888;">${chosenQuote}</p>
    `;

  }, 2200);
}

function dropEmojiConfetti() {
  const confetti = document.getElementById("confetti");
  const emojis = ["✨", "🎉", "🌸", "💖", "💫", "🦄", "🌈", "🍭", "🎈", "🪄"];

  for (let i = 0; i < 80; i++) {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerText = getRandomItem(emojis);
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = Math.random() * 100 + "vh";
    emoji.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
    emoji.style.animationDuration = `${Math.random() * 2 + 1.5}s`;

    confetti.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000); // remove after 3s
  }
}

spinBtn.addEventListener("click", () => spinTheWheel(false));
chaosBtn.addEventListener("click", () => spinTheWheel(true));
