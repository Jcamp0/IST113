$(document).ready(function(){
    $("#addTask").click(function(){
            let inputValue = $('#taskInput').val();
            $("#taskList").append('<li>' + inputValue + '<button style="margin-left:5px;" >' + "delete" + '</button>' + '</li>' );
            $("button").on("click", function(){
                $(this).closest("li").remove(); 
             });
    });
});

