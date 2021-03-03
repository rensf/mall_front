import service from './service'

export const postRequest = (url, params) => {
  return service({
    method: 'post',
    url: '/api' + `${url}`,
    data: params,
  })
}

export const putRequest = (url, params) => {
  return service({
    method: 'put',
    url: '/api' + `${url}`,
    data: params,
  })
}

export const getRequest = (url, params) => {
  return service({
    method: 'get',
    url: '/api' + `${url}`,
    params: params,
  })
}