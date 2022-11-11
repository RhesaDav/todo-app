import baseApi from "../api/baseApi"

export const getAllActivity = () => {
    return baseApi.get('/activity-groups')
}

export const getTodoDetail = (id) => {
    return baseApi.get(`/todo-items/${id}`)
}