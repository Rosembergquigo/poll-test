import app from './app.js'
import { PORT } from './config.js'
import { sequelize } from './database/database.js'

//import tabla de Db
import './models/user.models.js'


async function main(){
    try{
        await sequelize.sync()
        /*await sequelize.authenticate()
        console.log("Conexión a db éxitosa");*/
        app.listen(PORT)
        console.log('Server on Port', PORT)
    }catch(err){
        console.log("Conexión a db fallida: ", err);
    }
}

main();
