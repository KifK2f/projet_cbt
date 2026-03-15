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

class ZoneService {
 // récupérer toutes les zones
  getAllZones() {
    return api.get("/zones");
  }

  // récupérer une zone par id
  getZone(id) {
    return api.get(`/zones/${id}`);
  }

}

export default new ZoneService(); 