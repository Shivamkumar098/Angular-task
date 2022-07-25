import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './`components/task/task.component';
import { TaskItemsComponent } from './`components/task-items/task-items.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './`components/add-task/add-task.component';
import { HeaderComponent } from './`components/header/header.component';
import { ButtonComponent } from './`components/button/button.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './`components/about/about.component';
import { FooterComponent } from './`components/footer/footer.component';

const appRoutes:Routes=[
  {path:'',component:TaskComponent},
  {path:'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskItemsComponent,
    AddTaskComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
