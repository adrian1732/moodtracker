import React from 'react';

/**Display the results of the user */
const Results = ({ status }) => (
    <>
    <h3>Results:</h3>
    {status.map((status, key) => (
        <div className="status" key={key}>
            <h4>{status.username}</h4>
            <p>{status.text}</p>
        </div>
    ))}
    </>
);

export default Results;