import http from "../http-common";

class RezervacijaDataService {
  getById(id) {
    return http.get(`/rezervacija/=${id}`);
  }

  create(data) {
    return http.post("/rezervacija", data);
  }
}



export default new RezervacijaDataService();