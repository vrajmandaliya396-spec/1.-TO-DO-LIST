var tasklist = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var button = document.getElementById("btn-add");
var h2 = document.querySelector("h2");

button.addEventListener('click', function() {
  if (taskInput.value === "") {
    var li = document.createElement("li");
    alert("Please enter a task");
  }else {

    var li = document.createElement("li");
    var icon = document.createElement("i");
    
    var span = document.createElement("span");
    icon.className = "fa-regular fa-circle";
   

    li.appendChild(icon);
    li.appendChild(document.createTextNode(taskInput.value));
    span.innerHTML = "\u00D7";
    li.appendChild(span);
    
    tasklist.appendChild(li);
  }
  taskInput.value = "";
  saveData();

});

tasklist.addEventListener('click', function(e) {
    
  
  
  var li = e.target.closest("li");

  if (li) {
    li.classList.toggle("completed");
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
    return;
  }
  

});

function saveData(){
  localStorage.setItem("data", tasklist.innerHTML);
}

function displayData(){
  tasklist.innerHTML = localStorage.getItem("data");
}

displayData();
