import request from '@/utils/request'
export function getStudentAnswers(studentId, quizId, params) {
  return request({
    // url: `/api/StudentAnswerGroups/GetOne?$filter=quizzes/id eq ${quizId}`,
    url: `/api/StudentAnswerGroups?$expand=student&$expand=quiz&$expand=studentAnswers($expand=question)&$filter=student/id eq '${studentId}' and quiz/id eq ${quizId}`,
    method: 'get',
    params
  })
}
export function getStudentAnswersOne(params) {
  return request({
    url: `/api/StudentAnswerGroups/GetOne`,
    method: 'get',
    params
  })
}

export function getStudentName(studentId) {
  return request({
    url: `/api/Students('${studentId}')`,
    method: 'get',
  })
}
export function putAnswer(data) {
  return request({
    url: `/api/StudentQuizInfos`,
    method: 'put',
    data
  })
}

export function getAnswers(studentId) {
  return request({
    url: `/api/StudentQuizInfos?$expand=student&$expand=quiz&$filter=student/id eq '${studentId}'`,
    method: 'get',
  })
}
