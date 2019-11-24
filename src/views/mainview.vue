<template>
  <div class="Mainview__wrap">
    <div></div>
    <div class="Mainview__box" @click="anno()">
      <span>발표하기</span>
    </div>
    <div class="Mainview__box" @click="Modify()">
      <span>수정하기</span>
    </div>
    <div></div>
    <div class="exit" @click="exit()">나가기</div>
  </div>
</template>

<script>
export default {
  methods: {
    Modify() {
      this.$router.push("/main");
    },
    anno() {
      this.$router.push("/anno");
    },
    exit() {
      this.$store.state.ppt.now = 0;
      this.$store.state.ppt.number = [];
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.exit {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 24px;
  font-weight: 600;
}
.Mainview__wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Mainview__box {
  width: 20%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 1px 1px 2px;
  background-color: gray;
  color: white;
  font-size: 30px;
}
.Mainview__box:hover {
}
.Mainview__box > * {
}
</style>
