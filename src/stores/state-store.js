import ImageKit from "imagekit-javascript";
import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => ({
    currentTab: "home",
    query: "",
    imageKit: new ImageKit({
      urlEndpoint: "https://ik.imagekit.io/wqpnagpiy/",
    }),
    timer: [],
  }),
  getters: {},
  actions: {
    getCurrentLocation() {
      const location = window.location.href.split("/");
      return location[location.length - 1];
    },
    getImage(path, transformation = [{ height: "500", width: "500" }]) {
      return this.imageKit.url({ path, transformation: transformation });
    },
  },
});
