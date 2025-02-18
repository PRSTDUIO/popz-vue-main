<template>
  <div class="fixed top-0 left-0 right-0 z-50 shadow-xl navbar bg-[#2a2a2a]">
    <div class="flex-1">
      <figure>
        <img src="./assets/logo.webp" alt="maquee-cover" class="w-[110px] h-[80px]" />
      </figure>
    </div>
    <div class="flex-none gap-2">
      <!-- <div class="drawer drawer-end w-[30px] lg:w-[40px]">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer-4">
            <img
              for="my-drawer-4"
              src="./assets/msg_white.png"
              alt="maquee-cover"
              class="w-[35px] h-[35px]"
            />
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <div class="min-h-full menu w-80 bg-base-200 text-base-content">
            <div v-for="(item, index) in chat" :key="index">
              <div class="chat chat-start" v-if="item.publisher != pubnub.getUUID()">
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    <img src="./assets/456322.webp"  style="color: #fd9228;background-color: #fd9228;"/>
                  </div>
                </div>
                <div class="chat-bubble">{{ item.message.text }}</div>
              </div>
              <div class="chat chat-end" v-else>
                <div class="chat-image avatar">
                  <div class="w-10 rounded-full">
                    <img src="./assets/456322.webp" />
                  </div>
                </div>
                <div class="chat-bubble">{{ item.message.text }}</div>
              </div>
            </div>
            <div class="fixed flex justify-between w-full p-2 bg-violet-100" style="bottom: 0px">
              <div class="form-control">
                <div class="flex space-x-2">
                  <input
                    type="text"
                    class="w-full input input-primary input-bordered"
                    v-model="msg"
                  />
                  <button class="btn btn-primary" @click="SendMsg">SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <a href="https://lin.ee/lKFxrRW">
        <img src="./assets/line.webp" class="w-[30px] lg:w-[40px]"/>
      </a>
      <button
        class="rounded-full btn btn-outline btn-sm bg-gradient-to-t from-[#fd9228] via-[#fc7112] to-[#ff460d] text-white border-none shadow-xl"
      >
        <a
          href="https://popslot.electrikora.com/"
          class="text-[12px] lg:text-sm text-white no-underline"
          >เข้าสู่ระบบ</a
        >
      </button>
      <button
        class="regis text-white rounded-full btn btn-primary btn-sm bg-gradient-to-b from-yellow-100 via-[#eb4034] to-[#eb4034] border-none"
      >
        <a
          href="https://popslot.electrikora.com/?action=register"
          class="text-[12px] lg:text-sm text-white no-underline"
          >สมัครสมาชิก</a
        >
      </button>

      <!-- <ul class="px-1 menu menu-horizontal">
                  <li>
                      <a>
                          <button class="text-white rounded-full btn btn-primary btn-md">
                              สมัคร / เข้าสู่ระบบ
                          </button>
                      </a>
                  </li>
                  <li>
                      <div class="drawer drawer-end">
                          <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                          <div class="drawer-content">
                              <label for="my-drawer-4" class="btn btn-primary">Open</label>
                          </div>
                          <div class="drawer-side">
                              <label for="my-drawer-4" class="drawer-overlay"></label>
                              <ul class="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
                                  <li><a>Sidebar Item 1</a></li>
                                  <li><a>Sidebar Item 2</a></li>
                              </ul>
                          </div>
                      </div>
                  </li>
              </ul> -->
    </div>
  </div>
  <div class="bg-[#2a2a2a]">
    <router-view />
  </div>

  <footer class="footer bg-[#eb7b31] text-[#ffffff] p-10">
    <div class="w-full">
      <div class="container py-2 mx-auto lg:w-[60%] md:w-[100%]">
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div class="flex justify-center col-span-4 lg:col-span-2">
            <!-- <h1 class="text-[24px]">POPSLOTS</h1> -->
            <figure>
              <img src="./assets/logo.webp" alt="maquee-cover" class="w-[110px] h-[80px]" />
            </figure>
          </div>
          <div class="flex flex-col">
            <span class="footer-title">Services</span>
            <a class="link link-hover text-[#ffffff]">Branding</a>
            <a class="link link-hover text-[#ffffff]">Design</a>
            <a class="link link-hover text-[#ffffff]">Marketing</a>
            <a class="link link-hover text-[#ffffff]">Advertisement</a>
          </div>
          <div class="flex">
            <div>
              <figure>
                <img src="./assets/icon.png" alt="maquee-cover" class="w-[25px] h-[25px] m-4" />
              </figure>
            </div>
            <div>
              <div class="">Secure</div>
              <div class="">SSL Encryption</div>
            </div>
          </div>
          <div class="flex justify-center col-span-4">
            <div class="grid grid-cols-7 gap-2">
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/KBANK.png" alt="KBANK" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/SCB.png" alt="SCB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/KTB.png" alt="KTB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/BAY.png" alt="BAY" />
              </div>
              <div>
                <img
                  class="h-10 rounded-full w-15"
                  src="./assets/TRUEWALLET.png"
                  alt="TRUEWALLET"
                />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/GSB.png" alt="GSB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/BBL.png" alt="BBL" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/BAAC.png" alt="BAAC" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/KKB.png" alt="KKB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/OSK.png" alt="OSK" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/TTB.png" alt="TTB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/TISGO.png" alt="TISGO" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/UOB.png" alt="UOB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/CITI.png" alt="CITI" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/LNH.png" alt="LNH" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/CIMB.png" alt="CIMB" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/TCR.png" alt="TCR" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/MIZUHO.png" alt="MIZUHO" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/SCBT.png" alt="SCBT" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/ICBC.png" alt="ICBC" />
              </div>
              <div>
                <img class="h-10 rounded-full w-15" src="./assets/ISBT.png" alt="ISBT" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-4 mb-4">
          <h6>พาร์ทเนอร์</h6>
        </div>
        <div class="flex justify-center gap-8 mt-4 mb-4">
          <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <!-- <button class="btn btn-outline btn-info w-[160px] h-[40px]">
                              <figure><img src="./assets/logo-greyscale-inverse.webp" alt="maquee-cover"
                                      class=" w-[160px] h-[40px]" /></figure>
                          </button> -->
            <button class="btn btn-outline btn-info w-[160px] h-[40px]">
              <figure>
                <img src="./assets/116lotto.webp" alt="maquee-cover" class="w-[160px] h-[40px]" />
              </figure>
            </button>
            <button class="btn btn-outline btn-info w-[160px] h-[40px]">
              <figure>
                <img src="./assets/betflik168.svg" alt="maquee-cover" class="w-[160px] h-[40px]" />
              </figure>
            </button>
            <button class="btn btn-outline btn-info w-[160px] h-[40px]">
              <figure>
                <img
                  src="./assets/hungrypussy888.webp"
                  alt="maquee-cover"
                  class="w-[160px] h-[40px]"
                />
              </figure>
            </button>
            <button class="btn btn-outline btn-info w-[160px] h-[40px]">
              <figure>
                <img src="./assets/918kissme.webp" alt="maquee-cover" class="w-[160px] h-[40px]" />
              </figure>
            </button>
          </div>
        </div>
        <hr />
        <div class="flex justify-center mt-4">
          <div class="text-center lg:w-[50%] md:w=[100%]">
            <p>
              สัญลักษณ์และรูปภาพต่างๆบนเว็บไซต์ POPSLOTS.com ถือเป็นทรัพย์สินทางปัญญา
              ห้ามมิให้มีการคัดลอก ดัดแปลง ทำซ้ำ แก้ไข
              แผยแพร่โดยมิได้รับการยินยอมเป็นลายลักษณ์อักษรจากทาง POPSLOTS
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from 'vue'
import PubNub from 'pubnub'
const chat = ref([])
const chat_send = ref([])
const msg = ref('')
const userId = ref((Math.random() + 1).toString(36).substring(7))
const pubnub = new PubNub({
  publishKey: 'pub-c-ff78d3e1-9a02-410f-ba03-4c79f19e162f',
  subscribeKey: 'sub-c-546992ad-e5f0-45bb-baf9-51349d824544',
  userId: userId.value,
  autoNetworkDetection: true, // enable for non-browser environment automatic reconnection
  restore: true
})
pubnub.fetchMessages(
  {
    channels: ['channel_y'],
    end: '15343325004275466',
    count: 100
  },
  (status, response) => {
    chat.value = response.channels.channel_y
    // handle response
  }
)
pubnub.addListener({
  message: function (msg) {
    chat.value.push(msg)
  }
})
pubnub.subscribe({
  channels: ['channel_y']
})
async function SendMsg() {
  const newMessage = {
    text: msg.value
  }
  try {
    const result = await pubnub.publish({
      message: newMessage,
      channel: 'channel_y'
    })
    msg.value = ''
    console.log('message published w/ server response: ', result)
  } catch (status) {
    console.log('publishing failed w/ status: ', status)
  }
}
</script>

<style scpoed>
@keyframes glowing {
  0% {
    background-color: #eb4034;
    box-shadow: 0 0 5px #eb4034;
  }

  50% {
    background-color: #eb4034;
    box-shadow: 0 0 20px #eb4034;
  }

  100% {
    background-color: #eb4034;
    box-shadow: 0 0 5px #eb4034;
  }
}

.regis {
  animation: glowing 1300ms infinite;
}
</style>
