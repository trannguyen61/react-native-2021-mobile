import axios from 'axios'

import {API_KEY} from '../key'

export const fetchMovies = async (search, pageNumber) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/`, {
            params: {
                s: search,
                page: pageNumber,
                apikey: API_KEY
            }
        })
        const { Search, totalResults, Error } = response.data
    
        if (response.status == 200) {
            return { results: Search, totalResults: totalResults }
        } else {
            throw new Error(Error)
        }    
    } catch (err) {
        throw new Error(err)
    }
}