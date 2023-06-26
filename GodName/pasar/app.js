import fs from 'fs';

const path = './'

const telegramas = await fs.promises.readdir(path);

console.log(telegramas)



for (let i = 2; i < telegramas.length; i++) {
    
    let nombre = telegramas[i]
    let renombrar = telegramas[i].split('_');

    let nameTelegrama = renombrar[0].slice(10,21) + '_20230615005213.tiff'


    console.log(nombre)

   fs.renameSync('./'+nombre,'./'+ nameTelegrama);

          //console.log('../files/GodName/'+telegrama)
          //console.log('../files/GodName/pasar'+telegrama)


    
    
}
 

//console.log(data);