import http from "../http-common";

class ModelDataService {

  getAll() {
    return http.get("/model");
  }

  getById(id){
    return http.get(`/model/=${id}`);
  }
  
  
}



export default new ModelDataService();