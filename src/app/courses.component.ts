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

    // Property Binding 
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

    // // Bootstrap, Class Binding, Style Binding 
    // template:`
    //     <button class="btn btn-primary" [class.active]="isActive">Save</button>
    //     <button [style.backgroundColor]="isActive ? 'green' : 'red' ">Save</button>
    // `

    // //Event Binding
    // template: `
    //     <div (click)="OnDivClicked()">
    //         <button (click)="onSave($event)">Save</button>
    //     </div>
    // `

    // Event Filtering, Template Variable
    template:`
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
})

export class CoursesComponent {
    isActive = true
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
    onSave($event) {
        event.stopPropagation()
        console.log("Save Button Clicked",$event);
        
    }
    OnDivClicked() {
        console.log("Div Clicked");
        
    }

    onKeyUp(email){
        console.log("Enter Pressed and value is == " + email);

    }
}