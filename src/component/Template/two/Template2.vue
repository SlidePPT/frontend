<template>
  <div class="first">
    <div class="fristb">
      <div class="title" :class="{fs: com , cs: comm}">{{data.title}}</div>
      <div>
        <div
          class="title__sub"
          :class="{fss: com , css: comm}"
          v-for="(a,index) of data.text"
          :key="index"
        >
          <div>{{a}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    com: Boolean,
    comm: Boolean,
    data: Object
  }
};
</script>

<style scoped>
.first {
  width: 100%;
  height: 100%;
  background-color: #4fc1e9;
  opacity: 0.7;
  justify-content: flex-end;
  position: relative;
  display: flex;
}
.fristb {
  width: 90%;
  height: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
}
.fs {
  font-size: 15px !important;
  margin-left: 1rem !important;
}
.fss {
  font-size: 10px !important;
  margin-left: 1.5rem !important;
}
.cs {
  font-size: 3rem !important;
}
.css {
  font-size: 1.9rem !important;
}
.firstc {
  width: 5%;
  height: 1.5%;
  background-color: #d7d7d7;
  border-radius: 30px;
  margin-top: 1%;
  position: absolute;
  top: 0;
}
.title {
  position: absolute;
  top: 5%;
  left: 0%;
  font-size: 4rem;
  font-family: bold;
  text-align: start;
  margin-left: 2rem;
}
.title__sub {
  font-size: 2rem;
  margin-left: 10rem;
}
.title__sub > * {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>