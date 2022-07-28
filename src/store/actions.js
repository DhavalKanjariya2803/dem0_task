// eslint-disable 

export default {
  fetchPostsByQuery(context, query) {
    return new Promise((resolve, reject) => {
      fetch(query)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            reject({ error: "Không tìm thấy bài viết" });
            return;
          }
        })
        .then((json) => {
          json.map((item) => {
            item.user = { email: "" };
          });
          resolve(json);
        })
        .catch(() => reject({ error: "Lỗi kết nối" }));
    });
  },

  async fetchPostsAll({ commit }) {
    let posts = null;
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then(async (json) => {
        posts = json;
        posts = await Promise.all(
          posts.map(async (post) => {
            await fetch(
              `https://jsonplaceholder.typicode.com/users/${post.userId}`
            )
              .then((response) => response.json())
              .then((json) => {
                post.user = {
                  id: json.id,
                  name: json.name,
                };
              })
              .catch((err) => {
                console.log(err);
              });
            return post;
          })
        );
        commit("setPosts", posts);
      })
      .catch((err) => console.log(err));
  },

  async fetchPostByUser({ state, dispatch }, id) {
    const query = `${state.api}/posts?userId=${id}`;
    return dispatch("fetchPostsByQuery", query);
  },

  async fetchUser(context, id) {
    let user;
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        user = json;
      })
      .catch((err) => console.log(err));
    return user;
  },


  fetchUserByEmail(context, email) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            reject({ err: "Tài khoản không tồn tại" });
          }
        })
        .then((json) => {
          let user = { name: json[0].name, id: json[0].id };
          resolve(user);
        })
        .catch((err) => {
          reject({ err });
        });
    });
  },

  creatingPost({ state }, post) {
    let query = `${state.api}/posts`;
    return new Promise((resolve, reject) => {
      fetch(query, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  },
};
