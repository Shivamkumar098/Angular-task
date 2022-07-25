import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASK } from '../mock_task';
import {Task} from '../tasks'
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOption = {
  headers:new HttpHeaders({
    'content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private apiUrl = "http://localhost:4201/tasks";

  constructor(private http:HttpClient) { }
  getTasks(): Observable<Task[]>{
    // const tasks = of(TASK)
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOption)
  }
  addTaskService(task:Task):Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,httpOption);
  }
}
