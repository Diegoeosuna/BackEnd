import dotenv from 'dotenv'

if(process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

import express from 'express';
import router from "./routes/index.js";
import cors from 'cors';


const PORT = process.env.PORT || process.env.DEV_PORT

const app = express();
app.use(express.json());

app.use(cors()); //Nos permite recibir peticiones una vez esté en 'production'
app.use(router); //Se conectan las rutas que estan en la carpeta 'routes'

app.listen(8080, ()=> console.log('Server listening on port ' + PORT))
