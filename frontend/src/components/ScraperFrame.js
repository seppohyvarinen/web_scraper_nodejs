import { useEffect, useState } from "react";

import axios from "axios";

const ScraperFrame = () => {
  const [scraped, setScraped] = useState("scrape here");
  const [newQuery, setNewQuery] = useState("");

  const handleQuery = (e) => {
    setNewQuery(e.target.value);
  };

  const scrape = async (q) => {
    try {
      var scrapeResult = await axios.get("/results", {
        params: {
          tag: q,
        },
      });

      setScraped(scrapeResult.data);
      console.log(scrapeResult);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <input type={"text"} onChange={handleQuery} value={newQuery}></input>
      <button onClick={() => scrape(newQuery)}>scrape</button>
      <div>{scraped}</div>;
    </div>
  );
};

export default ScraperFrame;
