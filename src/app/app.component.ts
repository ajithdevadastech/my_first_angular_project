import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { NgFor } from '@angular/common';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CoursesService]
})
export class AppComponent {
  title = 'my_first_angular_project';
}
