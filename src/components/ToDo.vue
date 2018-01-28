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
	import "firebase/firestore";

	let db = null;

	export default {
		name:"ToDo",
		data() {
			return {
				message: "Hello Ben",
				todos : [
				{
					text: "My first Todo Item"
				}]
			}
		},

		created () {
			db = Firebase.firestore();
			this.fetchTodos();
		},

		methods : {

			addToDo(){
				
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
