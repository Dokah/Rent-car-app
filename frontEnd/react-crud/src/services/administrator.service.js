import http from "../http-common";

class AdministratorDataService {

  get(id) {
    return http.get(`/administrator/=${id}`);
  }
}



export default new AdministratorDataService();