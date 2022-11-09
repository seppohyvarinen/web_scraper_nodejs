import { useEffect, useState } from "react";

import axios from "axios";

const ScraperFrame = () => {
  const [scraped, setScraped] = useState("scrape here");

  const scrape = async () => {
    try {
      let scrapeResult = await axios.get("/results");
      setScraped(scrapeResult.data);
      console.log(scrapeResult);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={() => scrape()}>scrape</button>
      <div>{scraped}</div>;
    </div>
  );
};

export default ScraperFrame;
