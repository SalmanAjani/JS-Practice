let string = "";
let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;

    if (value == "C") {
      document.querySelector("#display").innerText = "";
      string = "";
    } else if (value == "DELETE") {
      string = string.slice(0, -1);
      document.querySelector("#display").innerText = string;
    } else if (value == "=") {
      let res = eval(string);
      document.querySelector("#display").innerText = res;
      if (eval(string) == undefined) {
        document.querySelector("#display").innerText = "";
      }
    } else {
      string = string + value;
      document.querySelector("#display").innerText = string;
    }
  });
});
