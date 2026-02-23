var tasklist = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var button = document.getElementById("btn-add");
var h2 = document.querySelector("h2");
var btn_all = document.querySelector(".btn-all");
var btn_pending = document.querySelector(".btn-pending");
var btn_completed = document.querySelector(".btn-completed");
var list_cintainer = document.querySelector(".list-container");





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

btn_all.addEventListener("click", function() {
  var tasks = tasklist.querySelectorAll("li");

  tasks.forEach(function(task) {
    task.style.display = "flex";
  });
});

btn_pending.addEventListener("click", function() {

    var tasks = tasklist.querySelectorAll("li");

    tasks.forEach(function(i){
      if(i.classList.contains("completed")){
        i.style.display = "none"
      }else{
        i.style.display = "flex";
      }
    });

});

btn_completed.addEventListener("click", function() {
  var tasks = tasklist.querySelectorAll("li");

  tasks.forEach(function(task) {
    if (task.classList.contains("completed")) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
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
