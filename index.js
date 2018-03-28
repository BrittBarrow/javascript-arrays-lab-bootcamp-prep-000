const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(Ralph) {
  kittens.push("Ralph");
}

function destructivelyPrependKitten(Bob) {
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(Broom) {
  var moreKittens = [...kittens, "Broom"]
  return moreKittens;
}

function prependKitten(Arnold) {
  var moreKittens = ["Arnold", ...kittens]
  return moreKittens;
}

function removeLastKitten() {
  var lesskittens = kittens.slice(3)
  return lesskittens;
}

function removeFirstKitten() {
  kittens.slice(1);
}
