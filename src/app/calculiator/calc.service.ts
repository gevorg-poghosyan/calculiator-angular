import { Injectable } from "@angular/core";

@Injectable()
export class CalcService {
    joinElem: string = '';
    joinArray: any[] = [];


    autoCalculate(item: string) { // poxel anun@ auto

        let prevOperator = this.joinArray.find((elem) => (typeof elem === 'string'));
        switch (prevOperator) {
            case '+': {
                const calculatedResult = +this.joinArray[0] + +this.joinArray[2];
                this.setCalculatedResult(item, calculatedResult)
            }
                break;

            case '-': {
                const calculatedResult = +this.joinArray[0] - +this.joinArray[2];
                this.setCalculatedResult(item, calculatedResult)
            }
                break;

            case '*': {
                const calculatedResult = +this.joinArray[0] * +this.joinArray[2];
                this.setCalculatedResult(item, calculatedResult)
            }

                break;

            case '/': {
                const calculatedResult = +this.joinArray[0] / +this.joinArray[2];
                this.setCalculatedResult(item, calculatedResult)
            }
                break;

            default:
                this.itemPush(item)
                break

        }

    }

    private setCalculatedResult(item: any, calcResult: number | string) {
        const firstOperandIndex = 0;
        const secondOperandIndex = 2;
        this.joinArray.splice(firstOperandIndex, secondOperandIndex + 1, calcResult);
        this.itemPush(item)
    }

    itemPush(item: string): void {
        this.joinElem = '';
        this.joinArray.push(item);
        console.log(this.joinArray);

    }

    joinNumber(item: number | string): void {
        if (this.joinElem === '0' && item === 0) {
            return
        }
        this.joinElem += item;
    }

    useAction(item: any) {

        if (item === '.') {
            if (!this.joinElem.includes('.')) {
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
