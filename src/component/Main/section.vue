<template>
    <div class="section" >
        <div class="sectionb">
            <Test1 v-if="$store.state.ppt.number[$store.state.ppt.now].number == 1"  :comm='true' :data="$store.state.ppt.number[$store.state.ppt.now]" ></Test1>
            <Test2 v-if="$store.state.ppt.number[$store.state.ppt.now].number == 2"  :comm='true' :data="$store.state.ppt.number[$store.state.ppt.now]"></Test2>
            <Test3 v-if="$store.state.ppt.number[$store.state.ppt.now].number == 3"  :comm='true' :data="$store.state.ppt.number[$store.state.ppt.now]"></Test3>
            <Test4 v-if="$store.state.ppt.number[$store.state.ppt.now].number == 4" :comm='true' :data="$store.state.ppt.number[$store.state.ppt.now]"></Test4>
            <Test5 v-if="$store.state.ppt.number[$store.state.ppt.now].number == 5" :comm='true' :data="$store.state.ppt.number[$store.state.ppt.now]"></Test5>
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
}
}
</script>

<style>
.section{
    width: 55%;
    height:95%;
    background-color: white;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center
}
.sectionb{
    width: 100%;
    height:70%;
}
</style>

