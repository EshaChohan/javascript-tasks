var todoValue = document.getElementById("task-name");
var todoAlert = document.getElementById("update-info");
var listItems = document.getElementById("list-items");
var addUpdate = document.getElementById("update");
var todo = JSON.parse(localStorage.getItem("task-list"));
if (!todo) {
  todo = [];
}
function CreateToDoItems() {
  if (todoValue.value === "") {
    todoAlert.innerHTML = "Please Enter Your Task!!";
    todoValue.focus();
  } else {
    var alreadyExist = false;
    todo.forEach((element) => {
      if (element.item == todoValue.value) {
        alreadyExist = true;
      }
    });

    if (alreadyExist) {
      setAlertMessage("This Task Is Already Present!!!");
      return;
    }

    var li = document.createElement("li");
    var todoItems = `<div title="If You Completed This Task Then Double Click It." ondblclick="CompletedToDoItems(this)">${todoValue.value}</div><div>
                    <img class="edit task-icons" onclick="UpdateToDoItems(this)" src="assets/edit.png" />
                    <img class="delete task-icons" onclick="DeleteToDoItems(this)" src="assets/delete.png" /></div></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);

    if (!todo) {
      todo = [];
    }
    var itemList = { item: todoValue.value, status: false };
    todo.push(itemList);
    setLocalStorage();
    setAlertMessage("Your Task Is Successfully Created!!");
  }
  todoValue.value = "";
}
function ReadToDoItems() {
  todo.forEach((element) => {
    var li = document.createElement("li");
    var style = "";
    if (element.status) {
      style = "style='text-decoration: line-through'";
    }
    var todoItems = `<div ${style} title="If You Completed This Task Then Double Click It." ondblclick="CompletedToDoItems(this)">${element.item
      }
    ${style === ""
        ? ""
        : '<img class="task-icons" src="assets/check.png" />'
      }</div><div>
    ${style === ""
        ? '<img class="edit task-icons" onclick="UpdateToDoItems(this)" src="assets/edit.png" />'
        : ""
      }
    <img class="delete task-icons" onclick="DeleteToDoItems(this)" src="assets/delete.png" /></div></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
  });
}
ReadToDoItems();
function UpdateToDoItems(e) {
  if (
    e.parentElement.parentElement.querySelector("div").style.textDecoration ===
    ""
  ) {
    todoValue.value =
      e.parentElement.parentElement.querySelector("div").innerText;
    updateText = e.parentElement.parentElement.querySelector("div");
    addUpdate.setAttribute("onclick", "UpdateOnSelectionItems()");
    addUpdate.setAttribute("src", "assets/refresh.png");
    todoValue.focus();
  }
}

function UpdateOnSelectionItems() {
  var alreadyExist = false;
  todo.forEach((element) => {
    if (element.item == todoValue.value) {
      alreadyExist = true;
    }
  });

  if (alreadyExist) {
    setAlertMessage("This Task Is Already Present!!!");
    return;
  }

  todo.forEach((element) => {
    if (element.item == updateText.innerText.trim()) {
      element.item = todoValue.value;
    }
  });
  setLocalStorage();

  updateText.innerText = todoValue.value;
  addUpdate.setAttribute("onclick", "CreateToDoItems()");
  addUpdate.setAttribute("src", "assets/create.png");
  todoValue.value = "";
  setAlertMessage("Your Task Is Successfully Updated!!");
}
function DeleteToDoItems(e) {
  var deleteValue =
    e.parentElement.parentElement.querySelector("div").innerText;

  if (confirm(`Are you sure.\nDo You Want To Delete This Task!. ( "${deleteValue}" )`)) {
    e.parentElement.parentElement.setAttribute("class", "deleted-item");
    todoValue.focus();

    todo.forEach((element) => {
      if (element.item == deleteValue.trim()) {
        todo.splice(element, 1);
      }
    });

    setTimeout(() => {
      e.parentElement.parentElement.remove();
    }, 1000);

    setLocalStorage();
    setAlertMessage("Your Task Is Successfully Deleted!!");
  }
}
function CompletedToDoItems(e) {
  if (e.parentElement.querySelector("div").style.textDecoration === "") {
    var img = document.createElement("img");
    img.src = "assets/check.png";
    img.className = "task-icons";
    e.parentElement.querySelector("div").style.textDecoration = "line-through";
    e.parentElement.querySelector("div").appendChild(img);
    e.parentElement.querySelector("img.edit").remove();

    todo.forEach((element) => {
      if (
        e.parentElement.querySelector("div").innerText.trim() == element.item
      ) {
        element.status = true;
      }
    });
    setLocalStorage();
    setAlertMessage("Your Task Is Successfully Completed!!");
  }
}
function setLocalStorage() {
  localStorage.setItem("task-list", JSON.stringify(todo));
}
function setAlertMessage(message) {
  todoAlert.removeAttribute("class");
  todoAlert.innerText = message;
  setTimeout(() => {
    todoAlert.classList.add("toggleMe");
  }, 1000);
}