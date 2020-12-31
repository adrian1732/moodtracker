import React from'react';
import { Link } from 'react-router-dom';
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList';

const ArticlesListPage = () => (
    <>
    <h1>Articles List</h1>
    <ArticlesList articles={articleContent} />
    </>
);

export default ArticlesListPage;