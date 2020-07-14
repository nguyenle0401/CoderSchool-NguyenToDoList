let todoList = [];

const render = () => {
    let todoHTML = todoList.map((item, index) => {
        if (item.done == true) {
            return `<div class="item-style"><input type="checkbox" onClick="checkboxClicked(${index})" checked>${item.contents} <div onClick="removeClicked()"><i class="far fa-times-circle" style ="color:red" ></i></div></div>`;
        } else {
            return `<div class="item-style"><input type="checkbox" onClick="checkboxClicked(${index})" >${item.contents} <div onClick="removeClicked()"><i class="far fa-times-circle" style ="color:red"></i></div></div>`;
        }
    })
        .join("");
    document.getElementById("resultArea").innerHTML = todoHTML;
};


const checkboxClicked = (index) => {
    todoList[index].done = !todoList[index].done;
    console.log(todoList);
    render();
};
const removeClicked = (index) =>{
    todoList.splice(index,1)
    render();
}

const addTodoItemClicked = () => {
    let todoValue = document.getElementById("todoInput").value;

    let todoItem = {
        contents: todoValue,
        done: false
    };

    todoList.push(todoItem);
    console.log(todoList);
    render();
};
const allBtnClicked = (index) =>{
    render();
}
const doneBtnClicked = (index) =>{
    todoList.splice(index,1)
    render();
}
const undoneBtnClicked = (index) =>{
    todoList.splice(index,1)
    render();
}




