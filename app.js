import fs from 'fs';

import { PDF_QR_JS }  from 'pdf-qr';  // ES6
import __dirname from './utils.js';

const path = './files/'

var callback =  (result) => {

  console.log('-----------------')
  console.log(pasos)

  if(result.success){
    
    console.log(result.codes[0])
    console.log(data[todos - pasos])
    let endName = Date.now() + '.pdf';
  
    fs.renameSync('./files/'+data[todos - pasos], __dirname + '/GodName/' + result.codes[0] +'_'+ endName );


 
  }
  else {
    console.log(result.message);
    console.log(data[todos - pasos])
    try {
      
      fs.renameSync('./files/'+data[todos - pasos], __dirname + '/NoName/'+ data[todos - pasos]  );
    } catch (error) {
      
    }
    
  }
  pasos++

}



run().catch(error => {
  console.log('Error Catch')
  console.error(error.stack)
});


async function run(file) {
 
 let input_file = "./files/" + file
  try {
    var configs = { // create and populate configs variable
      scale: {
          once: true,
          value: 1
      },
      resultOpts: {
          singleCodeInPage: true
      },
      improve: true,
      jsQR: {},

  };
  //let input_file =  "./files/null_230625235836.pdf"
  var pageNr = 1;
  
  await PDF_QR_JS.decodeSinglePage(input_file, pageNr, configs, callback);
 
  } catch (error) {
    console.log('fallo')
    console.log(error)
  }

}
const data = await fs.promises.readdir(path);

var pasos = 0;
var todos = data.length
console.log(data)

for (let i = 0; i < data.length; i++) {
    
    const file = data[i];
        try {
      
            await  run(file)
      

        } catch (error) {
            console.log('error For')
            console.log(error)
            

        }
}


//await run()


