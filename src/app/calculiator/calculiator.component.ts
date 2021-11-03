import { Component, OnInit } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-calculiator',
  templateUrl: './calculiator.component.html',
  styleUrls: ['./calculiator.component.css'],
  providers: [CalcService]
})
export class CalculiatorComponent implements OnInit {
  joinElem : string = '';
  joinArray : any[] = [];
  arr = ['C','back',1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'='];
  

  constructor(private calcService : CalcService) { 
  }

  ngOnInit(): void {
  }


  calculate(item: any): void {
    this.calcService.calc(item)
    this.joinElem = this.calcService.joinElem;
    this.joinArray = this.calcService.joinArray;
   
}

}
