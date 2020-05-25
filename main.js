

function outputUpdate(level) {
  if (level == 1) {
    //document.getElementById('agreementLevel').value = "level baby";
    document.getElementById('agreementLevel').value = "Strongly Disagree";
    //alert("hello");
  }
  if (level == 2) {
    document.getElementById('agreementLevel').value = "Disagree";
    //alert("hello");
  }
  if (level == 3) {
    document.getElementById('agreementLevel').value = "Slightly Disagree";
    //alert("hello");
  }
  if (level == 4) {
    document.getElementById('agreementLevel').value = "Neutral";
    //alert("hello");
  }
  if (level == 5) {
    document.getElementById('agreementLevel').value = "Slightly Agree";
    //alert("hello");
  }
  if (level == 6) {
    document.getElementById('agreementLevel').value = "Agree";
    //alert("hello");
  }
  if (level == 7) {
    document.getElementById('agreementLevel').value = "Strongly Agree";
    //alert("hello");
  }
	//document.querySelector('#agreementLevel').value = level;
}

function main() {
  //document.getElementById("myButton").click();
  alert("Thanks for participating in the survey!");

}
