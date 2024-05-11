import pg from 'pg'
import { SQLPASS, SQLPORT, SQLUSER } from './config.js'

export const pool = new pg.Pool({
    user: SQLUSER,
    host: "localhost",
    password: SQLPASS,
    database: "poll",
    port: SQLPORT
})

/*pool.query('SELECT NOW()').then(result =>{
    console.log(result)
})*/

