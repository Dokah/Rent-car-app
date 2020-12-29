import http from "../http-common";

class KorisnikDataService {
  getAll() {
    return http.get("/korisnik");
  }

  get(id) {
    return http.get(`/korisnik/={id}`);
  }

  get_login_id(email, password){
    return http.get('/korisnik/email=${email}=${password}');
  }

  create(data) {
    return http.post("/korisnik", data);
  }
}



export default new KorisnikDataService();