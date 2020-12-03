import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function News(props) {

    const api_key = process.env.REACT_APP_NEWS_API_KEY;
    //const base = 'http://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=';
    const base = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=';
    const news_url = 'https://api.theartnewspaper.com/text-to-image?text=News&w=1200&h=630&bg=d9212d&txtclr=ffffff&fs=150';

    const [articles, setArticles] = useState([]); 


    const getNews = () => {
        fetch(`${base}${api_key}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setArticles(data.articles);
                setArticles(data.results);
            })
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className='news-main' style={{textAlign: 'center'}}>
            {/* <h1 style={{marginLeft: 'auto', marginRight: 'auto', fontFamily: 'cursive'}}>Top Stories</h1> */}
            <div className='news-container'>
                <Carousel>
                    {articles.map((val, idx) => {
                        return (
                            <Carousel.Item className='story' key={idx}>
                                <a href={val['url']} className='news-img' target='_blank'>
                                        <img 
                                            // src={val['urlToImage'] == null ? news_url : val['urlToImage']} 
                                            src={val['multimedia'][0]['url'] == null ? news_url : val['multimedia'][0]['url']} 
                                            alt='To Story ->'
                                            height='100%'
                                            width='100%'
                                        />
                                        <Carousel.Caption className='carousel-caption'>
                                            <div >
                                                <h3 style={{color: 'white'}}>{val['title']}</h3>
                                                {/* <p style={{color: 'white'}}>{val['description']}</p> */}
                                                <p style={{color: 'white'}}>{val['abstract']}</p>
                                            </div>
                                        </Carousel.Caption>
                                </a>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
            {/* <button onClick={getNews} style={{margin: '30px auto'}}>Refresh</button> */}
        </div>
    );
}

export default News;