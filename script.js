//your code here

//your code here
document.addEventListener("DOMContentLoaded", function () {
	const newTodoInput = document.getElementById("newTodoInput");
	const addTodoBtn = document.getElementById("addTodoBtn");
	const todoList = document.getElementById("todoList");

	function addTodo() {
		const todoText = newTodoInput.value.trim();
		
		if (todoText) {
		    const listItem = document.createElement("li");
		    listItem.textContent = todoText;
		    todoList.appendChild(listItem);

		    newTodoInput.value = "";
		}
	}
	
	addTodoBtn.addEventListener("click", addTodo);

	newTodoInput.addEventListener("keydown", function (event) {
		if (event.key === "Enter") {
			addTodo();
		}
	});
});