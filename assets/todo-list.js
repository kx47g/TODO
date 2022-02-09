'use strict';

const Todo = {
  /*HTML*/
  props: [ 'id', 'content', 'deadline', 'tags'],
  template: `<li><input v-model="checkbox" v-on:change="toggle()" type="checkbox">{{ deadline }} : {{ content }} {{ tags }}</li>`,

  data() {
    return {
      checkbox: false,
    }
  },

  methods: {
    // Controller に 1 つの関数を用意
     
      toggle(){
        console.log(this.checkbox);
        console.log(this.id)
        if (this.checkbox === true){
          current.add(this.id);
        }
        else if (this.checkbox === false){
          current.delete(this.id);
        
        console.log(current);
        }
     },
    },
};

const TodoList = {
  components: {
    Todo,
  },

  data() {
    return {
      todos: [],
    };
  },

  async mounted() {
    const response = await fetch(`${API_ROOT}/todolist`);
    const todos = await response.json();

    this.todos = todos;
  },

  template: `
    <ul>
      <div id="TODO">
        <todo
          v-for="(todo, index) in todos"
          :id="index"
          :content="todo.content"
          :deadline="todo.deadline"
          :tags="todo.tags"
        ></todo></div>
    </ul>
  `,
};
