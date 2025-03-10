import { Component } from '@angular/core';
import { NgFor, NgForOf } from '@angular/common';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    imports: [NgFor],
    template: `<h2>{{title}}</h2>
                <ul>
                    <li *ngFor="let course of courses">
                        {{ course }}
                    </li>
                    <li *ngFor="let course of coursesfromservice">
                        {{ course }}
                    </li>
                </ul>
                `
})
export class CoursesComponent {
    title = 'List of courses';
    //fetch from component page, tight coupling.
    courses = ['Course1', 'Course2', 'Course3'];
    coursesfromservice;

    // constructor()
    // {
    //     //fetch from services. but, still tightly coupled. can't unit test. if the services constructor changes, the changes must be added here.
    //     let service = new CoursesService();
    //     this.coursesfromservice = service.getCourses()

    // }

    constructor(service:CoursesService) //dependency injection. you need to add the Service in app.component.ts as provider. The class is instantiated once and supplied to all components that are referring. (Singleton design pattern).
    {
        //fetch from services. but, still tightly coupled. can't unit test. if the services constructor changes, the changes must be added here.
        this.coursesfromservice = service.getCourses();

    }
}