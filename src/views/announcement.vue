<template>
  <div class="anno__wrap">
            <Test1 :data="$store.state.ppt.number[0]" v-if="0 == $store.state.ppt.now"></Test1>
            <Test2 :data="$store.state.ppt.number[1]" v-if="1 == $store.state.ppt.now"></Test2>
            <Test3 :data="$store.state.ppt.number[2]" v-if="2 == $store.state.ppt.now"></Test3>
            <Test4 :data="$store.state.ppt.number[3]" v-if="3 == $store.state.ppt.now"></Test4>
            <Test5 :data="$store.state.ppt.number[4]" v-if="4 == $store.state.ppt.now"></Test5>
            <Test6 :data="$store.state.ppt.number[5]" v-if="5 == $store.state.ppt.now"></Test6>
            <Test7 :data="$store.state.ppt.number[6]" v-if="6 == $store.state.ppt.now"></Test7>
            <Test8 :data="$store.state.ppt.number[7]" v-if="7 == $store.state.ppt.now"></Test8>
            <Test9 :data="$store.state.ppt.number[8]" v-if="8 == $store.state.ppt.now"></Test9>
            <Test10 :data="$store.state.ppt.number[9]" v-if="9 == $store.state.ppt.now"></Test10>
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
      data: "입력 후 ENTER를 눌러주세요"
    };
  },
}
</script>

<style>
.anno__wrap{
    width: 100%;
    height:100%;
}
</style>