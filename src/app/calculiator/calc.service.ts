import { Injectable } from "@angular/core";

@Injectable()
export class CalcService {
    joinElem: string = '';
    joinArray: any[] = [];

    autoCalculate(item: string) {

        let prevOperator = this.joinArray.find((elem) => (typeof elem === 'string'));

        switch (prevOperator) {
            case '+':
                this.joinArray.splice(0, 3, +this.joinArray[0] + +this.joinArray[2]);
                this.itemPush(item);
                break

            case '-':
                this.joinArray.splice(0, 3, +this.joinArray[0] - +this.joinArray[2]);
                this.itemPush(item);
                console.log(this.joinArray);
                break

            case '*':
                this.joinArray.splice(0, 3, +this.joinArray[0] * +this.joinArray[2]);
                this.itemPush(item)

                break

            case '/':
                this.joinArray.splice(0, 3, +this.joinArray[0] / +this.joinArray[2]);
                this.itemPush(item)
                break

            default:

                this.itemPush(item)
                console.log(this.joinArray);

                break

        }

    }

    itemPush(item: string): void {
        this.joinElem = '';
        this.joinArray.push(item);
    }

    joinNumber(item: number | string): void {
        this.joinElem += item;
    }

    calc(item: any) {
        switch (typeof item) {
            case 'number':
                if(this.joinElem ==='0' && item === 0){
                    return
                }
                this.joinNumber(item);
               
                break;
            case 'string':
                if(item === '.'){
                    if(!this.joinElem.includes('.')){
                        this.joinNumber(item)
                    } 
                    return;
                }
                if (!this.joinArray.length && !this.joinElem) {
                    this.joinArray.push(0);
                    this.joinArray.push(item);
                }
                if (typeof this.joinArray[this.joinArray.length - 1] === 'string' && !this.joinElem) {
                    this.joinArray.splice(this.joinArray.length - 1, 1, item);
                    return
                }

                if (this.joinElem) {
                    this.joinArray.push(+this.joinElem);
                    this.autoCalculate(item)
                }

        }

    }

    clearCalculator() {

        this.joinArray = [];
        this.joinElem = '';

    }

    clearLastItem() {
        this.joinElem = this.joinElem.slice(0, -1);
        this.joinArray.splice(this.joinArray.length - 1, 1)
    }

    calculateEquation() {
        if (!this.joinElem || this.joinArray.length !== 2) {
            return
        }
        this.joinArray.push(+this.joinElem);
        if (this.joinArray.find((elem) => (typeof elem === 'string'))) {
            this.autoCalculate(this.joinArray.find((elem) => (typeof elem === 'string')));
            this.joinElem = this.joinArray[0].toString();
            this.joinArray = [];
            console.log(this.joinArray);


        }
        else {
            return
        }
    }


}
