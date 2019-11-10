<template>
  <div class="first">
    <div class="fristb">
        <div class="title" :class="{fs: com}">Thanks for listening</div>
        <div class="title__sub" :class="{fss: com}" >감사합니다</div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        com : Boolean
    }
}
</script>

<style scoped>
.first{
    width: 100%;
    height:100%;
    background-color: #4fc1e9;
    position: relative;
    display: flex;
    justify-content: center;
}
.fristb{
    width: 90%;
    height:80%;
    border-radius:0px 0px 2rem 2rem ;
    background-color: white;
    position: absolute;
    top: 0;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
} 
.fs{
    margin:5px !important;
    font-size: 20px !important;
}
.fss{
    margin:5px !important;
    font-size: 8px !important;
}
.firstc{
    width: 5%;
    height: 1.5%;
    background-color: #d7d7d7;
    border-radius: 30px;
    margin-top: 1%;
    position: absolute;
    top: 0;
}
.title{
    font-size: 4rem;
    margin:15px;
    font-family: bold
}
.title__sub{
    font-size: 2rem;
    margin:30px;
}
</style>