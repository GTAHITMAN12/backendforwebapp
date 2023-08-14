export class Data {
    id:number;
    name: string;
    price: number;
    target_sale: number;
    description: string;
    stock: number;
    
    constructor(
        ids: number,
        names: string,
        prices: number,
        target_sales: number,
        descriptions: string,
        stocks: number){
            this.id=ids;
            this.name= names;
            this.price= prices;
            this.target_sale= target_sales;
            this.description= descriptions;
            this.stock= stocks;
        }
}
