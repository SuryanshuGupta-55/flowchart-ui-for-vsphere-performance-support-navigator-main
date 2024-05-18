import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import '@clr/icons';
import '@clr/icons/shapes/all-shapes';

// Defines our File as a component ; It adds additional information to the component we are creating . It is basucally a function where we pass our object

@Component
({
  selector: 'pm-homepage', // Name of the component when used as a directive (custom HTML syntax) in HTML
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})
export class HomePageComponent implements OnInit{

    constructor(private router : Router) {}
    
    gotoFlowPage(){
      // Function to route to flow-page component
      this.router.navigate(['/flowpage']);
    }
    
    ngOnInit(): void {
      // Default function
    }
}