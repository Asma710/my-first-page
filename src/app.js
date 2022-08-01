function selectFlowers() {
  let name = prompt("what is your name?");
  let quantity = prompt(" how much flowers do you want to buy?");
  if (quantity >= 5) {
    alert(
      `👏Congratulations ${name},  You Win A Gift,We Will be In Touch Meanwhile, Have A Great Day!`
    );
  } else {
    alert(
      `😀Thank You ${name}, We Will be In Touch Meanwhile, Have A Great Day!`
    );
  }
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", selectFlowers);
