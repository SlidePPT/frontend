<template>
  <div class="nav">
      <div class="test" style="transform: scale(1.1,1.1);">
        <Test :com="true" ></Test>
      </div>
      <div class="test">
        <Test1 :com="true" ></Test1>
      </div>
       <div class="test">
        <Test2 :com="true" ></Test2>
      </div>
      <div class="test">
        <Test3 :com="true" ></Test3>
      </div>
      <div class="test">
        <Test4 :com="true" ></Test4>
      </div>
    </div>
</template>

<script>
import Test from "../../component/Template/one/Template1"
import Test1 from "../../component/Template/one/Template2"
import Test2 from "../../component/Template/one/Template3"
import Test3 from "../../component/Template/one/Template4"
import Test4 from "../../component/Template/one/Template5"


export default {
components:{
    Test,
    Test1,
     Test2,
     Test3,
     Test4
}
}
</script>

<style>
.nav{
    width: 20%;
    height:95%;
    background-color: white;
    overflow-y:auto;
}
 ::-webkit-scrollbar {
            background: white;
            width: 7px;
        }
        ::-webkit-scrollbar-thumb {
            background: gray;
            border-radius: 30px;
        }

.test{
    margin: 40px;
    width: 70%;
    height:21%;
    border: 2px solid black;
    margin-left: auto;
    margin-right: auto;
}
</style>