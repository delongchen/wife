import { getData } from "@/api";

const defaultNode = {
  title: 'wife',
  content: 'i am content'
}

const textService = {
  namespaced: true,
  state: {
    texts: { title: 'i am title', children: [] },
    node: null
  },
  mutations: {
    SET_TEXTS(state, data) { state.texts = data },
    SET_NODE(state, node) {
      if (state.node !== node) state.node = node
    }
  },
  actions: {
    GetTexts({ commit }) {
      return new Promise((resolve, reject) => {
        getData().then(value => {
          commit('SET_TEXTS', value)
          resolve(value)
        }).catch(reason => reject(reason))
      })
    }
  },
  getters: {
    TEXTS: state => state.texts,
    NODE: (state, getters) => {
      if (state.node === null) return defaultNode
      return getters.TEXT_BY_POSITION(state.node)
    },
    TEXT_BY_POSITION: state => position => {
      position = position.split('')
      let ret = state.texts
      while (position.length) {
        ret = ret.children[position.shift()]
      }
      return ret
    }
  }
}

export { textService }
