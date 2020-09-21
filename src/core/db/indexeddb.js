const dbConfig = {
  name: 'wife',
  tableName: 'texts'
}

function MyIndexedDb(config = dbConfig) {
  this.config = config
}

MyIndexedDb.prototype.add = function (data) {
  const {name, tableName} = this.config
  const openReq = indexedDB.open(name)
  openReq.onupgradeneeded = function () {
    const db = openReq.result
    if (!db.objectStoreNames.contains(tableName)) {
      const store = db.createObjectStore(tableName, {
        autoIncrement: true,
      })
      store.createIndex('id', 'id', { unique: true })
    }
  }
  openReq.onsuccess = function () {
    const db = openReq.result
    if (Array.isArray(data)) {
      const t = db.transaction(tableName, 'readwrite')
      t.onerror = ev => {
        console.log(ev.target.error)
      }
      const store = t.objectStore(tableName)
      data.forEach(item => {
        const req = store.add(item)
        req.onerror = ev => {
          console.log(ev.target.error)
        }
      })
    }
  }
}

export const IDDB = new MyIndexedDb(dbConfig)
