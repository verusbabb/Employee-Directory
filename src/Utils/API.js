import axios from "axios";

// Export an object containing methods we'll use for accessing the Random Employee API

export default {
  getRandomEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=5");
  }
}

