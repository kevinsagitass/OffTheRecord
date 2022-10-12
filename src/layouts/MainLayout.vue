<template>
  <q-layout view="hHr lpR fFf">
    <q-header bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title class="text-center">
          <!-- <q-avatar>

          </q-avatar> -->
          <span id="title"><a href="/">Off The Record</a></span>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs align="center" active-color="secondary">
        <q-route-tab class="category" to="/fashion" label="Fashion" />
        <q-route-tab
          class="category"
          to="/health-beauty"
          label="Health & Beauty"
        />
        <q-route-tab class="category" to="/games" label="Games" />
        <q-route-tab class="category" to="/anime" label="Anime" />
        <q-route-tab class="category" to="/books" label="Books" />
        <q-route-tab class="category" to="/hacks" label="Hacks" />
        <q-route-tab class="category" to="/others" label="Others" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered id="leftDrawer">
      <PostCard
        v-for="(index, post) in postStore.topPicks"
        :key="index"
        :genre="post.name"
        :thumbnail="post.thumbnail_url"
        :title="post.title"
        :useParallax="true"
      />
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      bordered
      id="rightDrawer"
      :width="250"
    >
      <q-list padding class="rounded-borders text-primary">
        <q-item
          clickable
          v-ripple
          :active="stateStore.currentLocation === 'liked'"
          to="/liked"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>

          <q-item-section>Liked Posts</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="stateStore.currentLocation === 'saved'"
          to="/saved"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="bookmark" />
          </q-item-section>

          <q-item-section>Saved Posts</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="stateStore.currentLocation === 'review'"
          to="/review"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="reviews" />
          </q-item-section>

          <q-item-section>Be a Reviewer</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          :active="stateStore.currentLocation === 'mail'"
          to="/mail"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="email" />
          </q-item-section>

          <q-item-section>Mailling List</q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item
          clickable
          v-ripple
          :active="stateStore.currentLocation === 'about'"
          to="/about"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon name="help" />
          </q-item-section>

          <q-item-section>About</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div id="searchBox">
        <q-input
          outlined
          rounded
          v-model="stateStore.query"
          bg-color="accent"
          input-class="text-left"
          class="q-ml-md ma-md"
          id="searchBar"
        >
          <template v-slot:append>
            <q-icon v-if="stateStore.query === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="stateStore.query = ''"
            />
          </template>
        </q-input>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStateStore } from "src/stores/state-store";
import { ref } from "vue";
import PostCard from "../components/PostCard.vue";
import { usePostStore } from "src/stores/post-store";

export default {
  components: { PostCard },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const stateStore = useStateStore();
    const postStore = usePostStore();

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      stateStore,
      postStore,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
