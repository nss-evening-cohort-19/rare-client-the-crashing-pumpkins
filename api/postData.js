import axios from 'axios';

const dbUrl = 'http://localhost:8088/posts';

const getAllPosts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const deleteThisPost = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/${id}`)
    .then(() => resolve('deleted'))
    .catch((error) => reject(error));
});

export { getAllPosts, deleteThisPost };
