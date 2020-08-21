import Vue, { PluginObject } from "vue";
import { AxiosConfig } from "@/config/axios";
import axios from "axios";

const _axios = axios.create(AxiosConfig);

_axios.interceptors.request.use(
  cfg => {
    // Do something before request is sent
    return cfg;
  },
  err => {
    // Do something with request error
    return Promise.reject(err);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  res => {
    // Do something with response data
    return res;
  },
  err => {
    // Do something with response error
    return Promise.reject(err);
  }
);

const Plugin: PluginObject<any> = {
  install: Vue => {
    Vue.$axios = _axios;
  },
};

Plugin.install = Vue => {
  Vue.$axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
