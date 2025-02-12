<template>
  <div class="hero">
    <div class="hero-media">
      <video
        class="hero-video"
        autoplay="autoplay"
        loop="loop"
        muted
        defualtMuted
        playsinline
      >
        <source src="../assets/Mobile.mp4" type="video/mp4" />
      </video>
      <div class="hero-image"></div>
      <div class="hero-text">
        <h2>POPSLOT</h2>
        <h3>เว็บสล็อตออนไลน์ที่มาแรงที่สุด</h3>
        <h4>
          <span
            style="background-color: #ff9100; font-weight: 700"
            class="mt-5 p-2 rounded-lg text-[#2a2a2e]"
            >TOP 1</span
          >
          อันดับ 1 ในไทยตอนนี้
        </h4>
      </div>
    </div>
  </div>
</template>
<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, onMounted, onBeforeUnmount } from "vue";
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.to(".hero-video, .hero-image", {
    scale: 1, // Adjust the scale value for your desired zoom-out effect
    duration: 2, // Adjust the duration of the zoom-out effect
    transformOrigin: "center center",
  });

  // Define the scroll range where the zoom-out effect occurs
  ScrollTrigger.create({
    animation: tl,
    trigger: ".hero",
    start: "top top",
    end: "center top", // Adjust the scroll range as needed
    scrub: true,
    pin: true, // Pin the content in the centered state
  });

  gsap.set(".hero-text", { opacity: 1 }); // Set the initial opacity to 1

  // Create a ScrollTrigger for the text to gradually disappear
  ScrollTrigger.create({
    // Trigger the fade-out animation when hero section is at the center of the viewport
    animation: gsap.to(".hero-text", { opacity: 0 }),
    trigger: ".hero",
    start: "top+=400 center",
    end: "center top", // Adjust the scroll range for the text to fully disappear
    scrub: true,
  });

  // Keep the content in the zoomed-out state for a specific scroll range
  // ScrollTrigger.create({
  //   trigger: ".hero",
  //   start: "center top",
  //   end: "center center", // Adjust the scroll range to center the content
  //   scrub: false,
  //   pin: true, // Pin the content in the centered state
  // });
});
</script>

<style scoped>
.hero {
  content: "";
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.hero-media {
  position: relative;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1); /* Initial scale */
  transform-origin: center center;
  /* transition: transform 2.5s ease; */
}

.hero-image {
  content: "";
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("https://pigspin.asia/images/mobile-frame/phone-mobile-cut.png");
  background-size: cover;
  background-position: center;
  transform: scale(4.5); /* Initial scale */
  transform-origin: center center;
  /* transition: transform 2.5s ease; */
}

.hero-text {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  width: 100%;
}

h4 {
  margin-top: 24px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: 700;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  opacity: 1;
}
h3 {
  margin-top: 24px;

  width: 100%;
  text-align: center;
  font-size: 24px;
  color: white;
  font-weight: 700;
  filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
  opacity: 1;
}
</style>
