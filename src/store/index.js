import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let one = {
  number: "1",
  title: "Able",
  subTitle: "시각장애인을 위한 음성 명령형 웹 브라우저"
}
let two = {
  number: "2",
  title: "목차",
  text: ["1. 나는", "2. 머머리가 아니다", "3. 머머리가 아니다", "4. 머머리가 아니다"],
}
let three = {
  number: "3",
  title: "제목1",
  image: {},
  text: "나는 힘들다"
}
let four = {
  number: "4",
  title: "제목2",
  text: "나는 힘들다2"
}
let five = {
  number: "5",
  title: "Thanks for listening",
  text: "감사합니다"
}

export default new Vuex.Store({
  state: {
    code: "ABC",
    router: "down",
    ppt: {
      template: 1,
      now: 0,
      number: []
    }

  },
  mutations: {
    addview1: function (state) {
      state.ppt.number.push({ number: "1", title: "제목을 입력해주세요", subTitle: "부제목을 입력해주세요" })
    },
    addview2: function (state) {
      state.ppt.number.push({
        number: "2", title: "목차",
        text: ["1. 목차1", "2. 목차2", "3. 목차3", "4. 목차4"],
      })
    },
    addview3: function (state) {
      state.ppt.number.push({ number: "3", title: "제목을 입력해주세요", image: "", text: "내용을 입력해주세요" })
    },
    addview4: function (state) {
      state.ppt.number.push({ number: "4", title: "제목을 입력해주세요", text: "내용을 입력해주세요" })
    },
    addview5: function (state) {
      state.ppt.number.push({ number: "5", title: "Thanks for listening", text: "감사합니다" })
    }
  },
  actions: {
  },
  modules: {
  }
})
