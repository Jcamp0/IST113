var myKey = "listValues"
var myItems = []; 


function setupLocal() {

     
        if(localStorage.getItem(myKey) !== null) {
      
          
          let myItemsString = localStorage.getItem(myKey);
          
       
          myItems = JSON.parse(myItemsString);
          
         
          $(myItems).each(function() {
            createItem(this);
          });
        } 
        $("#addTask").click(function(){
            
            input = $('#taskInput').val();
            createItem(input);
           myItems.push(input);
           saveItems();
           
    });
    
      }

function createItem(createval){
    $newElem =$("<li></li>").text(createval);

    
    $("#taskList").append($newElem);
    
    
      
    $($newElem).on("click", function(){
         
        removeItem(this);
       
      });
    }

function removeItem(removeval){
    let item = $(removeval).text();
    let index = myItems.indexOf(item);
    
    if (index !== -1) {
        myItems.splice(index, 1);
    }
    saveItems();
     $(removeval).remove();
 
}
function saveItems() {
    let myItemsString = JSON.stringify(myItems);
    localStorage.setItem(myKey, myItemsString);
  }

  $(function() {
    setupLocal();
  });