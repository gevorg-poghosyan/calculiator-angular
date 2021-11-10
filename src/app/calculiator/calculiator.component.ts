import { Component } from '@angular/core';
import { CalcService } from './calc.service';

@Component({
  selector: 'app-calculiator',
  templateUrl: './calculiator.component.html',
  styleUrls: ['./calculiator.component.css'],
  providers: [CalcService]
})
export class CalculiatorComponent {
  joinElem: string = '';
  joinArray: any[] = [];


  constructor(private calcService: CalcService) {
  }

  clearLastItem() {
    this.calcService.joinElem = this.joinElem.slice(0, -1);
    this.calcService.joinArray.splice(this.joinArray.length - 1, 1);
    this.updateCalculatorValues()
  }

  clearCalculator() {
    this.calcService.joinArray = [];
    this.calcService.joinElem = '';
    this.updateCalculatorValues()
  }

  onInputEquation() {
    this.calcService.calculateEquation()
    this.updateCalculatorValues()
  }

  onInput(item: any): void {
    typeof item==='number'? this.calcService.joinNumber(item): this.calcService.useAction(item);
    this.updateCalculatorValues()
  }

  updateCalculatorValues() {
    this.joinElem = this.calcService.joinElem;
    this.joinArray = this.calcService.joinArray;
  }


}
