import request from '@/utils/request'

export const getList = params => request({url: '/api/Students?$expand=class', method: 'get', params})

export const getodataList = odataroute => request({url: '/api/Students?$expand=class'+ odataroute, method: 'get'})

export const getaList = odataroute => request({url: '/api/classes'+ odataroute, method: 'get'})

export const getclass = params => request({url: '/api/Classes', method: 'get', params})

export const postList = data => request({url: '/api/Classes', method: 'put', data})

export const putstudent = data => request({url: '/api/Students', method: 'put', data})

export const deleteList = id => request({url: `/api/Classes(${id})`, method: 'delete'})

export const deletestudent = id => request({url: `/api/Students(${id})`, method: 'delete'})

export const postfile = data => request({url: '/api/Import', method: 'post', data})