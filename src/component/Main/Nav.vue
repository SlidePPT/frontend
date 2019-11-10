<template>
  <div class="nav">
      <div  v-for="(a,index) in $store.state.ppt.number" :key="index" :data="a" :class="($store.state.ppt.now == Number(index))? 'scale test':'test'" @click="change(index)">
        <Test1 :com="true" v-if="a.number == '1'" :data="a" ></Test1>
        <Test2 :com="true" v-if="a.number == '2'" :data="a" ></Test2>
        <Test3 :com="true" v-if="a.number == '3'" :data="a" ></Test3>
        <Test4 :com="true" v-if="a.number == '4'" :data="a" ></Test4>
        <Test5 :com="true" v-if="a.number == '5'" :data="a" ></Test5>
      </div>
</div>
      
</template>

<script>
import Test1 from "../../component/Template/one/Template1"
import Test2 from "../../component/Template/one/Template2"
import Test3 from "../../component/Template/one/Template3"
import Test4 from "../../component/Template/one/Template4"
import Test5 from "../../component/Template/one/Template5"


export default {
components:{
    Test1,
    Test2,
     Test3,
     Test4,
     Test5
},
methods:{
    change(number){
        console.log(number)
        this.$store.state.ppt.now = Number(number)
    }
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
    transition: 0.5s;
}
.scale{
     transform: scale(1.1);
}
</style>