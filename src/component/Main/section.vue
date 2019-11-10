<template>
    <div class="section">
        <div class="sectionb">
        <Test></Test>
    </div>
    </div>
</template>

<script>
import Test from "../../component/Template/one/Template1"

export default {
components:{
    Test
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

