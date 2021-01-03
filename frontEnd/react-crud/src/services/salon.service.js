import http from "../http-common";

class SalonDataService {
  getById(id) {
    return http.get(`/salon/=${id}`);
  }
}



export default new SalonDataService();