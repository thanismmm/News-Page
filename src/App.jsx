import { useEffect, useState } from "react";
import "./App.css";
import Bottompage from "./Bottompage";

const App = () => {
  const [news, setNews] = useState([]);
  const [squeryn, setSquery] = useState("Cyber Crime");

  const handeChange = (e) => {
    setSquery(e.target.value);
  };

  useEffect(() => {
    const fetchNews = () => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${squeryn}`)
        .then((result) => result.json())
        .then((data) => setNews(data.hits))
        .catch((error) => console.log(error));
    };

    fetchNews();
  }, [squeryn]);

  return (
    <div className="news">
      <h1>News Page</h1>
      <input type="text" value={squeryn} onChange={handeChange} />
      <div className="news-content">
        {news.map((n, i) => (
          <p className="title" key={i}>
            {n.title}
            {n.url && (
              <a href={n.url} target="_blank" rel="noopener noreferrer">
                Go to Article
              </a>
            )}
          </p>
        ))}
      </div>
      <Bottompage />
    </div>
  );
};

export default App;
