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
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';
import { useHead } from '#imports';

const state = reactive({
  Img: null,
  Post: {},
  isShow: false
})
const props = defineProps(['Id'])

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://admin.popslot.me/wp-json/wp/v2/posts/${props.Id}?_embed`
    )
    state.Post = response.data

    // ดึงรูปภาพเด่น (Featured Image)
    state.Img = state.Post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || null

    // ตั้งค่า SEO โดยใช้ข้อมูลจาก Yoast SEO
    useHead({
      title: state.Post?.yoast_head_json?.title || state.Post?.title?.rendered || 'เว็บสล็อตออนไลน์ ที่มาแรงที่สุด ติดอันดับในไทยตอนนี้ - POPSLOT',
      meta: [
        {
          name: 'description',
          content: state.Post?.yoast_head_json?.description || 'POPSLOT รวมเกมสล็อตหลากหลายค่าย Spinix Pg Pragmatic Amb รวมไว้ที่เว็บเดียว สมัครสมาชิกใหม่รับโบนัสฟรี ฝากถอนด้วยระบบ Auto สะดวกรวดเร็ว'
        },
        { property: 'og:title', content: state.Post?.yoast_head_json?.og_title || '' },
        { property: 'og:description', content: state.Post?.yoast_head_json?.og_description || '' },
        { property: 'og:image', content: state.Post?.yoast_head_json?.og_image?.[0]?.url || '' }
      ]
    })

    state.isShow = true
  } catch (error) {
    console.error('Error fetching post:', error)
  }
})
</script>
<style></style>
