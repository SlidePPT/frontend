<template>
  <div class="Main__warp">
      <img class="Main__Title" src="../assets/sliceLogo.png" width="300px" height="300px"/>
      <input class="Main__Input" />
      <div class="Main__Create">코드생성</div>
      <div>모바일 앱 다운</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
}
</script>
<style>
.Main__warp{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height:100vh;
}
.Main__Input{
    padding: 15px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px;
    min-width: 300px;
    margin:10px;
}
.Main__Create{
    margin: 20px;
}
</style>
