import axios from "axios";

export default axios.create({
  baseURL: "https://www.anapioficeandfire.com/api/books?pageSize=30",
  headers: {
    "Content-type": "application/json",
  },
});
