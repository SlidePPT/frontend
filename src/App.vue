<template>
  <div id="app">
    <transition name="page">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>
<script>
</script>
<style>
.page-enter {
  transform: translateY(100%);
}
.page-enter-to {
  transform: translateY(0px);
}
.page-leave {
  transform: translateY(0px);
}
.page-leave-to {
  transform: translateY(-100%);
}
.router-view {
  position: absolute;
  transition: transform 1.5s;
}
</style>
