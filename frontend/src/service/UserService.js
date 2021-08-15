import axios from "axios";

const USERS_REST_API_URL = "http://localhost:8080/http://google.com/";

class UserService {
  getUsers() {
    return axios.get(USERS_REST_API_URL);
    // return { id: "Shreya", designation: "TEch analyst" };
  }
}

export default new UserService();
