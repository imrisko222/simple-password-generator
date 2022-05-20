let one = document.getElementById("input1");
let two = document.getElementById("input2");
let three = document.getElementById("input3");
let four = document.getElementById("input4");
let btn = document.querySelector(".btn");
let chars = "0123456789abcdefghijklmnopqrstuvwxyz/";
let random;
let arr = "";

// listener na button
btn.addEventListener("click", () => {
  loop(one);
  loop(two);
  loop(three);
  loop(four);
});

function loop(input) {
  for (let i = 0; i < chars.length; i++) {
    random = Math.floor(Math.random() * 37);
    if (i < 16) {
      arr += chars.charAt(random);

      if (arr.length === 16) {
        input.value = arr;
        arr = "";
      }
    }
  }
}
