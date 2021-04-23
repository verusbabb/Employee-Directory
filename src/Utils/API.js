import axios from "axios";

// Object containing function to get random employee data; exported for use in Table.js

export default {
  getRandomEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};
