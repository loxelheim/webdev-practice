const doc = document;

const form = doc.querySelector("#item-form");
const list = doc.querySelector("#item-list");
const input = doc.querySelector('#item-input');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const listItem = doc.createElement("li");
    const span = doc.createElement('span');
    const deleteBtn = doc.createElement('button');
    
    span.append(input.value);
    deleteBtn.append("Item Delete")

    listItem.append(span);
    listItem.append(deleteBtn);

    input.value="";

    list.append(listItem);
});


list.addEventListener("click", (event) => {
    console.log("event ==> ", event);
    if (event.target.localName == "button") {
        event.target.closest("li").remove();
    }
})