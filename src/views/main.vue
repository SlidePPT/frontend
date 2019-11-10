<template>
  <div class="main__warp">
    <Topbar></Topbar>
    <div class="main__main">
      <Nav></Nav>
      <Section></Section>
      <Form></Form>
    </div>
  </div>
</template>
<script>
import Topbar from "../component/Main/topbar.vue"
import Nav from "../component/Main/Nav"
import Section from "../component/Main/section"
import Form from "../component/Main/form"
export default {
  methods: {
    yes() {},
    no() {
      this.$store.state.router = "up";
      this.$router.push("/");
    },
  },
  components:{
    Topbar,
    Nav,
    Section,
    Form
  }
};
</script>
<style scoped>
.main__warp{
  width: 100%;
  height: 100%;
}
.main__main{
  height:90%;
  background-color:#f5f5f5;
  display: flex;
}
</style>
