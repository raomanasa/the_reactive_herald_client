import axios from "axios";

const getCurrentArticle = async (id) => {
  try {
    const response = await axios.get(`/articles/${id}`);
    return response.data.article;
  } catch (error) {
    return error.response.data;
  }
};

const getArticles = async () => {
  const response = await axios.get("/articles");
  return response.data;
};

export { getCurrentArticle, getArticles };
