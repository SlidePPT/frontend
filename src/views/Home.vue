<template>
  <div class="Main__warp">
    <img class="Main__Title" src="../assets/sliceLogo.png" width="300px" height="300px" />
    <input class="Main__Input" :placeholder="data" @keyup.enter="input" v-model="input" />
    <div class="Main__Create" @click="create()">코드생성</div>
    <div @click="install()" style="padding:10px;">모바일 앱 다운</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deferredPrompt: null,
      data: "입력 후 ENTER를 눌러주세요",
      input: ""
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      this.deferredPrompt = e;
      e.prompt();
    });
  },
  methods: {
    install() {
      this.deferredPrompt.prompt();
    },
    input() {},
    create() {
      this.$store.state.router = "down";
      this.$router.push("./create");
    }
  }
};
</script>
<style>
.Main__warp {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
.Main__Input {
  padding: 15px;
  border-radius: 20px;
  box-shadow: 3px 3px 5px;
  min-width: 300px;
  margin: 10px;
}
.Main__Create {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
