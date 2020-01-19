var container = document.getElementById("container");


let i = 1;
let body = document.getElementsByTagName("body")[0];

for (i; i <= 30; i++) {
  let button = document.createElement("button");
  button.innerHTML = 'Button '+i;
  body.appendChild(button);
  button.addEventListener ("click", function() {
    alert(this.innerHTML);
  });
}


container.style.backgroundColor = "grey";

document.body.style.margin = "0 auto";
document.body.style.padding = "1rem 3rem";
