import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
      el: "#app",
      data: {
          toDoList: [],
          newToDoItem: ""
      },
      methods: {
          saveToDoItem: function () {
            this.toDoList.push(this.newToDoItem);
            this.newToDoItem = "";
          }
      }
    });
  });
  