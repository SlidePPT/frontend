<template>
  <div class="create__warp">
    <div class="create__title">Key : QSFYFSEFCT</div>
    <div class="create__Box">
      <div class="create__yes create__flex" @click="yes()">
        <span>네</span>
      </div>
      <div class="create__no create__flex" @click="no()">
        <span>아니오</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    yes() {},
    no() {
      this.$store.state.router = "up";
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.create__warp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.create__title {
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
  transition: 1s;
  margin-top: 50px;
  margin-bottom: 50px;
}
.create__Box {
  min-width: 300px;
  min-height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.create__yes {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  font-size: 20px;
}
.create__yes:hover {
  background-color: #85bf31;
  color: white;
}
.create__no:hover {
  background-color: #ed3330;
  color: white;
}

.create__no {
  width: 100%;
  height: 100%;
  transition: 0.5s;
  font-size: 20px;
}
.create__flex {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
}
@media (max-width: 720px) {
  .create__title {
    font-size: 28px !important;
  }
}
</style>
