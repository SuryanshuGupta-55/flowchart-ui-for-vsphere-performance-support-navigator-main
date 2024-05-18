import { Component } from "@angular/core";

// Defines our File as a component ; It adds additional information to the component we are creating . It is basucally a function where we pass our object

@Component
({
  selector: 'pm-root',  // Name of the component when used as a directive (custom HTML syntax) in HTML
  template:             // Added router-outlet tag in template, to fix routing issues
  `<div>
     <router-outlet></router-outlet>
  </div>`
})
export class AppComponent{
    
}