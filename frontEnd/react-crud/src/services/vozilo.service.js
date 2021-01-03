import http from "../http-common";

class VoziloDataService {
  getAll() {
    return http.get("/vozilo/");
  }

  getById(id){
    return http.get(`/vozilo/id=${id}`);
  }
  
  create(data) {
    return http.post("/vozilo", data);
  }
  
}



export default new VoziloDataService();