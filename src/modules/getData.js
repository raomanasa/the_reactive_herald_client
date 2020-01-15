import axios from "axios";

const getData = () => {
  const response = axios.get("/articles/1");
  return response;
}

export { getData }
