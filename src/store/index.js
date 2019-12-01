import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    code: "",
    router: "down",
    ppt: {
      _id: "abc",
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
    },
    move() {
      router.push("/mainview");
    }
  },
  actions: {
    make(data) {
      return new Promise(() => {
        axios.post(`http://192.168.35.84:4000/certification/make`,
          { ppt: data.state.ppt })
          .then(response => {
            console.log("성공", response.data.ppt)
            this.state.ppt = response.data.ppt
          }).catch((ex) => {
            console.log("에러 : ", ex)
          })
      })
    },
    save(data) {
      return new Promise(() => {
        axios.post(`http://192.168.35.84:4000/certification/save`,
          { ppt: data.state.ppt })
          .then(response => {
            console.log("성공", response.data.ppt)
            this.state.ppt = response.data.ppt
          }).catch((ex) => {
            console.log("에러 : ", ex)
          })
      })
    },
    check(data) {
      return new Promise((resolve, reject) => {
        axios.post(`http://192.168.35.84:4000/certification/check`,
          { code: data.state.code })
          .then(response => {
            console.log("성공", response.data)
            this.state.ppt = response.data
            if (response.data) {
              resolve({ st: true });
            }
            else {
              resolve({ st: false });
            }
          }).catch((ex) => {
            console.log("에러 : ", ex)
            reject({ st: false });
          })
      })
    }




  },
  modules: {
  }
})
