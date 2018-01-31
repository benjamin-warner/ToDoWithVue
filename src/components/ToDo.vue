<template>
<div id="todo">
	<div id="todoInput">
		<h1>To-Do List</h1>
		<form v-on:submit="addToDo">
			<div id="inputFields">
				<input v-model="newToDo" type="text"/>
				Due by: <input type="date" id="dateInput" v-model="selectedDate"/>
			</div>
		</form>
	</div>
	<ul>
		<li v-for="(todo, key) in todos">
			<div id="postDate"> Posted: {{ todo.postDate }} </div>
			<div id="text">{{ todo.text }}</div>
			<div id="dueDate">
				Due by: {{ todo.dueDate }}
				<button v-on:click="removeTodo(key)">Delete</button>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	import {getFormattedDate} from '../TimeHelpers';
	import {isDateInThePast} from '../TimeHelpers';

	export default {
		name:"ToDo",
		data() {
			return {
				todos : [],
				newToDo : "",
				selectedDate : ""
			}
		},

		created(){
			let storedTodoJson = localStorage.getItem("todos") || "[]";
			this.todos = JSON.parse(storedTodoJson);
			this.selectedDate = getFormattedDate(new Date());
		},

		methods : {

			addToDo(){
				if(this.newToDo){
					if(isDateInThePast(new Date(this.selectedDate))){
						alert("Pick a date in the future!");
						return;
					}
					let todo = { text: this.newToDo, 
								postDate: getFormattedDate(new Date()),
								dueDate : this.selectedDate 
							};
					this.todos.push(todo);
					this.updateToDoStorage();
					this.newToDo = "";
				}
			},

			removeTodo(key){
				this.todos.splice(key, 1);
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
	#todoInput {
		background: #f5f5f5;
		box-shadow: 4px 4px 3px #c5c5c5;
		width: 90%;
		padding: 0;
		padding-top: 15px;
		padding-bottom: 15px;
		margin: 0 auto;
		margin-bottom: 4%;
	}

	#postDate{
		position: absolute; 
		left: 8%;
		font-size: 10pt;
	}

	#dueDate{
		position: absolute; 
		right: 8%;
		font-size: 10pt;
	}

	#text{
		margin-top:4%;
	}

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0 auto;
		width: 90%;

	}
	li {
		background: #f5f5f5;
		box-shadow: 4px 4px 3px #c5c5c5;
		padding: 20px;
		margin-bottom: 1%;
		padding-bottom: 40px;
		overflow-wrap: break-word;
	}
</style>
