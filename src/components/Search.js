import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {

    const [term, setTerm] = useState('');

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
            if(response.data.query!== undefined)
            console.log(response.data.query.search);
        }
        helperFunction();
        
    }, [term]);

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
        </div>
    )
}

export default Search
