import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/tasks';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css']
})
export class TaskItemsComponent implements OnInit {
  faTimes= faTimes
  @Input() task?:Task; 

  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();


  ngOnInit(): void {
  }
onDelete(task:Task){
//   console.log(task);
  this.onDeleteTask.emit(task)
 }
 taskToggle(task:Task){
  this.onToggleReminder.emit(task)
 }
}
