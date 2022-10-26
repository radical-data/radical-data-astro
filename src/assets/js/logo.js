var h1;

// would be great to weight the nouns, mostly data but sometimes the other ones
var noun = ["data", "surveys", "technology", "ai", "statistics", "metrics"];
var ad = [];
let t = 1;

function setup() {
  noCanvas();
  h1 = createElement("h1", "radical data");
  frameRate(0.5);
  ad = adverb.concat(adjective);
}

function draw() {
  if (t % 4 == 0) {
    h1.html("radical data");
  } else {
    var randomAd = int(random(ad.length));
    var randomAdj = int(random(adjective.length));
    var randomNoun = int(random(noun.length));
    // create a full string w intro text
    fullString =
      ad[randomAd] + " " + adjective[randomAdj] + " " + noun[randomNoun];
    h1.html(fullString);
  }
  t++;
}
