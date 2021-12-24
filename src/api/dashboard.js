import request from "@/utils/request";

export const getquizzes = odatamark => request({url:"/api/Quizzes?$filter=markdown eq '"+odatamark+"'", method: "get"});

export const getquizbyid = id => request({url:"/api/Quizzes?$expand=questions&$filter=id eq "+id, method: "get"});

export const putquizzes = data => request({url: "/api/Quizzes", method: "put", data});

export const putquestions = data => request({url: "/api/Questions?$filter=id eq "+id, method: "put", data});

export const postfile = data => request({url: "/api/Files", method: "post", data});
