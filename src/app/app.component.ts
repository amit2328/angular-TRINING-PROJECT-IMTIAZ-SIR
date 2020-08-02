import { Component, VERSION } from '@angular/core';
import { Customer } from './customer.model';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  

  customer1 : Customer = {
    'name' : 'harry potter',
    'age': 20,
    'isStudent': true,
    'cgpa' : 9.8

  }
  customer2 : Customer = {
    'name' : 'harrypotter',
    'age': 20,
    'isStudent': true,
    'cgpa' : 9.2

  }
  customer3 : Customer = {
    'name' : 'potter',
    'age': 20,
    'isStudent': true,
    'cgpa' : 9.1

  }
  customer4 : Customer = {
    'name' : 'profharry',
    'age': 20,
    'isStudent': false,
    'cgpa' : 9

  }
  customers: Customer[] =[];

  constructor() {
    this.customers.push(this.customer1);
    this.customers.push(this.customer2);
    this.customers.push(this.customer3);
    this.customers.push(this.customer4);
  }
  isShow : boolean = true;
  initial: boolean=true;
  showStudent() {
  this.isShow =true;
  this.initial= false;
  }
  showNONStudent(){
    this.isShow = false;
    this.initial= false;
  }
}
