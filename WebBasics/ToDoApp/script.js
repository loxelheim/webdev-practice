// grab all necessary elements
let input = document.querySelector("#todo-input");
const addTodoBtn = document.querySelector("#todo-send");
const targetList = document.querySelector("#todo-target");


// general funtionality for appending todo list items
function appendTodoItem(textInput, targetContainer){
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
    item.append(doneButton);
    item.append(text);
    item.append(delButton);
    
    targetContainer.append(item);
}


// event add new todo item
addTodoBtn.addEventListener("click", (event)=>{
    // console.log("event ==> ", event);
    let userInput = input.value;

    appendTodoItem(userInput, targetList);

    userInput = "";
})

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





const dummyData = [
  {
    userId : 1,
    id : 1,
    title : "delectus aut autem",
    completed : false
  },
  {
    userId : 1,
    id : 2,
    title : "quis ut nam facilis et officia qui",
    completed : false
  },
  {
    userId : 1,
    id : 3,
    title : "fugiat veniam minus",
    completed : false
  }
]
// function for loading existing data, assuming we have some sort database later on
function loadTodoList(todoData, targetContainer) {
    todoData.forEach(element => {
        appendTodoItem(element.title, targetContainer)
    });
}

loadTodoList(dummyData, targetList)