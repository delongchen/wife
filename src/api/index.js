import request from "@/utils/request";

const api = {
  GetData: 'http://localhost:3333'
}

export function getData() {
  return request({
    url: api.GetData,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
