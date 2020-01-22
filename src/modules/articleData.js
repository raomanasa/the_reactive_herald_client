import axios from "axios";

const createArticle= async (title,body) => {
  let headers = sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  try {
    await axios.post("/admin/articles", 
      { 
        title:title,
        body:body
      }, {
        headers: headers
      }
    );
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

export { createArticle };