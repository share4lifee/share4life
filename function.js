function calc(){

  var a = parseInt(document.querySelector("#foodd").value)

  var b = parseInt(document.querySelector("#bookss").value)

  var c = parseInt(document.querySelector("#edd").value)

  var d = parseInt(document.querySelector("#stationn").value)

  var calculate;

  calculate = a + b + c + d;

alert("Total donation amount is RM" + calculate + ", Press OK to submit your donation");

document.querySelector ("#result").innerHTML = "You have successfully submited your RM" + calculate + " donation";

}
