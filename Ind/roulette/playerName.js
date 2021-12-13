function promptName() {
let value = prompt("Enter name");
while (value == ""){
value = prompt("Are you kidding?!");
}
while (value == " "){
value = prompt("You must enter your name!");
}
while (value == "  "){
value = prompt("You must enter your name!");
}
while(value == null){
value = prompt("Are you kidding?!");
}
document.getElementById("playerName").innerHTML = value;
};
document.addEventListener("DOMContentLoaded", promptName);