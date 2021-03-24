import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  newTodoLabel: string = '';
  todos = [
    { 
      label: 'Pay to Mike', 
      done: true, 
      priority: 1
    },
    { 
      label: 'Go to dentist', 
      done: false, 
      priority: 2
    },
    { 
      label: 'Bring Milk', 
      done: false, 
      priority: 3
    },
  ];

  addTodo(newTodoLabel: string) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo: any){
    this.todos = this.todos.filter (t => t.label !== todo.label );
  }

  updateDone(todo: any){
    if (todo.done){
      todo.done = false;
    } else {
      todo.done = true;
    }
  }
}
