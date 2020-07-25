import * as Axios from "axios";

let ApiKey = 'apiKey=1125a602bd85438dbb3939e24a8e06d2'

const instance = Axios.create({
    baseURL: 'https://newsapi.org/',
    // headers:
    // {
    //     'API-KEY': '1125a602bd85438dbb3939e24a8e06d2'
    // }
});

export const TopHeadlines = {
    getNews(){
        return instance.get(`v2/top-headlines?country=us&${ApiKey}`)
            .then(response => {
                return response.data;
            })
    }
}