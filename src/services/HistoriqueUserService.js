import axios from 'axios';


const historique = "http://encherews-production-f5d6.up.railway.app/historiques";
const historiqueUser = "http://encherews-production-f5d6.up.railway.app/historiques/user";

class HistoriqueUserService{

    getHistoriquebyProp(iduser){
        return axios.get(historique + '/' + iduser);
    }
    getHistoriqueByUSer(iduser){
        return axios.get(historiqueUser +'/' + iduser);
    }
}

export default new  HistoriqueUserService()