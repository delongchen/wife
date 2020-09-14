import request from "@/utils/request";

const GET = 'get'
const POST = 'post'

const api = {
  GetData: 'http://localhost:3000',
  Texts: '/text'
}

export function getData(data) {
  return request({
    url: api.GetData,
    method: POST,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    data
  })
}

export function getText(path) {
  return request({
    url: api.GetData + api.Texts,
    method: GET,
    params: { path }
  })
}
