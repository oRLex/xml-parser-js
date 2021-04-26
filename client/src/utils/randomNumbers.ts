import {generateNumber} from "../helpers/generateNumber";

export const REGION_ID_COUNT = 26;

 export const randomNumbers = (items: number)=> {
     const visited: Array<boolean> = []
     const numbers: Array<number> = new Array(items)
     for (let i = 0; i < items; i++) {
         visited.push(false);
     }

     for (let j = 0; j < visited.length; j++) {
         let generated:number = generateNumber(1, REGION_ID_COUNT)
         if (numbers.includes(generated)){
             generated = (generated + 1) % REGION_ID_COUNT;
         }
         visited[j] = true;
         numbers[j] = generated
     }

     return numbers
 }
