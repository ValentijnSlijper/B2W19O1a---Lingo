var woord = document.getElementById("woordInput").value;
var guess = document.getElementById("guessInput").value;
button.setAttribute("onclick", "checkWord(word)");

function checkWord(event){

  var woordArray = woord.split("");
  var guessArray = guess.split("");



  for (var i = 0; i< guessArray.length; i++) {
    if(guessArray[i] == woordArray[i]){
      document.getElementById("letter_" + (i+1)).style.innerText = guessArray[i];
      document.getElementById("letter_" + (i+1)).style.border = "1px";
      document.getElementById("letter_" + (i+1)).style.borderColor = "green";
    }
    woordArray[i] = null;
    guessArray[i] = null;
  }

}


for (var i = 0; i< guessArray.length; i++) {
  if(guessArray[i] == null){
    if(woordArray.indexOf(guessArray[i]) != -1){
    document.getElementById("letter_" + (i+1)).style.innerText = guessArray[i];
    document.getElementById("letter_" + (i+1)).style.border = "1px";
    document.getElementById("letter_" + (i+1)).style.borderColor = "green";
  }
}
