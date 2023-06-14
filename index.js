var myNodeList = document.getElementsByTagName("LI");
var i;
for (let i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("BUTTON");
    var txt = document.createTextNode("delete");
    span.className = "close";
    span.appendChild(txt);

    myNodeList[i].appendChild(span);
}

//Click on the delete button to hide the current list items.

var close = document.getElementsByClassName("close");
var i;
for (let i = 0; i < close.length; i++) {
   close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
   }
    
}

//Create a new list item when cliucking on the submit button
var addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    newElement();
});
function newElement() {
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    var li = document.createElement("li");
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something");
    } else {
        var list = document.getElementById("list");
        list.appendChild(li);
    }
    document.getElementById("input").value = "";// to clear the input field after the list has been added.
    var span = document.createElement("BUTTON");
    var txt = document.createTextNode("delete");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
     
    for (let i = 0; close < array.length; i++) {
        const element = array[index];
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
    }    
  }
}