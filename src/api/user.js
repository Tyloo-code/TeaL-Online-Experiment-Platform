import request from '@/utils/request'
export const login = data => request({url: 'http://podolski.cn:5003/connect/token', method: 'post', data})

export const getInfo= token => request({url: '/dev-api/vue-admin-template/user/info', method: 'get', params:{ token }})

export const logout = () => request({url: '/dev-api/vue-admin-template/user/logout', method: 'post'})

export const getStudentName = studentId => request({url: `/api/Students('${studentId}')`, method: 'get'})
