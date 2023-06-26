import fs from 'fs';
import {data} from './base.js';

const path = '../files/GodName'

const telegramas = await fs.promises.readdir(path);
let count = 0
for (let i = 0; i < data.length; i++) {
    
    let uno = data[i];

    for (let j = 0; j < telegramas.length; j++) {
        const telegrama = telegramas[j];

        let result = telegrama.includes(uno)
        if(result){
            count++
         fs.renameSync('../files/GodName/'+telegrama,'../files/GodName/pasar/'+ telegrama );
          console.log('../files/GodName/'+telegrama)
          console.log('../files/GodName/pasar/'+telegrama)

            console.log(uno)
        }
        
    }
    
    
}


console.log(count);