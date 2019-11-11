<template>
  <div id="app">
    <transition :name="$store.state.router">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
#app {
  width: 100%;
  height: 100vh;
}
.down-enter {
  transform: translateY(100%);
}
.down-enter-to {
  transform: translateY(0px);
}
.down-leave {
  transform: translateY(0px);
}
.down-leave-to {
  transform: translateY(-100%);
}

.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0px);
}
.left-leave {
  transform: translateX(0px);
}
.left-leave-to {
  transform: translateX(-100%);
}

.right-enter {
  transform: translateX(-100%);
}
.right-enter-to {
  transform: translateX(0px);
}
.right-leave {
  transform: translateX(0px);
}
.right-leave-to {
  transform: translateX(100%);
}

.up-enter {
  transform: translateY(-100%);
}
.up-enter-to {
  transform: translateY(0px);
}
.up-leave {
  transform: translateY(0px);
}
.up-leave-to {
  transform: translateY(100%);
}

.router-view {
  position: absolute;
  transition: transform 1.5s;
}
</style>
