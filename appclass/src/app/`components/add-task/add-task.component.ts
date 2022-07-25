import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
   text:string="";
   day:string="";
   reminder:boolean=false;
    showAddTask?:boolean;
    subscription:Subscription;

  constructor(private uiService:UiService) {
    this.subscription=this.uiService
    .ontoggle()
    .subscribe((value)=>(this.showAddTask=value))
   }

  @Output() onAddTask= new EventEmitter();

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert("pls add a task");
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask)

    this.text = " ";
    this.day="";
    this.reminder=false;

  }
}
