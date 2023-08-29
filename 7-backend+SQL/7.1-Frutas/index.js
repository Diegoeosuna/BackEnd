import express from 'express';
import router from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(router); //Se conectan las rutas que estan en la carpeta 'routes'

app.listen(8080, ()=> console.log('Server listening on port 8080'))
