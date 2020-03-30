import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
         data: {
            toDoList: [],
            newToDoItem: "",
            priority: ""
        },
        methods: {
            saveToDoItem: function () {
                this.toDoList.push({task: this.newToDoItem, priority: this.priority});
                this.newToDoItem = "";
            }
        }
    });
  });
  