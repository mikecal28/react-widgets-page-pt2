import { useState, useEffect } from "react";

function MotivationalPoster(props) {
  const {
    image,
    setImage,
    quote,
    setQuote,
    refresh,
    setRefresh,
    loadedQuote,
    setLoadedQuote,
  } = props;

  useEffect(() => {
    if (refresh) {
      fetch("https://picsum.photos/600")
        .then((res) => res.url)
        .then((data) => setImage(data));
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    if (!localStorage?.getItem("quotes")) {
      console.log("running api");
      fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => localStorage.setItem("quotes", JSON.stringify(data)))
        .catch((err) => console.error("Broken: ", err));
    }
  }, []);

  const renderQuote = () => {
    const quotes = localStorage.getItem("quotes");
    const parsedQuotes = JSON?.parse(quotes);

    return parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
  };

  useEffect(() => {
    if (refresh) {
      if (localStorage?.getItem("quotes")) {
        const quotes = renderQuote();
        setLoadedQuote(quotes);
      }
    }
  }, [refresh]);

  useEffect(() => {
    setQuote(loadedQuote);
  }, [image]);

  return (
    <div className="motivational-poster">
      <h1>Random Motivational Poster</h1>
      <div className="poster-wrapper">
        {image && <img className="poster" src={image} alt="random pic" />}
        <div className="quote">
          {quote && image ? (
            quote.text
          ) : (
            <div className="loading">...Loading</div>
          )}
        </div>
        <p className="author">{quote && image ? quote.author : null}</p>
      </div>
      <button
        className="refresh"
        onClick={() => setRefresh((refresh) => !refresh)}
      >
        Refresh
      </button>
    </div>
  );
}

export default MotivationalPoster;
