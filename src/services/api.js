import axios from "axios";

const Api=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

const getPosts=()=>Api.get('/posts')

export const Services={
    getPosts
}