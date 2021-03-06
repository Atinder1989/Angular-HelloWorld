import { CoursesService } from './courses.service';
import { Component } from '@angular/core'
import { template } from '@angular/core/src/render3';

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
    // template:`
    //     <input #email (keyup.enter)="onKeyUp(email.value)"/>
    // `

    //Two Way Binding
    // template:`
    //     <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
    //     <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    //     `

    // Pipes
    // template:`
    //     {{ pipeCourse.title | uppercase | lowercase }} <br/>
    //     {{ pipeCourse.rating | number: '1.2-2' }} <br/>
    //     {{ pipeCourse.students | number }} <br/>
    //     {{ pipeCourse.price | currency:"AUD":true:'1.2-2'}} <br/>
    //     {{ pipeCourse.releaseDate | date:'shortDate'}}    
    // `

   // Custom Pipes
    template:`
        {{ text | summary:50}}
    `

})

export class CoursesComponent {
    isFavorite = false
    text = "A simple solution is to find all prime factors of both numbers, then find intersection of all factors present in both numbers. Finally return product of elements in the intersection.An efficient solution is to use Euclidean algorithm which is the main algorithm used for this purpose. The idea is, GCD of two numbers doesn’t change if smaller number is subtracted from a bigger number."
    pipeCourse = {
        title: "Hello World",
        rating: 4.9745,
        students:30123,
        price:190.95,
        releaseDate: new Date(2016,3,1)

    }
    email = "a@a.com"
    isActive = true
    title = "List Of Courses"
    colspan = 2
    imageurl = "https://raisingchildren.net.au/__data/assets/image/0023/49244/sleep-routines-for-newborns.jpg"
    courses
    

    constructor(service: CoursesService) {
        this.courses = service.getCourses()
    }

    onClick() {
        console.log("Star Clicked hua")
        this.isFavorite = !this.isFavorite
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

    onKeyUp(){
        console.log("Enter Pressed and value is == " + this.email);

    }
}