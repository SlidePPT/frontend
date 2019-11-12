<template>
  <div class="section">
    <div class="sectionb" v-if="$store.state.ppt.template == '0'">
      <Test1
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 1"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test1>
      <Test2
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 2"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test2>
      <Test3
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 3"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test3>
      <Test4
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 4"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test4>
      <Test5
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 5"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test5>
    </div>

    <div class="sectionb" v-if="$store.state.ppt.template == '1'">
      <Test6
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 1"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test6>
      <Test7
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 2"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test7>
      <Test8
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 3"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test8>
      <Test9
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 4"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test9>
      <Test10
        v-if="$store.state.ppt.number[$store.state.ppt.now].number == 5"
        :comm="true"
        :data="$store.state.ppt.number[$store.state.ppt.now]"
      ></Test10>
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
  }
};
</script>

<style>
.section {
  width: 55%;
  height: 95%;
  background-color: white;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sectionb {
  width: 100%;
  height: 70%;
}
.button {
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 100;
}
</style>

