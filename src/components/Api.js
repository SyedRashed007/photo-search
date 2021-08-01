import {useState, useEffect} from 'react'
import axios from 'axios'

const API_KEY = "kozL5I4VbYv785jxe9QOFkTWM43qjt0GtM1-MhbLsKs"

function LoadImages(){
    const [state, setState] = useState([]) 
    const count = 1
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
        .then((data) => {
            // console.log(data)
            setState(data.data)
        })
    },[count])
    return state
}
function SearchImages(url){
    const [query, setQuery] = useState([]) 
    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query="+url+"&client_id=" + API_KEY)
        .then((data) => {
            // console.log(data)
            setQuery(data.data.results)
        })
    },[url])
    return query
}
export {LoadImages, SearchImages}
