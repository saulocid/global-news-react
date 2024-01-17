import React from "react";
import { useEffect, useState } from 'react'
import { peticion } from "../services/AppService";

function News() {

    const [news, setNews] = useState([])

    useEffect(() => {
        peticion().then(data => setNews(data.articles))
    }, [])

    console.log(news)

    return (
        <>
            {news && news.length > 0 ?
                <div>
                    {news.map((article, i) => (
                        <div className="news">
                            <h2>{article.title}</h2>
                            <p>{article.author},  {article.publishedAt}</p>
                            <img src={article.urlToImage} alt={article.title} />
                            <p>{article.description}</p>
                            <p>{article.content}</p>
                            <p>Link to complete <a target="_blank" href={article.url}>new</a></p>
                            <hr />
                        </div>
                    ))}
                </div> : <p>Nothing here 😕</p>
            }
        </>
    )

}

export default News;