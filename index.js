
function handleClick(){
  alert("I got clicked");
}

var drumPartsLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumPartsLength; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

}
