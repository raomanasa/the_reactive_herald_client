import axios from "axios";

const getData = async () => {
  const response = await axios.get("/articles/1");
  return response;
}

export { getData }
