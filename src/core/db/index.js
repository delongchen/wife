const dbReq = window.indexedDB.open('wife')

dbReq.onupgradeneeded = ev => {
  console.log('upgrade: ', ev.newVersion)
}

dbReq.onsuccess = ev => {
  console.log('success: ', ev)
}

dbReq.onerror = () => {
  console.log('db err')
}
