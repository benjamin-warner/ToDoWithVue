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
	import Firebase from "firebase"

	let db = null;

	export default {
		name:"ToDo",
		data() {
			return {
				message: "Hello Ben",
				todos : [],
			}
		},

		created () {
			db = Firebase.database();
			this.fetchTodos();
		},

		methods : {

			fetchTodos(){
				var _this = this;
				db.ref("todos").once("value").then(function(snapshot){
					snapshot.forEach(function(data){
						_this.todos.push(data.val());
					});
				});
			},

			addToDo(){
				if(this.message){
					db.ref('todos').push({
						text: this.message,
						date : new Date().getTime()
					});
					this.message = "";
				}
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
