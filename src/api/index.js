import request from "@/utils/request";

const GET = 'get'
const POST = 'post'

function ip_maker(num) {
  const IP_PRE = ['http://192.168.114.', ':3000']
  return IP_PRE.join('' + num)
}

const IP = {
  PI: ip_maker(51),
  MAC: ip_maker(16),
  LOCALHOST: 'http://localhost:3000'
}

const api = {
  GetData: IP.PI,
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
