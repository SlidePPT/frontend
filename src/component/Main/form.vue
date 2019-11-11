<template>
  <div class="form">
    <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 1">
      <div style="display:flex; ">
        <label style="min-width:100px; font-size:30px;">제목</label>
        <input
          style="font-size:30px;"
          v-model="$store.state.ppt.number[$store.state.ppt.now].title"
        />
      </div>
      <div style="display:flex; ">
        <label style="min-width:100px; font-size:30px;">부제목</label>
        <input
          style="font-size:30px;"
          v-model="$store.state.ppt.number[$store.state.ppt.now].subTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form {
  width: 20%;
  height: 95%;
  background-color: white;
  margin: 20px;
}
</style>