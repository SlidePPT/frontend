<template>
  <div class="create__warp">
    <div>dd</div>
    <div>dd</div>
  </div>
</template>
<script>
export default {
  methods: {
    test() {
      this.$store.state.router = "up";
      console.log(this.$store.state.router);
      this.$router.push("/");
    }
  }
};
</script>
<style>
.create__warp {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
