import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {

    const [term, setTerm] = useState('programming');
    const [results, setResults] = useState(['']);

    useEffect(() => {
        const helperFunction = async () => {
                const response = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: term
                    }
                });
                setResults(response.data.query.search);
            }
        if(term)
        helperFunction();
        
    }, [term]);

    const renderedItems = results.map((result, index) => {
        return (
            <React.Fragment key={index}>
                <div className="item">
                    <div className="right floated content">
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button" target='_blank'>Go</a>
                    </div>
                    <div className="content">
                        <div className="header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML = {{ __html: result.snippet }}></span>
                    </div>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                        className="input"
                        type="text"
                        value={term}
                        onChange={(e)=>setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedItems}
            </div>
        </div>
    )
}

export default Search
