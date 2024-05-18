import { Component, OnInit } from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { first } from 'rxjs';

// Interface for children nodes
interface layerData{
  prev_id : number,             // Indicates parent of current node
  id : number,                  // Id of current child node
  value : string                // Text/Flow step to be displayed
}

// Interface for flowchart structure
interface flowChart{
  layer : number,               // The layer to which children in the next field belong
  children : layerData[]        // Array of children nodes
}

@Component({
  selector: 'app-flow-page',
  templateUrl: './flow-page.component.html',
  styleUrls: ['./flow-page.component.css']
})
export class FlowPageComponent implements OnInit {

  constructor() { 
    // Initialize the variable to false on start
    this.endOfFlow = false;
  }
  ngOnInit(): void {

  }

  // Variables
  currentLayer : number = 0;        // Variable to keep track of current layer being displayed
  currentChild : number = 0;        // Variable to keep track of currently selected child
  endOfFlow : boolean = false;      // Variable to check if flowchart has ended
  workflow_values: String='';       // String variable to separate array entries on console
  currentRow : number = 0;          // Variable to keep track of current row on UI side
  arr = new Array<string>();        // Array to cache previously followed steps

  // Dummy Flowchart
  public flowchart1: flowChart[] = [
      
      {layer: 0, children : [
                             {prev_id:0, id:1, value:"NEW HIRE QUERIES : You must have a lot of questions a s a new hire regarding your onboarding,Manager,team,payroll,etc. Have all of them answered here!"},{prev_id:0, id:2, value:"VMware Partners : With thousands of partners worldwide, we are positioned to help customers scale their business, drive innovation and transform their customer experience."},{prev_id:0, id:3, value:"VMware BENEFITS:We are proud to offer you and your family a comprehensive program of benefits that are among the best in the industry.Get detailed information, contacts and resources to ensure you make the most out of your VMware benefits."},
                             {prev_id:0, id:4, value:"Innovation At VMware :We bring together the brightest ideas, diverse perspectives and communities from across our ecosystem to co-create the future. Below are programs designed to ignite these possibilities."},{prev_id:0, id:5, value:"VMware Career Journey: Read about the career stories and amazing work life of employees at VMware.Get details about promotions & bonuses."},{prev_id:0, id:6, value:"Diversity,Equity & Inclusion: Get to know how we at VMware follow our principles regarding Diversity, Equity and Inclusion."},
                             {prev_id:0, id:7, value:"IT Services & Support : Get to know about the tools which we use at VMware to collaborate as well as know about oasis out IT support."},{prev_id:0, id:8, value:"VMware Policies: Read all the company policies that apply generally throughout VMware or across a specific region."},{prev_id:0, id:9, value:"Helpline : Need help ? We are there for you, get help for all your queries regarding IT, HR or any other."},
                             {prev_id:0, id:10, value:"VMware Learning provides training and certification programs designed to help our customers grow their skills and leverage all the opportunities offered through VMware solutions."},   ], },
      {layer: 1, children : [{prev_id:1, id:17, value:"IT QUERIES All your queries regarding RSA setup , Laptop Setup etc."},{prev_id:2, id:18, value:"HR QUERIES All your wueries regarding your Onboarding,New Employee Essentials,Provident Fund,etc."},{prev_id:3, id:19, value:"PAYROLL QUERIES All your queries regarding tax exemptions, FBP Declarations,Internet Reimbursements,etc."}]},
      {layer: 2, children : [{prev_id:4, id:20, value:"Allowances"},{prev_id:4, id:23, value:"Compensation Details"},{prev_id:4, id:24, value:"Tax Exemptions"}]},
      {layer: 3, children : [{prev_id:7, id:21, value:"HRA - House Rent Allowances"},{prev_id:9, id:22, value:"Travel Allowances"}]},
      {layer: 4, children : [{prev_id:7, id:25, value:"Your Base salary can be divided into two parts : Basic + FBP (50:50)...Maximum HRA exemption given will be 50% of Basic Salary."}]}
  ]

  // Total number of rows on UI side. Depends on dummy data size
  numberOfRows : number = Math.ceil(this.flowchart1[this.currentLayer].children.length / 3);

  // Function to return number of cards to be rendered per row
  getNumberOfRemainingBoxes() : number {
    this.currentRow ++;
    if (this.currentRow != this.numberOfRows || this.flowchart1[this.currentLayer].children.length % 3 == 0)
      return 3;
    else
      return this.flowchart1[this.currentLayer].children.length % 3;
  }
  
  // Function to move to next step after user selects a previous step
  goToNextStep(event : any) : number {
    if(this.currentLayer < this.flowchart1.length - 1) {
      // Logic to follow till second last layer
      this.currentLayer+=1;
      this.numberOfRows = Math.ceil(this.flowchart1[this.currentLayer].children.length / 3);    // Recalculate number of rows
      this.currentRow = 0;
      this.arr.push(this.flowchart1[this.currentLayer-1].children[event.target.id].value);      // Caching
      console.log("The real id of the data member :"+ this.flowchart1[this.currentLayer-1].children[event.target.id].id); // Logging real id of data selected
      return this.flowchart1[this.currentLayer-1].children[event.target.id].id;
    }

    else if (this.currentLayer == this.flowchart1.length - 1) {
      // Logic for last layer
      this.endOfFlow = true;
      this.arr.push(this.flowchart1[this.currentLayer].children[event.target.id].value);
      console.log("The real id of the data member :"+ this.flowchart1[this.currentLayer].children[event.target.id].id);   // Logging real id of data selected
      
      // Displaying cached data on console
      for(let i = 0; i < this.arr.length; i++) {
        this.workflow_values+=this.arr[i]+"\n";
        if(i!=this.arr.length-1) {
          this.workflow_values+="V"+"\n";  
          this.workflow_values+="V"+"\n";  
          this.workflow_values+="V"+"\n";  
        }
        else {
          this.workflow_values+="\n";
        }   
      }
      console.log("The workflow elements by value is : \n"+ this.workflow_values);
      return this.flowchart1[this.currentLayer].children[event.target.id].id;
    }

    else {
      //  Should never reach here!
      console.log("End of Flow value:", this.endOfFlow);
      return -1;
    }  
  }

  // Function to create an iterable array for *ngFor
  createRange(x : number) {
    return new Array(x);
  }
}