"use strict";

const API_URL = "https://www.omdbapi.com/";
const API_KEY = "3ef4ab9e";

function getMovies(trend, page = 1) {
    return new Promise((resolve, reject) => {

        
        startLoading();

        let URL = `${API_URL}?apiKey=${API_KEY}&s=${trend}&page=${page}`;
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                resolve({movies: res.Search || [], totalResults: res.totalResults || 0})
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                
                stopLoading()
            })
    });
}

function getSingleMovie(id) {
    return new Promise((resolve, reject) => {

        
        startLoading();

        let URL = `${API_URL}?apiKey=${API_KEY}&i=${id}`;
        fetch(URL)
            .then(response => response.json())
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                
                stopLoading()
            })
    });
}

function startLoading() {
    document.body.classList.add("loading")
}

function stopLoading() {
    document.body.classList.remove("loading")
}