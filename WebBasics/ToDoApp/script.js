// grab all necessary elements
let input = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#todo-send");
const targetList = document.querySelector("#todo-target");


// general funtionality for appending todo list items
function appendTodoItem(textInput, targetContainer, completed = false){
    // prep li content
    const text = document.createElement("span");
    text.append(textInput);
    
    const doneButton = document.createElement("button");
    doneButton.classList.add("outline", "todo-done");
    doneButton.append("☑️");

    const delButton = document.createElement("button");
    delButton.classList.add("outline", "todo-delete");
    delButton.append("❌");

    const item = document.createElement("li");
    item.classList.add("todo-item");
    if (completed) {
        item.classList.add("complete")
    }

    item.append(doneButton);
    item.append(text);
    item.append(delButton);
    
    targetContainer.append(item);
}


// event listener for adding new todo item
addTodoBtn.addEventListener("click", (event)=>{
    // console.log("event ==> ", event);
    let userInput = input.value;

    appendTodoItem(userInput, targetList);

    userInput = "";
})

// event listener for buttons inside target list
targetList.addEventListener("click", (event)=>{
    const target = event.target;
    const tClasses = target.classList;
    const listItem = target.closest("li");

    // remove todo item
    if (tClasses.contains("todo-delete")) {
        listItem.remove()
    }

    // mark an item as done
    if (tClasses.contains("todo-done")) {
        if (!listItem.classList.contains("complete")) {
            listItem.classList.add("complete")
        } else if (listItem.classList.contains("complete")) {
            listItem.classList.remove("complete")
        }
    }
    
});



// function for loading existing data, assuming we have some sort database later on
function loadTodoList(todoData, targetContainer) {
    todoData.forEach(element => {
        appendTodoItem(element.title, targetContainer, element.completed)
    });
}

async function getTodoDataFromAPI() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todoData =  await response.json();

    loadTodoList(todoData, targetList);
}

getTodoDataFromAPI();