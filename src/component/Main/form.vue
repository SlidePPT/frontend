// 컴퍼넌트화 하기 귀찮았다...
<template>
  <div class="form">
    <div v-if="$store.state.ppt.template == '0'">
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

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 2">
        <div style="display:flex; ">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">목차</label>
          <button
            style="min-width:100px; font-size:30px;"
            @click="add($store.state.ppt.number[$store.state.ppt.now])"
          >+</button>
          <button
            style="min-width:100px; font-size:30px;"
            @click="del($store.state.ppt.number[$store.state.ppt.now])"
          >-</button>
          <div v-for="(a,index) in $store.state.ppt.number[$store.state.ppt.now].text" :key="index">
            <input
              style="font-size:30px;"
              v-model="$store.state.ppt.number[$store.state.ppt.now].text[index]"
            />
          </div>
        </div>
      </div>

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 3">
        <div style="display:flex; ">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">
            이미지
            <span style="font-size:20px;">[ 링크로 입력해주세요 ]</span>
          </label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].image"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">본문</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].text"
          />
        </div>
      </div>

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 4">
        <div style="display:flex; ">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">본문</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].text"
          />
        </div>
      </div>

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 5">
        <div style="display:flex">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">부제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].text"
          />
        </div>
      </div>
    </div>
    <div v-if="$store.state.ppt.template == '1'">
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

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 2">
        <div style="display:flex; ">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">목차</label>
          <button
            style="min-width:100px; font-size:30px;"
            @click="add($store.state.ppt.number[$store.state.ppt.now])"
          >+</button>
          <button
            style="min-width:100px; font-size:30px;"
            @click="del($store.state.ppt.number[$store.state.ppt.now])"
          >-</button>
          <div v-for="(a,index) in $store.state.ppt.number[$store.state.ppt.now].text" :key="index">
            <input
              style="font-size:30px;"
              v-model="$store.state.ppt.number[$store.state.ppt.now].text[index]"
            />
          </div>
        </div>
      </div>

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 3">
        <div style="display:flex; ">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">
            이미지
            <span style="font-size:20px;">[ 링크로 입력해주세요 ]</span>
          </label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].image"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">본문</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].text"
          />
        </div>
      </div>

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 4">
        <div style="display:flex; ">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">본문</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].text"
          />
        </div>
      </div>

      <div v-if="$store.state.ppt.number[$store.state.ppt.now].number == 5">
        <div style="display:flex">
          <label style="min-width:100px; font-size:30px;">제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].title"
          />
        </div>
        <div>
          <label style="min-width:100px; font-size:30px;">부제목</label>
          <input
            style="font-size:30px;"
            v-model="$store.state.ppt.number[$store.state.ppt.now].text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add(e) {
      e.text.push(" ");
    },
    del(e) {
      e.text.pop();
    }
  }
};
</script>

<style>
.form {
  width: 20%;
  height: 95%;
  background-color: white;
  margin: 20px;
}
</style>