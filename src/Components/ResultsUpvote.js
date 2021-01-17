import React from 'react';
import styles from './ResultsUpvote.module.css';
import { useWindowSize } from '@react-hook/window-size';
import Confetti from 'react-confetti';

const ResultsUpvotes = ({ upvotes, setArticleInfo }) => {

    //Goes to backend of server to increase the values
    const upvoteEmail = async () => {
        const result = await fetch(`/api/upvoteEmail`, {
                method: 'post',
            });
            const body = await result.json();
            setArticleInfo(body);
    }
        
    //Goes to backend of server to decrease the values
    const downvoteEmail = async () => {
        const result = await fetch(`/api/downvoteEmail`, {
                method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }

    //Goes to backend of server to increase the values
    const upvoteCase = async () => {
        const result = await fetch(`/api/upvoteCase`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }

    //Goes to backend of server to decrease the values
    const downvoteCase= async () => {
        const result = await fetch(`/api/downvoteCase`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }


        //Goes to backend of server to increase the values
        const upvoteThinking = async () => {
            const result = await fetch(`/api/upvoteThinking`, {
                    method: 'post',
            });
            const body = await result.json();
            setArticleInfo(body);
        }
        
        //Goes to backend of server to decrease the values
        const downvoteThinking = async () => {
            const result = await fetch(`/api/downvoteThinking`, {
                method: 'post',
            });
            const body = await result.json();
            setArticleInfo(body);
        }

    //Message display depending on whether the goal is met or not
    const message = (votes) => {
        if(votes < 150)
        {
            return <h3>{votes}/150</h3>
        }
        else {
            //const {width, height} = useWindowSize();
            return <Confetti width={window.width} height={window.height} recycle={false}/> 
        }
    }
    
    return (
        <>
        <div className={styles.sideBars}>
            <div id="upvotes-section">
                <button className={styles.buttons} onClick={() => upvoteEmail()}>Add Upvote For Email</button>
                <button className={styles.buttons} onClick={() => downvoteEmail()}>Add Downvote For Email</button>
                <p>This post has been upvoted {upvotes} times</p>
            </div>
            <div id="upvotes-section">
                
                <p>This post has been downvoted {upvotes} times</p>
            </div>
        </div>
        <div className={styles.sideBars}>
            <div id="upvotes-section">
                <button className={styles.buttons} onClick={() => upvoteCase()}>Add Upvote For Case</button>
                <button className={styles.buttons} onClick={() => downvoteCase()}>Add Downvote For Case</button>
                <p>This post has been upvoted {upvotes} times</p>
            </div>
            <div id="upvotes-section">
                
                <p>This post has been downvoted {upvotes} times</p>
            </div>
        </div>
        <div className={styles.sideBars}>
            <div id="upvotes-section">
                <button className={styles.buttons} onClick={() => upvoteThinking()}>Add Upvote For Not Thinking</button>
                <button className={styles.buttons} onClick={() => downvoteThinking()}>Add Downvote For Thinking</button>
                <p>This post has been upvoted {upvotes} times</p>
            </div>
            <div id="upvotes-section">
                
                <p>This post has been downvoted {upvotes} times</p>
            </div>
        </div>
        {message(upvotes)}
        <h3>TEST</h3>
        <h3>Second Test</h3>
        </>
    );
}

export default ResultsUpvotes;