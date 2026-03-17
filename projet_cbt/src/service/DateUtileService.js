import axios from "axios";
import { AppConstants } from "../util/constant";

const api = axios.create({
  baseURL: AppConstants.BACKEND_URL,
});

class DateUtileService {

  // récupérer toutes les dates utiles
  getAllDates() {
    return api.get("/dates-utiles");
  }

  // récupérer une date utile
  getDate(id) {
    return api.get(`/dates-utiles/${id}`);
  }

}

export default new DateUtileService();