import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myOwnPipe'
})
export class MyOwnPipePipe implements PipeTransform {

  transform(value: string): string {
      let returnValue: string ='';

      for(let i = 0; i < value.length; i++) {
         if(i % 2 === 0) {
            returnValue += value[i].toUpperCase();
         }
         else {
           returnValue += value[i].toLowerCase();
         }
       }
       return returnValue;
   }
}

//toUpperCase

// @Pipe({
//   name: 'myOwnPipe'
// })
// export class MyOwnPipePipe implements PipeTransform {

//   transform(value: string): string {
//     return value.toUpperCase();
//   }
// }