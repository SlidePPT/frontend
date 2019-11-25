<template>
  <div class="Main__warp">
    <img class="Main__Title" src="../assets/sliceLogo.png" width="300px" height="300px" />
    <input
      class="Main__Input"
      :placeholder="data"
      @keyup.enter="input()"
      v-model="$store.state.code"
    />
    <div class="Main__Create" @click="create()">PPT 생성</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      deferredPrompt: null,
      data: "입력 후 ENTER를 눌러주세요"
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
    input() {
      this.$store
        .dispatch("check", {})
        .then(response => {
          if (response.st) {
            this.$store.state.router = "down";
            console.log(this.$store.state.ppt);
            this.$router.push("/mainview");
          }
        })
        .catch(e => {
          console.log("에러");
        });
    },
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
  height: 100%;
}
.Main__Input {
  padding: 15px;
  border-radius: 20px;
  box-shadow: 3px 3px 2px #222222;
  min-width: 300px;
  margin: 10px;
  opacity: 0.9;
}
.Main__Create {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
}
</style>
