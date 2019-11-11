<template>
  <div class="topbar">
    <div class="key">Key : QSFYFSEFCT</div>
    <div style="display:flex; margin:20px;">
      <div class="save">저장하기</div>
      <div class="exit" @click="exit()">나가기</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$store.state.router = "right";
      this.$router.push("/");
    }
  }
};
</script>

<style>
.save {
  margin: 5px;
}
.exit {
  margin: 5px;
}
.topbar {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.key {
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
  margin: 20px;
}
</style>