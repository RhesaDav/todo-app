import baseApi from "../api/baseApi"

export const getAllActivity = () => {
    return baseApi.get('/activity-groups')
}

export const getActivityDetail = (id) => {
    return baseApi.get(`/activity-groups/${id}`)
}

export const createTodoItem = (id,data) => {
    return baseApi.post(`/todo-items`, data)
}