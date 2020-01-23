import axios from "axios";

const getUserData = async (id) => {
  try {
    const response = await axios.get(`/api/admin/users/${id}`);
    return response.data.user;
  } catch (error) {
    return error.response.data
  }
};

export { getUserData };
