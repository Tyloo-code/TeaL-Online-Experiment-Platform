import {get} from '@/utils/request'
import request from '@/utils/request'

export const getList = params => get('/api/Quizzes?$expand=questions',params)

export const getcourseList= params => get('/api/Quizzes?$expand=courses',params)


export const deletequiz = id => request({url: `/api/Quizzes(${id})`, method: 'delete'})

export const getodataList = odataroute => request({url: "/api/Quizzes?$filter=name eq '"+ odataroute + "'", method: 'get'})

export const getoList = odataroute => request({url: "/api/Courses?$expand=quizzes&$filter=name eq '"+ odataroute + "'", method: 'get'})