function runTaskManager(){
    let taskInput = document.getElementById("taskInput");
    let addTask = document.getElementById("addTask");
    let taskList = document.getElementById("taskList");

        addTask.addEventListener("click", function(){
    let newElem = document.createElement("LI");
    let newContent = document.createTextNode(taskInput.value);
    let deleteButton = document.createElement("button");       
    deleteButton.innerHTML = "Remove";
    
    
    newElem.appendChild(newContent);
    newElem.appendChild(deleteButton);
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", function() {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    
    newElem.classList.add(taskList.value);
  
    
    taskList.appendChild(newElem);
  });

}



    

runTaskManager();