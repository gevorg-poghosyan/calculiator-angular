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

  
  

  constructor(private calcService : CalcService) { 
  }

  ngOnInit(): void {
  }

  clearLastItem(){
    this.calcService.clearLastItem();
    this.joinElem = this.calcService.joinElem;
    this.joinArray = this.calcService.joinArray;
  }

  clearCalculator(){
    this.calcService.clearCalculator()
    this.joinElem = this.calcService.joinElem;
    this.joinArray = this.calcService.joinArray;
  }

  calculateEquation(){
    this.calcService.calculateEquation()
    this.joinElem = this.calcService.joinElem;
    this.joinArray = this.calcService.joinArray;
  }

  calculate(item: any): void {
    this.calcService.calc(item)
    this.joinElem = this.calcService.joinElem;
    this.joinArray = this.calcService.joinArray; 
}



}
