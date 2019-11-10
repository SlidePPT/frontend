<template>
  <div class="first">
    <div class="fristb">
        <div class="title" :class="{fs: com}">목차</div>
        <div class="title__sub" :class="{fss: com}" >
            <div>1. 정보통신 수행평가</div>
            <div>2. 만점 가즈아!!</div>
        </div>
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
    height:100%;
    background-color: white;
    position: absolute;
    bottom: 0;
    margin: 0px auto;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
} 
.fs{
    font-size: 15px !important;
    margin-left:1rem !important;

}
.fss{
    font-size: 10px !important;
    margin-left:1.5rem !important;
    

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
    position: absolute;
    top: 5%;
    left: 0%;
    font-size: 4rem;
    font-family: bold;
    text-align: start;
    margin-left:5rem;
}
.title__sub{
    font-size: 2rem;
    margin-left:10rem;
}
.title__sub > * {
    margin-top:10%;
    margin-bottom: 10%; 
}
</style>