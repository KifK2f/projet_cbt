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

class OrganisationCBTService {
  // Récupérer toutes les infos de la table
  getAllorganisationCBT() {
    return api.get('/organisation-gouvernance');
  }

}

export default new OrganisationCBTService(); 