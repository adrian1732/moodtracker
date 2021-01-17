import React, { useState, useEffect } from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';
import AddCommentForm from '../components/AddCommentForm';
import AddResultForm from '../components/AddResultForm';
import Results from '../components/Results';
import ResultsUpvotes from '../components/ResultsUpvote';
import SymbolValues from '../components/SymbolValues';

/**Display the results of the user */
const ResultPage = ({ match }) => {
    const name = match.params.name;

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], status: []});
    /*
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/results`);
            const body = await result.json();
            setArticleInfo(body);
        }
        const fetchDatas = async () => {
            const result = await fetch(`/api/downvotes`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
        fetchDatas();
    }, [name]);
    */
   
    return (
    <>
    <SymbolValues/>   
    <h3>Results:</h3>
    <ResultsUpvotes upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
    </>
    );
};

export default ResultPage;