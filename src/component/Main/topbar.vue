<template>
  <div class="topbar">
    <div class="key">Key : {{this.$store.state.ppt._id}}</div>
    <div style="display:flex;">
      <div style="margin:10px" @click="addview1()">시작화면추가</div>
      <div style="margin:10px" @click="addview2()">목차화면추가</div>
      <div style="margin:10px" @click="addview3()">화면1추가</div>
      <div style="margin:10px" @click="addview4()">화면2추가</div>
      <div style="margin:10px" @click="addview5()">END화면추가</div>
    </div>
    <div style="display:flex; margin:20px;">
      <div class="save" @click="save()">저장하기</div>
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
    },
    addview1() {
      this.$store.commit("addview1");
    },
    addview2() {
      this.$store.commit("addview2");
    },
    addview3() {
      this.$store.commit("addview3");
    },
    addview4() {
      this.$store.commit("addview4");
    },
    addview5() {
      this.$store.commit("addview5");
    },
    save(){
      this.$store.dispatch("save","테스트");
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