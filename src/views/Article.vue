<template>
  <div class="w-[100%] p-24" v-if="state.isShow">
    <div class="flex justify-center">
      <!-- {{ state.Post.title.rendered }} -->
      <h4 class="text-white">{{ state.Post.title.rendered }}</h4>
    </div>
    <div>
      <img :src="state.Img" class="rounded-lg" v-if="state.Img" />
    </div>
    <div>
      <div v-html="state.Post.content.rendered" class="text-white"></div>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted, ref } from 'vue'
import axios from 'axios'

const state = reactive({
  Img: null,
  Post: {},
  isShow: false
})
const props = defineProps(['Id'])

onMounted(async () => {
  await axios
    .get(`https://admin.popslot.me/wp-json/wp/v2/posts/${props.Id}?_embed`)
    .then((response) => {
      state.Post = response.data
      try {
        state.Img = state.Post._embedded['wp:featuredmedia'][0]?.source_url
      } catch (error) {
        state.Img = null
      }
      state.isShow = true
      //   for (const data of response.data) {
      //     if (data._embedded['wp:featuredmedia']) {
      //       posts.push({
      //         ...data,
      //         url_img: data._embedded['wp:featuredmedia'][0]?.source_url
      //       })
      //     } else {
      //       posts.push({
      //         ...data,
      //         url_img: null
      //       })
      //     }
      //   }
    })
})
</script>
<style>
</style>
