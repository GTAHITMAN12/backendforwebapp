export class Data3 {
    store_id:number;
    name: string;
    price: number;
    target_sale: number;
    actual_sale: string;
    sale_count: number;
    
    constructor(
        store_id:number,
    name: string,
    price: number,
    target_sale: number,
    actual_sale: string,
    sale_count: number,){
            this.store_id=store_id;
            this.name= name;
            this.price= price;
            this.actual_sale= actual_sale;
            this.sale_count= sale_count;
            this.target_sale=target_sale;
        }
}
