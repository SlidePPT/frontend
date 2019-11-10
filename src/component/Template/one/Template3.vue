<template>
  <div class="first">
    <div class="fristb">
        <div class="title" :class="{fs: com}">기획의도</div>
        <div class="title__sub" :class="{fss: com}" >
            <div class="title__sub__left">
                <div style="background-color:gray; width:10%; height:10%;"></div>
            </div>
            <div class="title__sub__right" :class="{fss: com}">잠자다가 생각났어요</div>
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
} 
.fs{
    font-size: 15px !important;
    margin-left:1rem !important;

}
.fss{
    font-size: 1px !important;


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
    margin-left: 5rem;
}
.title__sub{
    font-size: 2rem;
    width: 90%;
    height:60%;
    display: flex;
}
.title__sub > * {
    margin: 0.5rem;
    flex: 1;
}
.title__sub__left{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title__sub__right{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>