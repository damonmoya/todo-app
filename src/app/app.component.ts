import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
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
}
