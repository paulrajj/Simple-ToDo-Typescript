window.onload = function() {
    var input = document.getElementById('addinp');
    var addbtn = document.getElementById('addbtn');

    function undoCompleteTodo(itemId) {
        undoCompleteItem(itemId);
        showlist();
    }
    function  doneTodo(itemId, newTodo) {
        doneItem(itemId, newTodo);
        showlist();
    }
    function editTodo(itemId) {
        editItem(itemId);
        showlist();
    }
    function deleteTodo(itemId) {
        deleteItem(itemId);
        showlist();
    }
    function completeTodo(itemId) {
        console.log(itemId);
        completeItem(itemId);
        showlist();
    }
    function showlist() {
        var newTodoDiv = document.getElementById('newTodo');
        newTodoDiv.innerHTML = "";
        Object.keys(list.listItems).forEach(function(temp)
        {
            if (list.listItems[temp].status == "ACTIVE") {
                var newItem = document.createElement("div");
                newItem.setAttribute(
                    "class", "todoStatusACTIVE" + " " + "breathVertical"+" " + "breathHorizontal"+" "+"newItem"
                );
                var complete_button = document.createElement("button");


                complete_button.setAttribute("class", "breathHorizontal  breathVertical");
                complete_button.innerText = "Mark Complete";
                complete_button.onclick = function () {
                    completeTodo(temp);
                    showlist();
                }
                newItem.appendChild(complete_button);
                var newContent = document.createTextNode(list.listItems[temp].todo);

                newItem.appendChild(newContent);
                var edit_button = document.createElement("button");

                edit_button.setAttribute("class","breathHorizontal breathVertical floatRight" );
                edit_button.innerText = "Edit Todo";
                edit_button.onclick = function () {
                    editTodo(temp);
                    showlist();
                }
                newItem.appendChild(edit_button);
                var delete_button = document.createElement("button");
                delete_button.setAttribute("class", "breathHorizontal breathVertical floatRight");
                delete_button.innerText = "Delete";
                delete_button.onclick = function () {
                    deleteTodo(temp);
                    showlist();
                }
                newItem.appendChild(delete_button);
                newTodoDiv.appendChild(newItem);
            }
            if(list.listItems[temp].status == 'EDIT'){
                var newItem = document.createElement("div");
                newItem.setAttribute(
                    "class", "todoStatus"  + " " + "breathVertical"+" " + "breathHorizontal"+" "+"newItem"
                );
                var input_text = document.createElement("input");
                input_text.setAttribute("style","font-size:25px;");
                input_text.setAttribute("value", list.listItems[temp].todo);
                input_text.setAttribute("type", "text");
                newItem.appendChild(input_text);
                var done_button = document.createElement("button");
                done_button.innerText = "Done";
                done_button.setAttribute("class", "breathHorizontal  breathVertical");
                done_button.onclick = function () {
                    doneTodo(temp, input_text.value);
                    showlist();
                }
                newItem.appendChild(done_button);
                var delete_button = document.createElement("button");
                delete_button.setAttribute("class", "breathHorizontal breathVertical floatRight");
                delete_button.innerText = "Delete";
                delete_button.onclick = function () {
                    deleteTodo(temp);
                    showlist();
                }
                newItem.appendChild(delete_button);
                newTodoDiv.appendChild(newItem);
            }
            if(list.listItems[temp].status == 'COMPLETE'){
                var newUndoCompleteItem = document.createElement("div");
                newUndoCompleteItem.setAttribute(
                    "class", "todoStatusCOMPLETE" + " " + "breathVertical"+" " + "breathHorizontal"+" "+"newItem"
                );
                var undo_complete_button = document.createElement("button");
                undo_complete_button.setAttribute("class", "breathHorizontal  breathVertical");
                undo_complete_button.innerHTML = "Mark Incomplete";

                undo_complete_button.onclick = function () {
                    undoCompleteTodo(temp);
                    showlist();
                }
                newUndoCompleteItem.appendChild(undo_complete_button);
                var newUndoContent = document.createTextNode(list.listItems[temp].todo);
                newUndoCompleteItem.appendChild(newUndoContent);

                var delete_button = document.createElement("button");
                delete_button.setAttribute("class", "breathHorizontal breathVertical floatRight");
                delete_button.innerText = "Delete";
                delete_button.onclick = function () {
                    deleteTodo(temp);
                    showlist();
                }
                newUndoCompleteItem.appendChild(delete_button);
                newTodoDiv.appendChild(newUndoCompleteItem);
            }
        })
    }
    
    addbtn.onclick = function () {
        var value = input.value;
        addItem(value, "ACTIVE");
        showlist();
        input.value = "";
    };

}