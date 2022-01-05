import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';
import { Results } from "../Results/Results";
import { ReactComponent as SearchIcon } from '../../svg/searchIcon.svg';

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term,
      },
    });
    setResults(data.query.search);
  };

  useEffect(() => {
    if(term.length > 3) {
      search()
    }
  }, [term])

  console.log(results)

  return (
    <div className="search-page">
      <div className="search-header">
          <h1>Wikipedia Clone</h1>
          <div className="search-form">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              type="search"
              placeholder="Search.."
              className="search-input"
            />
            <button onClick={search} ><SearchIcon /></button>
          </div>
      </div>
      <Results results={results} term={term} />
      {results.length === 0 && term.length > 0 ? <h1 className="no-result">No Result</h1> : ''}
    </div>
  );
};

export default Search;