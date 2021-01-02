import http from "../http-common";

class VoziloDataService {
  getAll() {
    return http.get("/vozilo/");
  }
  
}



export default new VoziloDataService();