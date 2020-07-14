let todoList = [];

const addTodo = () => {
  let todo = document.getElementById("todoInput").value;

  let itemTodo = { contents: todo, complete: false };

  todoList.push(itemTodo);
  console.log(todoList);
  render();
};

const toggleDone = (index) => {
  todoList[index].complete = true;
  console.log(todoList);
  render();
};

const render = () => {
  let todoHTML = todoList
    .map((item, index) => {
      if (item.complete == false) {
        return `<div class="item-style">Todo:${item.contents} <a onclick="toggleDone(${index})" href="#">Done</a></div>`;
      } else {
        return `<div class="item-style">Todo:${item.contents} <a onclick="toggleDone(${index})" href="#">UnDone</a></div>`;
      }
    })
    .join("");
  document.getElementById("resultArea").innerHTML = todoHTML;
};