const _instance = {
  dbName: 'wife',
  storeName: 'texts',
  add(data) {
    return new Promise((resolve, reject) => {
      getDb.then(db => {
        const transaction = db.transaction(_instance.storeName, 'readwrite')
        transaction.onerror = reject
        transaction.oncomplete = resolve

        const store = transaction.objectStore(_instance.storeName)
        if (Array.isArray(data)) {
          data.forEach(item => {
            store.add(item).onerror = reject
          })
        } else {
          store.add(data).onerror = reject
        }
      })
    })
  }
}

export const getDb = new Promise((resolve, reject) => {
  if (_instance.db) return _instance.db

  const {dbName, storeName} = _instance
  const request = indexedDB.open(dbName)

  request.onupgradeneeded = ev => {
    const db = ev.target.result
    if (db.objectStoreNames.contains(storeName)) {
      db.deleteObjectStore(storeName)
    }
    const store = db.createObjectStore(storeName, { autoIncrement: true })
    store.createIndex('id', 'id', { unique: false })
  }

  request.onerror = reject

  request.onsuccess = ev => {
    resolve(_instance.db = ev.target.result)
  }
});

export default _instance
