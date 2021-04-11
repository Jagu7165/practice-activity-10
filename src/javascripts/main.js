// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

import {movies} from './movies'
let featured_movie= document.querySelector('.featured')
for (let m of movies){
    let movie_thumb= document.getElementById('m' + m.id)
    movie_thumb.innerHTML=`
    <img src="${m.poster}">`

    movie_thumb.onclick = function(){ selectmovie(m)}
}
function selectmovie(m){
    featured_movie.innerHTML=`
    <img src="${m.poster}" style ="float: left;">
    <h1>${m.title}</h1>
    <p>${m.plot}</p>`
}

function searchmovies(event){
    if(event){
        event.preventDefault()
    }
    let input = document.querySelector('[type="search"]').value || ""
    for(let m of movies){
        let movie_thumb = document.getElementById('m' + m.id)
        if(m.title.toUpperCase().indexOf(input.toUpperCase())==-1){
            movie_thumb.classList.add('hidden')
        }
        else{
            movie_thumb.classList.remove('hidden')

        }
    }
}

document.querySelector('button').onclick = searchmovies
document.querySelector('[type="search"]').onsearch = searchmovies
document.forms[0].addEventListener('submit', searchmovies, false)
//TODO