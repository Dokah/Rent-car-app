import http from "../http-common";

class KorisnikDataService {
  getAll() {
    return http.get("/korisnici");
  }

  get(id) {
    return http.get(`/korisnici/id/${id}`);
  }

  get_nadimak_id(nadimak){
    return http.get(`/korisnici/nadimak/${nadimak}`);
  }

  create(data) {
    return http.post("/korisnici", data);
  }
}



export default new KorisnikDataService();