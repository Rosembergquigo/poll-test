import app from './app.js'
import { PORT } from './config.js'
import { sequelize } from './database/database.js'

//import tabla de Db
//import './models/user.model.js'
//import './models/poll.models.js'
//import './models/question.model.js'
//import './models/item.model.js'
//import './models/choose.model.js'


async function main(){
    try{
        await sequelize.sync({alter: true})
        /*await sequelize.authenticate()
        console.log("Conexión a db éxitosa");*/
        app.listen(PORT)
        console.log('Server on Port', PORT)
    }catch(err){
        console.log("Conexión a db fallida: ", err);
    }
}

main();
