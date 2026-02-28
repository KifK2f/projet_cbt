import axios from "axios";
import { AppConstants } from "../util/constant";

// Création d'une instance Axios car 
const api = axios.create({
  baseURL: AppConstants.BACKEND_URL,
});

// const api = axios.create({
//   baseURL: AppConstants.BACKEND_URL,
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// });

class HistoireSectionService {
  // Récupérer toutes les infos de la table
  getAllhistoireSections() {
    return api.get('/notre-histoire');
  }

}

export default new HistoireSectionService(); 