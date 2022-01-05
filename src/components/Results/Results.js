import React from 'react';
import './Results.css';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Results = ({ results, term }) => {
    return (
        <div className="results">
            {term.length > 0 && <div className='results-container'>
                {results.slice(0, 5).map((result) => {
                return (
                    <div className="result-card">
                        <h3>{result.title || <Skeleton />}</h3>
                        <p dangerouslySetInnerHTML={{__html: result.snippet}}></p>
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank" ><button>Visit Link</button></a>
                    </div>
                    );
                })}
            </div>}
        </div>
)}
