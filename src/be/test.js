const fs = require('fs')

function MyNode(title) {
  this.title = title
}

MyNode.getInstance = function (value, children) {
  if (children !== undefined) {
    const ret = new MyNode(value)
    if (Array.isArray(children) && children.length === 0) return ret
    ret.addChildren(children)
    return ret
  }

  if (value instanceof MyNode) {
    return value
  } else if (typeof value === 'string' && value !== '') {
    return new MyNode(value)
  } else if (typeof value === 'object') {
    const ret = new MyNode(value.title)
    ret.addChildren(value.children)
    return ret
  } else {
    return null
  }
}

MyNode.prototype.addChildren = function (nodes) {
  if (nodes === undefined) return
  if (this.children === undefined) this.children = []
  const ch = this.children

  if (Array.isArray(nodes)) {
    nodes.forEach(item => {
      ch.push(MyNode.getInstance(item))
    })
  } else if (nodes instanceof MyNode) {
    ch.push(nodes)
  } else {
    ch.push(MyNode.getInstance(nodes))
  }
}

MyNode.prototype.writeJson = function (name) {
  const j = JSON.stringify(this)
  fs.writeFile(name, j, 'utf8', err => {
    if (err) console.log(err)
  })
}

const h = MyNode.getInstance

module.exports = { h }

