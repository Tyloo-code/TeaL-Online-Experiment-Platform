import request from '@/utils/request'

export const getQuestion = params => request({url: '/api/Questions', method: 'get', params})

export const getQuizzes = params => request({url: '/api/Quizzes?$expand=questions', method: 'get', params})

export const putaAnswers = params => request({url: '/api/StudentAnswer', method: 'put', params})

export const putStudentAnswers = data => request({url: '/api/StudentAnswerGroups', method: 'put', data})

export const deleteQ = data => request({url: '/api/Quizzes({2})', method: 'delete', data})

export const getStudentAnswers = params => request({url: '/api/StudentAnswerGroups?$expand=studentAnswers&student', method: 'get', params})
