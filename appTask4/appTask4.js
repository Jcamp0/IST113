var myKey = "listValues";
var myItems =[]; 
function setupLocal(){
  
    if(localStorage.getItem(myKey) !== null) {
        let myItemsString = localStorage.getItem(myKey);
         myItems = JSON.parse(myItemsString);
         $(myItems).each(function() {
            createItem(this);
    });
    }//if storage end
    $("#addTask").click(function(){
            
        let input = $('#taskInput').val();
       createItem(input);
      myItems.push(input);
      saveItems();
    });
}//local end

function createItem(itemValue){
    $newElem =$("<li></li>").text(itemValue);
    $newElem.on("click", function(){
        removeItem(this);
    });
    $("#taskList").append($newElem);
    $($newElem).append('<button class="deleteButton">Delete</button>');
}//end of createItem function

function removeItem(item){
    let index = $(item).index();
    myItems.splice(index,1);
    saveItems();
    $(item).remove();
}//end of removeItem function

function saveItems() {
    let myItemsString = JSON.stringify(myItems);
    localStorage.setItem(myKey, myItemsString);
  }

  $(function() {
    setupLocal();
  });
  function contact() {
    var x = document.getElementById("contactDiv");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
  $( document ).ready(function contact() {
    var x = document.getElementById("contactDiv");
    x.style.display = "none";
});
