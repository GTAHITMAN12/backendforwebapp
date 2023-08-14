export class Data2 {
    order_id:number;
    store_id:number;
    name:string;
    address:string;
    price:number;
    constructor(
        order_ids:number,
    
        store_ids:number,
         
        names:string,
        
        addresss:string,
         
        prices:number,){
            this.order_id=order_ids;
            this.name= names;
            this.store_id= store_ids;
            this.address= addresss;
            this.price= prices;
        }
}