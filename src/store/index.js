import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let one = {
  number : "1",
  title : "Able",
  subTitle : "시각장애인을 위한 음성 명령형 웹 브라우저"
}      
let two = {
  number : "2",
  title : "목차",
  text : ["1. 나는","2. 머머리가 아니다","3. 머머리가 아니다","4. 머머리가 아니다"],
}
let three = {
  number : "3",
  title : "제목1",
  image : {},
  text : "나는 힘들다"
}
let four = {
  number : "4",
  title : "제목2",
  text : "나는 힘들다2"
}
let five  = {
  number : "5",
  title : "Thanks for listening",
  text : "감사합니다"
}

export default new Vuex.Store({
  state: {
    router: "down",
    ppt : {
      now : 0,
      number:[one,two,four,three,four,five]
    }

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
