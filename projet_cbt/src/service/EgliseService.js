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

class EgliseService {
  // récupérer toutes les églises
  getAllEglises() {
    return api.get("/eglises");
  }

  // récupérer une église par id
  getEglise(id) {
    return api.get(`/eglises/${id}`);
  }


}

export default new EgliseService(); 