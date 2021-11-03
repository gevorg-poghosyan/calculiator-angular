import { Injectable } from "@angular/core";

@Injectable()
export class CalcService {
    joinElem : string = '';
    joinArray : any[] = [];
      autoCalculate(item: string){
        this.joinArray.push(+this.joinElem);
          let a = this.joinArray.find((elem)=> (typeof elem === 'string'))
          switch(item) {
          case '+':
           
            
            a ? 
            this.joinArray.splice(0,3,+this.joinArray[0]+ +this.joinArray[2])
            :console.log(5);
            
            this.itemPush(item)
            console.log(this.joinArray);
            
          }   
      }

      itemPush(item : string) : void {
        if(item !== '='){
        
        this.joinElem = '';
        this.joinArray.push(item);
      
        }
    
        
      }

      calc(item : any){
        switch (typeof item ) {
            case 'number' :
              this.joinNumber(item);
            break;
            case 'string' :
             this.autoCalculate(item)
            
      }
      }

      joinNumber(item : number) : void{
     
        this.joinElem += item;
   
        
        
        
     }
   
}