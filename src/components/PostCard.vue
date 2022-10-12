<template>
  <q-card
    bordered
    class="my-card"
    :style="{ 'max-width': maxWidth + 'px', 'max-height': maxHeight + 'px' }"
  >
    <q-parallax v-if="useParallax" :src="thumbnail" :height="parallaxHeight" />
    <q-img v-else :src="thumbnail" :alt="imageAlt" />

    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-actions vertical align="right" class="q-pa-none">
      <q-btn class="read-more-card" flat>Read More</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostCard",
  props: {
    genre: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    maxWidth: {
      type: Number,
      required: false,
      default: 250,
    },
    maxHeight: {
      type: Number,
      required: false,
      default: 500,
    },
    parallaxHeight: {
      type: Number,
      required: false,
      default: 150,
    },
    useParallax: {
      type: Boolean,
      required: false,
    },
    imageAlt: {
      type: String,
      required: false,
      default: "",
    },
  },
  setup() {},
});
</script>
