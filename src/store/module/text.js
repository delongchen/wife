import {getText} from "@/api";

const defaultNode = {
  title: 'wife',
  content: 'i am content'
}

const nodeCache = {}

let nowNode = null

const textService = {
  namespaced: true,
  state: {
    texts: {title: 'i am title', children: []},
    node: null
  },
  mutations: {
    SET_TEXTS(state, data) {
      state.texts = data
    },
    SET_NODE(state, key) {
      if (state.node !== key) {
        state.node = key
        const cachedNode = nodeCache[key]
        if (cachedNode === undefined) {
          const now = findNode(state.texts, key)
          if (now !== null) {
            nowNode = now
            nodeCache[key] = now
          }
        } else {
          nowNode = cachedNode
        }
      }
    },
    SET_NODE_PROPS(state, cb) {
      cb(nowNode)
    }
  },
  actions: {
    GetTexts(context, params) {
      return new Promise((resolve, reject) => {
        getText(params).then(data => {
          resolve(data.data)
        }).catch(reason => reject(reason))
      })
    }
  },
  getters: {
    TEXTS: state => state.texts,
    NODE: (state) => {
      return state.node ? nowNode : defaultNode
    },
    TEXT_BY_POSITION: state => position => {
      position = position.split('.')
      let ret = state.texts
      while (position.length) {
        ret = ret.children[position.shift()]
      }
      return ret
    }
  }
}

function findNode(node, path) {
  path = path.split('.')
  let ret = node
  while (path.length) {
    ret = ret.children[path.shift()]
    if (ret === undefined) return null
  }
  return ret
}

export { textService }
