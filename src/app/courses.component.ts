import { CoursesService } from './courses.service';
import { Component } from '@angular/core'

@Component({
    selector: 'courses',
   // template: '<h2>{{ "Title: " + title }}</h2>'
    // template: '<h2>{{ getTitle() }}</h2>'

    // Directive 
    // template: `
    //     <h2>{{ getTitle() }}</h2>
    //     <ul>
    //         <li *ngFor="let course of courses">
    //             {{ course }}
    //         </li>
    //     </ul>
    // `


    // property Binding 
    // template: `
    //     <h2>{{ title }}</h2>
    //     <img src="{{ imageurl }}"/>
    //     <img [src]="title">
    // `


    // Attribute Binding 
    // template: `
    //     <img [src] = "imageurl">
    //     <table>
    //         <tr>
    //             <td [attr.colspan] = "colspan"> </td>
    //         </tr>
    //     </table>
    // `

    template:`
        <button class="btn btn-primary">Save</button>
    `
})

export class CoursesComponent {
    title = "List Of Courses";
    colspan = 2
    imageurl = "https://raisingchildren.net.au/__data/assets/image/0023/49244/sleep-routines-for-newborns.jpg"
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    getTitle() {
        return this.title
    }
}