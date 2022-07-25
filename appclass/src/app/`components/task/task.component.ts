import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../tasks'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks:Task[]= [];
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {

    this.taskService
    .getTasks()
    .subscribe((tasks)=>(this.tasks = tasks));
  }
deleteTask(task:Task){
  this.taskService.deleteTask(task).subscribe(()=>(
    this.tasks = this.tasks.filter( t =>t.id !==task.id)
  ));}
  taskToggle(task:Task){
    task.reminder=!task.reminder;
    // console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe()
  }
  addTask(task:Task){
    // console.log(task);
    this.taskService.addTaskService(task).subscribe((task)=>this.tasks.push(task));
  }
}



