<template>
  <div class="create__warp">
    <div>Key : QSFYFSEFCT</div>
  </div>
</template>
<script>
export default {
  methods: {
    yes() {},
    no() {
      this.$store.state.router = "up";
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
  /* font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #707070; */
</style>
