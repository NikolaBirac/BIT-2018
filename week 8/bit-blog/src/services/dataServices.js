import { serviceURL } from '../shared/constants';
import Post from '../entities/Post';
import Author from '../entities/Author'
import axios from 'axios';

class DataServices {
    
    getPosts() {
        return axios.get(`${serviceURL}posts`)
            .then(response => {
                const result = response.data.slice(0,20);
                return result.map(post=>{
                    return new Post(post.id,post.title,post.body);
                })
            })
    }

    getAuthors(){
        return axios.get(`${serviceURL}users`)
            .then(response => {
                const result = response.data;
                return result.map(author =>{
                    return new Author(author.name,author.username,author.email,author.address,author.phone,author.company);
                })
            })
    }

}

export default new DataServices();