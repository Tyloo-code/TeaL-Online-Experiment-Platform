import request from '@/utils/request'

//menu1
export const getcourses = params => request({url: '/api/Courses?$expand=classes,quizzes', method: 'get', params})

export const getodatacourses = odataroute => request({url: '/api/Courses'+ odataroute, method: 'get'})

export const putcourses = data => request({url: '/api/Courses', method: 'put', data})

export const deletecourses = id => request({url: `/api/Courses(${id})`, method: 'delete'})
//menu2
export const putccmap = data => request({url: '/api/ClassCourseMaps', method: 'put', data})

export const getccmap = params => request({url: '/api/ClassCourseMaps?$expand=class,course', method: 'get', params})

export const getodataccmap = odataroute => request({url: '/api/ClassCourseMaps?$expand=class,course'+ odataroute, method: 'get'})

export const deleteccmap = (id1,id2) => request({url: `/api/Courses(${id1})?$expand=classes(${id2})`, method: 'delete'})

//menu3
export const putqcmap = data => request({url: '/api/CourseQuizMaps', method: 'put', data})

export const getqcmap = params => request({url: '/api/CourseQuizMaps?$expand=quiz,course', method: 'get', params})

export const getodataqcmap = odataroute => request({url: '/api/CourseQuizMaps?$expand=quiz,course'+ odataroute, method: 'get'})

export const deleteqcmap = id => request({url: `/api/CourseQuizMaps(${id})`, method: 'delete'})
