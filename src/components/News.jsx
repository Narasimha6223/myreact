import React, { useState, useEffect } from 'react'
import '../styles/News.css'
import Newsitem from './Newsitem'
export default function News(props) {


  const [articles, setarticles] = useState( [
    
  ])


  async function fetchData() {
    props.setloading(true)
    props.setProgress(10)
    props.setcategory(props.category)
    const url = 'https://eventregistry.org/api/v1/article/getArticles';
const headers = {
    'Content-Type': 'application/json'
};

const body =
{
    "query": {
        "$query": {
            "$and": [
                {
                    "$or": [
                        {
                            "categoryUri": `dmoz/${props.category}`
                        },
                        
                    ]
                },
                {
                    "locationUri": "http://en.wikipedia.org/wiki/India"
                }
            ]
        },
        "$filter": {
            "forceMaxDataTimeWindow": "31"
        }
    },
    "resultType": "articles",
    "articlesSortBy": "date",
    "articlesPage": 1,
    "articlesCount": 50,
    "apiKey": "18a03268-e503-434b-a688-fa985eea2d2f"
}
props.setProgress(30)
    try {
        const response = await fetch(url, {
            method: 'POST', // or 'GET' depending on your API requirements
            headers: headers,
            body: JSON.stringify(body)
        });

        props.setProgress(40)

        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        props.setProgress(60)

        // Handle the parsed data
        const articles = data.articles;
        setarticles(articles.results)
        props.setProgress(100)
      
        console.log('Page:', articles.page);
        console.log('Total Results:', articles.totalResults);
        console.log('Pages:', articles.pages);

        // Iterate over the results array and log each object
        articles.results.forEach(result => {
            console.log('Result:', result);
            // You can further process or display each result as needed
        });
        props.setloading(false)
        // setarticles(result)
    } catch (error) {
        // Handle errors during the fetch
        console.error('Fetch error:', error);
    }
}

useEffect(()=>{
  fetchData()
},[])


let key = 0;
  return (
    <>

    {
      articles.map((e)=>{
        
          return <Newsitem key={key++} imgurl={e.image==null||""?"/noimage.jpg":e.image} url={e.url==null||""?"":e.url}  desc={e.body==null||""?"Click TO Read":e.body.slice(0,80)}  title={e.title==null||""?"No Title":e.title.slice(0,100)} source={e.source.title} content={e.body==null||""?"Click TO Read":e.body} date={new Date(e.date).toDateString()} author={e.source.title==null||""||undefined?"N/A":e.source.title}/>
        
      })
    }
 </>
  )
}



