import  express  from "express";
import frutaController from "../controller/fruta.controller.js";

const router = express.Router();

//Routes = EndPoint

router.get('/frutas/:id', frutaController.getFrutasByID); //express.Router().get() = app.get();
router.post('/frutas', frutaController.createFrutas);
router.put('/frutas/:id', frutaController.updateFruta);
router.delete('/frutas/:id', frutaController.deleteFruta);

export default router