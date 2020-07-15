let todoList = [];
window.onload = window.onbeforeunload = () => {
    let lastTodoList = localStorage.getItem("todolist");
    if(lastTodoList){
        todoList = JSON.parse(lastTodoList);
    }
    render();
}

const render = () => {
    localStorage.setItem('todolist', JSON.stringify(todoList));

    let todoHTML = todoList.map((item, index) => {
        if(item.state){
            if (item.done == true) {
                return `<div class="item-style strick-through"><input type="checkbox" onClick="checkboxClicked(${index})" checked>${item.contents} <div onClick="removeClicked(${index})"><i class="far fa-times-circle" style ="color:red" ></i></div></div>`;
            } else {
                return `<div class="item-style"><input type="checkbox" onClick="checkboxClicked(${index})" >${item.contents} <div onClick="removeClicked(${index})"><i class="far fa-times-circle" style ="color:red"></i></div></div>`;
            }
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
        done: false,
        state: true //true : show, false: hide
    };
    todoList.push(todoItem);
    console.log(todoList);
    document.getElementById("todoInput").value = '';
    render();
};

const allBtnClicked = () =>{
    todoList.forEach(item => {
        item.state = true;
    });
    render();
}

const doneBtnClicked = () =>{
    todoList.forEach((item, index) => {
        console.log(index)
        if(item.done){
            todoList[index].state = true;
        }else{
            todoList[index].state = false;
        }
    })
    
    render();
}

const undoneBtnClicked = () =>{
    todoList.forEach((item,index) => {
        if(item.done){
            todoList[index].state = false;
        }else{
            todoList[index].state = true;
        }
    })
    
    render();
}




