import request from '@/utils/request'


export const getList = params => request({url: '/api/Students?$expand=class($expand=courses($expand=quizzes))', method: 'get', params})

export const getodataList = odataroute => request({url: '/api/Students?$expand=class($expand=courses($expand=quizzes))'+ odataroute, method: 'get'})

