$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var sentence1 = $("#asentence").val().split(" ");
    var sentencesplit = [];

alert(sentence1[0]);


    sentence1.forEach(function(part) {

      if (part.length >= 3) {
        sentencesplit.push(part);
      }
    });

    alert(sentencesplit);

    event.preventDefault();
  });
});
