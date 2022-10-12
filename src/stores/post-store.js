import { defineStore } from "pinia";
import { api } from "src/boot/axios";
import { ref } from "vue";

export const usePostStore = defineStore("posts", () => {
  const posts = ref([]);
  const topPosts = ref([]);

  const getPosts = async (genre, offset) => {
    let url = "posts";
    const resp = await api.post(url, {
      genre,
      offset,
    });
    posts.value = posts.value.concat(resp.data);
  };

  const getTopPicks = async (genre, numOfPost) => {
    let url = "top-posts";
    const resp = await api.post(url, {
      genre,
      numOfPost,
    });
    topPosts.value = resp.data;
  };

  const filteredPosts = (query) => {
    if (query == "") return posts.value;

    return posts.value.filter((post) => {
      post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  return {
    posts,
    topPosts,
    getPosts,
    getTopPicks,
    filteredPosts
  };
});
