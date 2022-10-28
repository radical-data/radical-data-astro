function getRandomWord() {
  const words = [
    "accountable",
    "active",
    "activist",
    "analogue",
    "anticolonial",
    "antiracist",
    "appropriate",
    "artistic",
    "autonomous",
    "beautiful",
    "caring",
    "childlike",
    "cinematic",
    "conceptual",
    "common",
    "communal",
    "compassionate",
    "consenting",
    "constructive",
    "creative",
    "critical",
    "curious",
    "dancing",
    "decolonial",
    "democratic",
    "dissenting",
    "ecological",
    "emancipatory",
    "embodied",
    "emergent",
    "emotional",
    "empathetic",
    "empowering",
    "enlightened",
    "erotic",
    "experimental",
    "fair",
    "feeling",
    "feminist",
    "finite",
    "flexible",
    "forgetful",
    "forensic",
    "fragile",
    "fuzzy",
    "glorious",
    "growing",
    "guerrilla",
    "healing",
    "hopeful",
    "human",
    "humanised",
    "illuminating",
    "imperfect",
    "impermanent",
    "indigenous",
    "intentional",
    "intersectional",
    "intimate",
    "investigative",
    "joyful",
    "just",
    "justified",
    "liberated",
    "liberating",
    "limited",
    "loving",
    "lucid",
    "maximal",
    "meditative",
    "minimal",
    "mortal",
    "moving",
    "narrative",
    "non-binary",
    // "non-human",
    "nonhuman",
    "nonviolent",
    "open",
    "pacific",
    "passionate",
    "peaceful",
    "people's",
    "playful",
    "plural",
    "pluralistic",
    "poetic",
    "possible",
    "powerful",
    "punk",
    "purposeful",
    "queer",
    "quiet",
    "reconciliatory",
    "reflexive",
    "rehabilitative",
    "remembering",
    "restorative",
    "revolutionary",
    "rhythmic",
    "searching",
    // "self-destructing",
    "sensuous",
    "shining",
    "singing",
    "slow",
    "small",
    "soft",
    "speculative",
    "spiritual",
    "strange",
    "subversive",
    "sufficient",
    "sustainable",
    "temporary",
    "transcendent",
    "transformative",
    "transmutative",
    "transgressive",
    "transparent",
    "unbiased",
    "unbounded",
    "unrealised",
    "utopian",
    "vulnerable",
    "weird",
    "wise",
    "yearning",
  ];
  return words[Math.floor(Math.random() * words.length)];
}

// modify DOM to replace h1 with a random word
function setNewText() {
  const h2 = document.querySelector("h2");
  randomWord_1 = getRandomWord();
  randomWord_2 = getRandomWord();
  phrase = randomWord_1 + " " + randomWord_2 + " data";
  h2.innerText = phrase;
}

setNewText();

const { matches: motionOK } = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
);

if (motionOK) {
  setInterval(setNewText, 1500);
}

// var counter = 0;
// var myFunction = function () {
//   setNewText();
//   if (counter % 14 <= 10) {
//     setTimeout(myFunction, 150);
//   } else {
//     setTimeout(myFunction, 1500);
//   }
//   counter += 1;
// };
// setTimeout(myFunction, counter);
