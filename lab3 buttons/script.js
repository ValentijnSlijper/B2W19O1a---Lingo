var button = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var container1 = document.getElementById("container");



document.body.style.background = "grey";
container.style.backgroundColor = "white";
container.style.padding = "7rem 5rem";
container.style.width = "40%";
container.style.margin = "0 auto";
container1.appendChild(button);
container1.appendChild(button2);
container1.appendChild(button3);

button.innerHTML = "Button1";
button.style.fontSize = "2rem"
button.style.display = "inline-block";
button.style.margin = "0px 5px";
button.style.padding = "2rem 4rem";
button.style.color = "white";
button.style.backgroundColor = "green";


button2.innerHTML = "Button2";
button2.style.fontSize = "2rem";
button2.style.display = "inline-block";
button2.style.margin = "0px 5px";
button2.style.padding = "2rem 4rem";
button2.style.color = "white";
button2.style.backgroundColor = "red";


button3.innerHTML = "Button3";
button3.style.fontSize = "2rem";
button3.style.display = "inline-block";
button3.style.margin = "0px 5px";
button3.style.padding = "2rem 4rem";
button3.style.color = "white";
button3.style.backgroundColor = "blue";





button.addEventListener ("click", function() {
      document.body.style.backgroundColor = 'green';
});

button2.addEventListener ("click", function() {
      document.body.style.backgroundColor = 'red';
});

button3.addEventListener ("click", function() {
    document.body.style.backgroundColor = "blue";
});
