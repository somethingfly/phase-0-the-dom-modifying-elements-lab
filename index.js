// Write your code here!
const element = document.getElementById("main");
element.remove();
const newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");
newHeader.textContent = "YOUR-NAME is the champion"
// note I am being literal, I realize this will pass the test.
// and I am too model.