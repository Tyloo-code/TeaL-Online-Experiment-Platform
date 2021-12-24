import request from '@/utils/request'
//下拉菜单班级
export const classList = params => request({url: '/api/Classes', method: 'get', params})
//下拉菜单课程
export const coueseList = params => request({url: '/api/Courses', method: 'get', params})
//下拉菜单试卷
export const quizList = params => request({url: '/api/Quizzes', method: 'get', params})

export const studentList = params => request({url: '/api/Students', method: 'get', params})


