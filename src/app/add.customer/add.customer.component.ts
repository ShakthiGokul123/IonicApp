import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add.customer',
  templateUrl: './add.customer.component.html',
  styleUrls: ['./add.customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {
list=[]

customer = { id: 1, name: "", email: "", phone: "" }
constructor(private router:Router,private customerService: CustomerService) { }

ngOnInit() {
  this.list = this.customerService.getCustomer()
}


  addButton(customer) {
    this.customerService.addCustomer(customer);    
      
}
genarateId(){
  this.customer.id = ++this.customer.id;
  this.customer.name = "";
  this.customer.email = "";
  this.customer.phone = "";
}

}
