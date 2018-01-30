<template>
<div id="todo">
	<div id="todoinput">
		<h1>To-Do List</h1>
		<form v-on:submit="addToDo">
			<input v-model="message" type="text"/>
		</form>
	</div>
	<ul>
		<li v-for="(todo, key) in todos">
			{{ todo.text }}
			<button v-on:click="removeTodo(key)">Done</button>
		</li>
	</ul>
</div>
</template>

<script>

	export default {
		name:"ToDo",
		data() {
			return {
				message: "",
				todos : [],
			}
		},

		created(){
			let storedTodoJson = localStorage.getItem("todos") || "[]";
			this.todos = JSON.parse(storedTodoJson);
		},

		methods : {

			addToDo(){
				if(this.message){
					let todo = { text: this.message };
					this.todos.push(todo);
					this.updateToDoStorage();
					this.message = "";
				}
			},

			removeTodo(key){
				this.todos.splice(key, 1);
				console.log(this.todos);
				this.updateToDoStorage();
			},

			updateToDoStorage(){
				let todosAsJson = JSON.stringify(this.todos);
				localStorage.setItem("todos", todosAsJson);
			}

		}
	}
</script>

<style>
	#todoinput {
		background: #f5f5f5;
		box-shadow: 4px 4px 3px #c5c5c5;
		display: inline-block;
		padding: 5px 50px 15px;
		margin-bottom: 10px;
	}
	
	ul {
		list-style-type: none;
		margin: 0 auto;
		width: 90%;
		padding: 0;

	}
	li {
		background: #f5f5f5;
		box-shadow: 4px 4px 3px #c5c5c5;
		padding: 10px;
		margin-bottom: 10px;
		text-overflow: auto;
	}
</style>
