<template>
  <q-page class="flex flex-center">
    <q-infinite-scroll
      @load="onLoad"
      :offset="300"
      class="fit row wrap justify-around items-start content-start scrolling-component"
    >
      <div
        class="col-3"
        v-for="(post, index) in postStore.filteredPosts(stateStore.query)"
        :key="index"
      >
        <PostCard
          :thumbnail="
            stateStore.getImage(post.thumbnail_url, [
              { width: 200, height: 150 },
            ])
          "
          :imageAlt="post.thumbnail_url"
          :title="post.title"
          :genre="post.genre_id"
          :maxWidth="350"
          :maxHeight="500"
          :parallaxHeight="200"
        />
      </div>
      <template v-slot:loading>
        <div class="infiniteScrollLoading">
          <q-spinner-dots color="primary" size="60px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script>
import { useStateStore } from "src/stores/state-store";
import { usePostStore } from "src/stores/post-store";
import { ref, defineComponent, onMounted } from "vue";
import PostCard from "../components/PostCard.vue";

export default defineComponent({
  name: "GamePage",
  components: { PostCard },
  setup() {
    const stateStore = useStateStore();
    const postStore = usePostStore();
    const scrollComponent = ref(null);
    const lastOffSet = ref(0);
    const currentOffSet = ref(0);
    const firstLoad = ref(true);

    onMounted(() => {
      postStore.posts = [];
      postStore.getTopPicks(stateStore.getCurrentLocation(), 10);
    });

    const onLoad = (index, done) => {
      if (lastOffSet.value != currentOffSet.value || firstLoad.value) {
        firstLoad.value = false;
        setTimeout(() => {
          postStore.getPosts(
            stateStore.getCurrentLocation(),
            currentOffSet.value
          );
          lastOffSet.value = currentOffSet.value;
          currentOffSet.value = postStore.posts.length;
          done();
        }, 2000);
        console.log(stateStore.timer);
      } else {
        done();
      }
    };

    return {
      stateStore,
      postStore,
      scrollComponent,
      onLoad,
    };
  },
});
</script>
