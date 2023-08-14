import {Component, ElementRef, ViewChild} from '@angular/core';
import Chart from 'chart.js/auto';
 

import { DashService } from '../dash.service';

@Component({
  selector: 'app-dashbroad',
  templateUrl: './dashbroad.component.html',
  styleUrls: ['./dashbroad.component.css']
})
export class DashbroadComponent {
  @ViewChild('canvas') canvas!: ElementRef;
  title = 'ng-chart';
  chart: any = [];
  result: any;
  coinPrice: any;
  coinName: any;
  
  constructor(
  private dashService: DashService
  ){ 
  }
  ngAfterViewInit():void{
      this.dashService.getsale().subscribe(
        (res) => {      this.result = res;
          console.log(this.result);
          this.coinPrice = this.result.map((coins: any) =>coins.target_sale);
          this.coinName = this.result.map((coins: any) => coins.name);
          console.log(this.coinPrice);
          console.log(this.coinName);
          this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), {
            type: 'bar',
            data: {
              labels: this.coinName,
              datasets: [
                {
                  data: this.coinPrice,
                  borderColor: '#3e95cd',
                  label: 'Coin Price',
                  backgroundColor: 'rgba(93, 175, 89, 0.1)',
                  borderWidth: 3,
                },
              ],
            },
          });
        }
      )
    }
}

