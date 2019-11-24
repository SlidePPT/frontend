<template>
  <div class="anno__wrap">
    <div
      @click.left="up()"
      @click.right="down()"
      v-for="(a,index) in $store.state.ppt.number"
      :key="index"
    >
      <div class="anno_wrap">
        <Test1
          :data="a"
          v-if="now == index && a.number == '1' && $store.state.ppt.template == 0"
          class="anno__wrap"
        ></Test1>
        <Test2
          :data="a"
          v-if="now == index &&a.number == '2' && $store.state.ppt.template == 0"
          class="anno__wrap"
        ></Test2>
        <Test3
          :data="a"
          v-if="now == index &&a.number == '3' && $store.state.ppt.template == 0"
          class="anno__wrap"
        ></Test3>
        <Test4
          :data="a"
          v-if="now == index &&a.number == '4' && $store.state.ppt.template == 0"
          class="anno__wrap"
        ></Test4>
        <Test5
          :data="a"
          v-if="now == index &&a.number == '5' && $store.state.ppt.template == 0"
          class="anno__wrap"
        ></Test5>
        <Test6
          :data="a"
          v-if="now == index &&a.number == '1' && $store.state.ppt.template == 1"
          class="anno__wrap"
        ></Test6>
        <Test7
          :data="a"
          v-if="now == index &&a.number == '2' && $store.state.ppt.template == 1"
          class="anno__wrap"
        ></Test7>
        <Test8
          :data="a"
          v-if="now == index &&a.number == '3' && $store.state.ppt.template == 1"
          class="anno__wrap"
        ></Test8>
        <Test9
          :data="a"
          v-if="now == index &&a.number == '4' && $store.state.ppt.template == 1"
          class="anno__wrap"
        ></Test9>
        <Test10
          :data="a"
          v-if="now == index &&a.number == '5' && $store.state.ppt.template == 1"
          class="anno__wrap"
        ></Test10>
        <div
          class="anno__wrap"
          v-if="$store.state.ppt.number.length == now && index == 0"
          style="display:flex; justify-content:center; align-items: center; font-size:30px; flex-direction: column;"
        >
          <div>PPT가 종료되었습니다</div>
          <button @click="exit()" style="border-radius:30px; padding:10px 20px;">나가기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Test1 from "../component/Template/one/Template1";
import Test2 from "../component/Template/one/Template2";
import Test3 from "../component/Template/one/Template3";
import Test4 from "../component/Template/one/Template4";
import Test5 from "../component/Template/one/Template5";

import Test6 from "../component/Template/two/Template1";
import Test7 from "../component/Template/two/Template2";
import Test8 from "../component/Template/two/Template3";
import Test9 from "../component/Template/two/Template4";
import Test10 from "../component/Template/two/Template5";
export default {
  components: {
    Test1,
    Test2,
    Test3,
    Test4,
    Test5,
    Test6,
    Test7,
    Test8,
    Test9,
    Test10
  },
  data() {
    return {
      deferredPrompt: null,
      data: "입력 후 ENTER를 눌러주세요",
      now: 0
    };
  },
  methods: {
    up() {
      console.log(this.$store.state.ppt.number.length);
      if (this.now != this.$store.state.ppt.number.length) {
        this.now++;
      }
    },
    down() {
      if (this.now != 0) {
        this.now--;
      }
    },
    exit() {
      this.$router.push("/mainview");
    }
  }
};
</script>

<style>
.anno__wrap {
  width: 100%;
  height: 100vh !important;
}
.down-enter {
  transform: translateY(100%);
}
.down-enter-to {
  transform: translateY(0px);
}
.down-leave {
  transform: translateY(0px);
}
.down-leave-to {
  transform: translateY(-100%);
}
.up-enter {
  transform: translateY(-100%);
}
.up-enter-to {
  transform: translateY(0px);
}
.up-leave {
  transform: translateY(0px);
}
.up-leave-to {
  transform: translateY(100%);
}
</style>