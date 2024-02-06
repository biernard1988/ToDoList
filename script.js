//selecting elements of the DOM
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addToDo");
const newItem = document.querySelector("#newList");

//tracking edit mode if its ON or OFF
let editMode = false;

//event on click addButton = add new item
addButton.addEventListener("click", function () {
  
    //check if input field is empty
  if (inputField.value === "") {
    alert("Please Enter Something");
  }

  //create elements of the list
  else {
    newItem.classList.remove("new-list");
    const newlist = document.createElement("div");
    newlist.classList.add("item", "d-flex", "align-items-center", "mb-2");
    const newinput = document.createElement("input");
    newinput.classList.add("text", "content", "w-50");
    newinput.disabled = !editMode;
    const editButton = createButton(
      "edit",
      "btn-success",
      "fa-solid",
      "fa-pen-to-square"
    );
    const deleteButton = createButton(
      "delete",
      "btn-danger",
      "fa-solid",
      "fa-trash"
    );

    //gives some space between the buttons
    newinput.style.marginRight = "5px";
    editButton.style.marginRight = "5px";

    //set the value of the input field
    newinput.value = inputField.value;

    //append elements to the list
    newItem.appendChild(newlist);
    newlist.appendChild(newinput);
    newlist.appendChild(editButton);
    newlist.appendChild(deleteButton);

    //disable and enable edit button on the list
    editButton.addEventListener("click", function () {
      editMode = !editMode;
      newinput.disabled = !editMode;
    });

    //delete item on the list
    deleteButton.addEventListener("click", function () {
      newItem.removeChild(newlist);
    });

    //clear the input field after adding the item
    inputField.value = "";
  }
});

//function to create buttons and return it with specific classes/bootstrap
function createButton(className, ...classList) {
  const button = document.createElement("button");
  button.classList.add(className, "btn", ...classList);
  return button;
}
