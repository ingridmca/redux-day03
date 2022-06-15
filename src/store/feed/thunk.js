import axios from "axios";
import { postsFetched } from "./slice";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    // console.log("response", response);
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
};
