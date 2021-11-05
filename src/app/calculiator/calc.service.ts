import { Injectable } from "@angular/core";

@Injectable()
export class CalcService {
    joinElem : string = '';
    joinArray : any[] = [];

      autoCalculate(item: string){
         
        
          let prevOperator = this.joinArray.find((elem)=> (typeof elem === 'string'));
          
          switch(prevOperator) {
           case '+':
            this.joinArray.splice(0,3,+this.joinArray[0]+ +this.joinArray[2]);
            this.itemPush(item);
            break

           case '-':  
            this.joinArray.splice(0,3,+this.joinArray[0]- +this.joinArray[2]);
            this.itemPush(item);
            console.log(this.joinArray);
            
            break

           case '*': 
        //    if(this.joinArray.indexOf(prevOperator)=== (this.joinArray.length-1)){
        //        this.joinArray.splice(this.joinArray.length-1,1, item);
        //    }
            this.joinArray.splice(0,3,+this.joinArray[0]* +this.joinArray[2]);    
            this.itemPush(item)
            // console.log(this.joinArray)
            // } else{
            
            // console.log('shyidfg');
            
            // }
            
            break

           case '/':
            this.joinArray.splice(0,3,+this.joinArray[0] / +this.joinArray[2]);    
            this.itemPush(item)
            break

            // case 'C':
            // this.joinElem='';
            // this.joinArray=[];
            

            // break
            default:
                // item != 'C'?
                this.itemPush(item)
                console.log(this.joinArray);
                
                // this.joinArray = [] 
                // this.joinElem = '';
             break
            
          }
           
      }

      itemPush(item : string) : void {
        if(item !== '='){
        
        this.joinElem = '';
        this.joinArray.push(item);
      
        }
    
        
      }

      calc(item : any){
          switch(item){
            case  'C' :
              this.joinArray = [];
              this.joinElem = '';
              break

            case 'back' :
              this.joinElem = this.joinElem.slice(0,-1);
              this.joinArray.splice(this.joinArray.length-1,1)
              break

            default :
              switch (typeof item ) {
                 case 'number' :
                   this.joinNumber(item);
                 break;
                 case 'string' :
                      
          if(typeof this.joinArray[this.joinArray.length-1] === 'string' && !this.joinElem){
            this.joinArray.splice(this.joinArray.length-1,1, item);
            return
          } 
          this.joinArray.push(+this.joinElem);
                   this.autoCalculate(item)
            
                }
         }
      }

      joinNumber(item : number) : void{
     
        this.joinElem += item;
   
        
        
        
     }
   
}
