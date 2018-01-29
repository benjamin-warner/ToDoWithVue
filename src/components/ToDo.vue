<template>
<div id="todo">
	<h1>To-Do List {{ message }} </h1>
	<form v-on:submit="addToDo">
		<input v-model="message" type="text"/>
	</form>
	<ul>
		<li v-for="(todo, key) in todos">
			{{ todo.text }}
			<button v-on:click="removeTodo(key)">Remove</button>
		</li>
	</ul>
</div>
</template>

<script>

	export default {
		name:"ToDo",
		data() {
			return {
				message: "Hello Ben",
				todos : [],
			}
		},


		created(){
			console.log("Hey there");
			let storedTodoJson = localStorage.getItem("todos") || "[]";
			this.todos = JSON.parse(storedTodoJson);
		},


		methods : {

			addToDo(){
				if(this.message){
					let todo = { text: this.message };
					this.todos.push(todo);
					let todosAsJson = JSON.stringify(this.todos);
					localStorage.setItem("todos", todosAsJson);
					this.message = "";
				}
				return false;
			},

			removeTodo(key){

			}

		}
	}
</script>

<style>
	ul {
		list-style-type: none;
		margin: 0 auto;
		width: 90%;
		padding: 0;

	}
	li {
		border-bottom: 4px dotted blue;
		margin: 0;
	}
</style>
