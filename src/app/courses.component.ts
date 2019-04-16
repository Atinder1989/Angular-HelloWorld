import { CoursesService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
   // template: '<h2>{{ "Title: " + title }}</h2>'
    // template: '<h2>{{ getTitle() }}</h2>'

    // template: `
    //     <h2>{{ getTitle() }}</h2>
    //     <ul>
    //         <li *ngFor="let course of courses">
    //             {{ course }}
    //         </li>
    //     </ul>
    // `

    template: `
        <h2>{{ title }}</h2>
        <img src="{{ imageurl }}"/>
        <img [src]="title">
    `
})

export class CoursesComponent {
    title = "List Of Courses";
    imageurl = "https://raisingchildren.net.au/__data/assets/image/0023/49244/sleep-routines-for-newborns.jpg"
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    getTitle() {
        return this.title
    }
}