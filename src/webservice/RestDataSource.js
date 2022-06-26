import Axios from "axios";

export default function RestDataSource(base_url) {
  this.BASE_URL = base_url;

  this.SendRequest = function (method, url, callback) {
    Axios.request({
      method: method,
      url: url,
    }).then((response) => callback(response.data));
  };

  this.SendRequestAsync = async function (method, url, callback, data) {
    const response = await Axios.request({
      method: method,
      url: url,
      data: data,
    });
    callback(response.data);
  };

  this.GetData = function (callback) {
    //this.SendRequest("get", this.base_url, callback);
    this.SendRequestAsync("get", this.BASE_URL, callback);
  };

  this.GetOne = function (id, callback) {
    this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
  };

  this.Store = function (data, callback) {
    this.SendRequestAsync("post", this.BASE_URL, callback, data);
  };

  this.Update = function (data, callback) {
    this.SendRequestAsync("put", `${this.BASE_URL}/${data.id}`, callback, data);
  };

  this.Delete = function (data, callback) {
    this.SendRequestAsync(
      "delete",
      `${this.BASE_URL}/${data.id}`,
      callback,
      data
    );
  };
}
