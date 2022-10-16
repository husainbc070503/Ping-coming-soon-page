function validate() {
  var span = document.getElementById("error");
  var value = document.getElementById("email").value;
  var input = document.getElementById("email");
  if (value == "") {
    span.innerHTML = "Please provide email address";
    input.classList.toggle("caution");
  } else {
    var atpos = value.indexOf("@");
    var dotpos = value.lastIndexOf(".");
    if (atpos == -1 || dotpos < 0) {
      value = "";
      span.innerHTML = "Please provide a valid email address";
      input.classList.toggle("caution");
    } else {
      alert("Subscribed successfully!!");
      location.reload();
    }
  }
}
