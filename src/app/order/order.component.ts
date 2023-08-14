import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data2 } from '../data2';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order !: Data2[]
  orderForm !: FormGroup;
  isorderAdded: boolean = false;
  editorder :boolean = false;
  neworder = {
    order_id:0,
    name  :'',
    price :0,
    address :'',
    store_id :0,
  };
  ids = 0
  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
  ){}
  ngOnInit():void{
    this.orderForm = this.formBuilder.group({
      name  :[''],
      price :[''],
      address :[''],
      store_id :[''],
 
    });
    this.getorder();
  }
  
  getorder() {
    this.orderService.getorders().subscribe(
      item => this.order = item
    );
  }
  
  addorder(): void {
    // Process checkout data here
    this.neworder = this.orderForm.value
    this.orderService.addorder(this.neworder).subscribe(
      response => {
        this.neworder = response;
        console.log(response);
        this.isorderAdded=true;
      }
    );
    this.getorder();
  }
  neworderAdded(): void {
    this.isorderAdded = false; // add button status
    this.neworder = {
    order_id :0,
    name  :'',
    price :0,
    address :'',
    store_id :0,
  }
  }
  deleteorder(id: number) {
    this.orderService.delete(id).subscribe(
      response => {
        this.getorder();
      }
    );
  }

  updateorderClick(id: number):void {
    this.editorder = true; // edit button status
    this.isorderAdded = false; // add button status
    console.log(id)
    this.ids=id;
  }

   
  updateAorder( ):void {
    this.neworder = this.orderForm.value
    console.log(this.ids);
    this.neworder.order_id=this.ids
    this.orderService.editorder(this.neworder.order_id, this.neworder).subscribe(
      response => {
        console.log(response);
      }
    );
    this.getorder();
    this.AitemUpdated();
  }


  AitemUpdated():void {
    this.isorderAdded = false;
    this.editorder = false;
    this.neworder = {
    order_id :0,
    name  :'',
    price :0,
    address :'',
    store_id :0
    }
  }
}
