import { useState, useEffect } from "react";

function Widget1() {
  const [image, setImage] = useState("");
  const [quote, setQuote] = useState("");

  const quoteStorage = localStorage.getItem("quotes");

  useEffect(() => {
    fetch("https://picsum.photos/600")
      .then((res) => res.url)
      .then((data) => setImage(data));
  }, []);

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
    if (localStorage?.getItem("quotes")) {
      const quotes = renderQuote();
      setQuote(quotes);
    }
  }, [quoteStorage]);

  useEffect(() => {
    console.log(quote);
  }, [quote]);

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <div className="motivational-poster">
      <h1>Motivational Poster</h1>
      <div className="poster-wrapper">
        {image && <img className="poster" src={image} alt="random pic" />}
        <div className="quote">
          {quote && image ? (
            quote.text
          ) : (
            <div className="loading">Loading...</div>
          )}
        </div>
        <p className="author">{quote && image ? quote.author : null}</p>
      </div>
    </div>
  );
}

export default Widget1;
