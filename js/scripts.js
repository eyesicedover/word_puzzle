$(document).ready(function() {
  $(".puzzleForm").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    var array = userInput.split("");
    var puzzleArray = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i] == "a" || array[i] == "e" || array[i] == "i" || array[i] == "o" || array[i] == "u") {
        puzzleArray.push("-");
      } else {
        puzzleArray.push(array[i]);
      }
    }
    var puzzleString = puzzleArray.join("");
    $(".result").text(puzzleString);

  });
});
