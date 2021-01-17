import React, { useState } from 'react';

const AddResultForm = ({ articleName, setArticleInfo }) => {
    const [usernames, setUsernames] = useState('');
    const [resultText, setResultText] = useState('');

    const addResult = async () => {
        const result = await fetch(`/api/results`, {
            method: 'post',
            body: JSON.stringify({ usernames, texts: resultText }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        setArticleInfo(body);
        setUsernames('');
        setResultText('');
    }

    return (
        <div id="add-result-form">
            <h3>Add a Comment</h3>
            <label>
                Name:
                <input type="text" value={usernames} onChange={(event) => setUsernames(event.target.value)} />
            </label>
            <label>
                Result:
                <textarea rows="4" cols="50" value={resultText} onChange={(event) => setResultText(event.target.value)} />
            </label>
            
            <button onClick={() => addResult()}>Add Result</button>
        </div>
    );
}

export default AddResultForm;