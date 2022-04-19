import axios from 'axios';
/* import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css'; */


const baseURL = 'http://localhost:3000/';


export const api = {
  getUsers: async () => {
      const res = await axios.get(baseURL + 'users');
      return res.data;
  },
  getPosts: async () => {
    const res = await axios.get(baseURL + 'posts');
    return res.data;
  },
  getPostsByUser: async (userid) => {
      const res = await axios.get(baseURL + 'profile/' + userid);
      //console.log(res.data.find(user => user._id == userid));
      return res.data;
  },
  getUserById: async (userid) => {
    const res = await axios.get(baseURL + 'users/' + userid);
    //console.log(res.data.find(user => user._id == userid));
    return res.data;
  },
  createPost: async (payload) => {
    const res = await axios.post(baseURL + 'posts', payload);
    return res.data;
  },
  deletePost: async (postid) => {
    const res = await axios.delete(baseURL + 'posts/' + postid);
    return res.data;
  },
  createUser: async (payload) => {
    const res = await axios.post(baseURL + 'users', payload);
    return res.data;
  }

  /* ,
  deletetask: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createtask: handleError(async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updatetask: handleError(async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }) */
};