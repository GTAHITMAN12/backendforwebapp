import { Component,OnInit  } from '@angular/core';
import { StoreService } from '../store.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  items !: Data[]
  itemForm !: FormGroup;
  isitemAdded: boolean = false;
  edititems :boolean = false;
  newitems = {
    id:0,
    name  :'',
    price :0,
    target_sale :0,
    description :'',
    stock :0
  };
  ids = 0
  constructor(
    private storeService: StoreService,
    private formBuilder: FormBuilder,
  ){}
  ngOnInit():void{
    this.itemForm = this.formBuilder.group({
      name  :[''],
      price :[''],
      target_sale :[''],
      description :[''],
      stock :[''],
    });
    this.getitem();
  }
  
  getitem() {
    this.storeService.getItem().subscribe(
      item => this.items = item
    );
  }

  additem(): void {
    // Process checkout data here
    this.newitems = this.itemForm.value
    this.storeService.additem(this.newitems).subscribe(
      response => {
        this.newitems = response;
        console.log(response);
        this.isitemAdded=true;
      }
    );
    this.getitem();
  }
  newitemAdded(): void {
    this.isitemAdded = false; // add button status
    this.newitems = {
    id :0,
    name  :'',
    price :0,
    target_sale :0,
    description :'',
    stock :0};
  }
  deleteitem(id: number) {
    this.storeService.delete(id).subscribe(
      response => {
        this.getitem();
      }
    );
  }

  updateitemClick(id: number):void {
    this.edititems = true; // edit button status
    this.isitemAdded = false; // add button status
    console.log(id)
    this.ids=id;
  }

   
  updateAitem( ):void {
    this.newitems = this.itemForm.value
    console.log(this.ids);
    this.newitems.id=this.ids
    this.storeService.edititem(this.newitems.id, this.newitems).subscribe(
      response => {
        console.log(response);
      }
    );
    this.getitem();
    this.AitemUpdated();
  }


  AitemUpdated():void {
    this.isitemAdded = false;
    this.edititems = false;
    this.newitems = {
      id :0,
    name  :'',
    price :0,
    target_sale :0,
    description :'',
    stock :0};
  }


}
