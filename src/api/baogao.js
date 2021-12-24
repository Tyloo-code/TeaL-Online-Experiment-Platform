import request from '@/utils/request'

export const getList = params => request({url: '/vue-admin-template/baogao/list', method: 'get', params})
