import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function Search(event) {
        event.preventDefault();
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f917000010000016ae5ee198d504fc491478a0fefda2c43";
        let pexelsApiUrl =  `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}`}
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <form onSubmit={Search} className="Search-field">
               <input type="search" onChange={handleKeywordChange} placeholder="Got a word in mind? Look it up!"/>  
            </form>
            <section>
            <Results results={results} />
            <Photos photos={photos} />
            </section>
        </div>
    );
}
