import axios from "axios";
export const getAllUser = (callback, errorcallback) => {
  axios
    .get("http://localhost:8000/user", {
      headers: { Authorization: "Basic " + localStorage.getItem("id_token") },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const getAllBlog = (callback, errorcallback) => {
  axios
    .get("http://localhost:8000/blog", {
      headers: { Authorization: "Basic " + localStorage.getItem("id_token") },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const getAllProduct = (callback, errorcallback) => {
  axios
    .get("http://localhost:8000/product", {
      headers: { Authorization: "Basic " + localStorage.getItem("id_token") },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};

export const deleteUsr = (uid, callback, errorcallback) => {
  axios
    .delete(`http://localhost:8000/user_delete/${uid}`, {
      headers: {
        Authorization: "Basic " + localStorage.getItem("id_token"),
      },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteAllUsr = (usr, token, callback, errorcallback) => {
  axios
    .delete("http://localhost:8000/user_delete/", {
      data: usr,
      headers: { Authorization: `Basic ${token}` },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteCat = (uid, callback, errorcallback) => {
  axios
    .delete(`http://localhost:8000/category_delete/${uid}`, {
      headers: {
        Authorization: "Basic " + localStorage.getItem("id_token"),
      },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteAllCat = (usr, token, callback, errorcallback) => {
  axios
    .delete("http://localhost:8000/category_delete", {
      data: usr,
      headers: { Authorization: `Basic ${token}` },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteBlog = (uid, callback, errorcallback) => {
  axios
    .delete(`http://localhost:8000/blog_delete/${uid}`, {
      headers: {
        Authorization: "Basic " + localStorage.getItem("id_token"),
      },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteAllBlog = (usr, token, callback, errorcallback) => {
  axios
    .delete("http://localhost:8000/blog_delete", {
      data: usr,
      headers: { Authorization: `Basic ${token}` },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteProduct = (uid, callback, errorcallback) => {
  axios
    .delete(`http://localhost:8000/product_delete/${uid}`, {
      headers: {
        Authorization: "Basic " + localStorage.getItem("id_token"),
      },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
export const deleteAllPro = (usr, token, callback, errorcallback) => {
  axios
    .delete("http://localhost:8000/product_delete", {
      data: usr,
      headers: { Authorization: `Basic ${token}` },
    })
    .then((res) => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch((err) => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};
