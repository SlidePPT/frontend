<template>
  <div class="create__warp">
    <div class="create__title">템플릿</div>
    <div style="display:flex;">
      <div class="create__Box">
        <div @click="goto1()" style="width:100%; height:100%">
          <Template1 :data="$store.state.ppt.number"></Template1>
        </div>
      </div>
      <div class="create__Box">
        <div @click="goto2()" style="width:100%; height:100%">
          <Template2 :data="$store.state.ppt.number"></Template2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Template1 from "../component/Template/one/Template1";
import Template2 from "../component/Template/two/Template1";
export default {
  methods: {
    goto1() {
      this.$store.state.ppt.template = 0;
      this.$store.state.router = "left";
      this.$store.state.ppt.number = [
        {
          number: "1",
          title: "제목을 입력해주세요",
          subTitle: "부제목을 입력해주세요"
        },
        {
          number: "2",
          title: "목차",
          text: [
            "1. 목차를 입력해주세요",
            "2. 목차를 입력해주세요",
            "3. 목차를 입력해주세요",
            "4. 목차를 입력해주세요"
          ]
        },
        {
          number: "3",
          title: "제목을 입력해주세요",
          image: "이미지링크",
          text: "내용을 입력해주세요"
        },
        {
          number: "4",
          title: "제목을 입력해주세요",
          text: "내용을 입력해주세요"
        },
        {
          number: "5",
          title: "Thanks for listening",
          text: "감사합니다"
        }
      ];
        this.$store.dispatch("make",this.$store.state.ppt)




      this.$router.push("/main");
    },
    goto2() {
      this.$store.state.ppt.template = 1;
      this.$store.state.router = "left";
      this.$store.state.ppt.number = [
        {
          number: "1",
          title: "제목을 입력해주세요",
          subTitle: "부제목을 입력해주세요"
        },
        {
          number: "2",
          title: "목차",
          text: [
            "1. 목차를 입력해주세요",
            "2. 목차를 입력해주세요",
            "3. 목차를 입력해주세요",
            "4. 목차를 입력해주세요"
          ]
        },
        {
          number: "3",
          title: "제목을 입력해주세요",
          image: "이미지링크",
          text: "내용을 입력해주세요"
        },
        {
          number: "4",
          title: "제목을 입력해주세요",
          text: "내용을 입력해주세요"
        },
        {
          number: "5",
          title: "Thanks for listening",
          text: "감사합니다"
        }
      ];
        this.$store.dispatch("make")
        console.log("dd")
      this.$router.push("/main");
    }
  },
  components: {
    Template1,
    Template2
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
  min-height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
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
