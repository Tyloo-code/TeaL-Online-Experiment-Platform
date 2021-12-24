import request from '@/utils/request'

export const getStudentAnswers = (studentId, quizId, params) => request({url: `/api/StudentAnswerGroups?$expand=student&$expand=quiz&$expand=studentAnswers($expand=question)&$filter=student/id eq '${studentId}' and quiz/id eq ${quizId}`, method: 'get', params})

export const getStudentAnswersOne = params => request({url: `/api/StudentAnswerGroups/GetOne`, method: 'get', params})

export const getStudentName = studentId => request({url: `/api/Students('${studentId}')`, method: 'get'})

export const putAnswer = data => request({url: `/api/StudentQuizInfos`, method: 'put', data})

export const getAnswers = studentId => request({url: `/api/StudentQuizInfos?$expand=student&$expand=quiz&$filter=student/id eq '${studentId}'`, method: 'get'})
