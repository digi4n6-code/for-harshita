const text = `I know you don’t like roses, so I’m giving you tulips.
Not because they’re prettier,
but because they’re simpler, honest,
and they last longer — just like things that actually matter. 🌷`;

let index = 0;

function revealMessage() {
  document.getElementById("message").style.display = "block";
  document.querySelector(".btn").style.display = "none";
  typeEffect();
}

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 38);
  }
}
