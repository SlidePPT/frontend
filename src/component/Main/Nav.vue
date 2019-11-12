<template>
  <div class="nav">
    <div v-if="$store.state.ppt.template == 0" style="width:100%; height:100%; overflow:auto">
      <div
        v-for="(a,index) in $store.state.ppt.number"
        :key="index"
        :data="a"
        :class="($store.state.ppt.now == Number(index))? 'scale test':'test'"
        @click="change(index)"
        @mousedown.right="mousedown(index)"
      >
        <Test1 :com="true" v-if="a.number == '1'" :data="a"></Test1>
        <Test2 :com="true" v-if="a.number == '2'" :data="a"></Test2>
        <Test3 :com="true" v-if="a.number == '3'" :data="a"></Test3>
        <Test4 :com="true" v-if="a.number == '4'" :data="a"></Test4>
        <Test5 :com="true" v-if="a.number == '5'" :data="a"></Test5>
      </div>
    </div>

    <div v-if="$store.state.ppt.template == 1" style="width:100%; height:100%; overflow:auto">
      <div
        v-for="(a,index) in $store.state.ppt.number"
        :key="index"
        :data="a"
        :class="($store.state.ppt.now == Number(index))? 'scale test':'test'"
        @click="change(index)"
        @mousedown.right="mousedown(index)"
      >
        <Test6 :com="true" v-if="a.number == '1'" :data="a"></Test6>
        <Test7 :com="true" v-if="a.number == '2'" :data="a"></Test7>
        <Test8 :com="true" v-if="a.number == '3'" :data="a"></Test8>
        <Test9 :com="true" v-if="a.number == '4'" :data="a"></Test9>
        <Test10 :com="true" v-if="a.number == '5'" :data="a"></Test10>
      </div>
    </div>
  </div>
</template>

<script>
import Test1 from "../../component/Template/one/Template1";
import Test2 from "../../component/Template/one/Template2";
import Test3 from "../../component/Template/one/Template3";
import Test4 from "../../component/Template/one/Template4";
import Test5 from "../../component/Template/one/Template5";

import Test6 from "../../component/Template/two/Template1";
import Test7 from "../../component/Template/two/Template2";
import Test8 from "../../component/Template/two/Template3";
import Test9 from "../../component/Template/two/Template4";
import Test10 from "../../component/Template/two/Template5";
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
  methods: {
    change(number) {
      console.log(number);
      this.$store.state.ppt.now = Number(number);
    },
    mousedown(index) {
      this.$store.state.ppt.number.splice(index, 1);
    }
  }
};
</script>

<style>
.nav {
  width: 20%;
  height: 95%;
  background-color: white;
  overflow-y: auto;
}
::-webkit-scrollbar {
  background: white;
  width: 7px;
}
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 30px;
}

.test {
  margin: 40px;
  width: 70%;
  height: 21%;
  border: 2px solid black;
  margin-left: auto;
  margin-right: auto;
  transition: 0.5s;
}
.scale {
  transform: scale(1.1);
}
</style>