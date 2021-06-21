import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function Search(event) {
        event.preventDefault();
        let apiUrl =  `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <section>
            <form onSubmit={Search} className="Search-field">
               <input type="search" onChange={handleKeywordChange} placeholder="Got a word in mind? Look it up!"/>  
            </form>
            </section>
            <Results results={results} />
        </div>
    );
}
