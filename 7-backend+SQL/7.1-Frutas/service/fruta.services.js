import frutaDao from "../dao/fruta.dao.js";

class FrutaServices{

    async createFruta(frutaDto){
        const {nombre,descripcion,cantidad,precio} = frutaDto;
        return frutaDao.createFruta(nombre,descripcion,cantidad,precio)
    }

    async getFrutaByID(id){
        return frutaDao.getFrutaByID(id)
    }

    async updateFruta(id, updates){
        return frutaDao.updateFruta(id, updates)
    }

    async deleteFruta(id){
        return frutaDao.deleteFruta(id)
    }
}

export default new FrutaServices();