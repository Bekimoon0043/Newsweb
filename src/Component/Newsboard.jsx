import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=fc8d863e8cdb4505b87ec0a8e0fd6c8f`;

    fetch(url)
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => setError(error));
  }, [category]);

  if (error) {
    return <div>Error loading news: {error.message}</div>;
  }

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <Newsitem key={news.url} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default Newsboard;