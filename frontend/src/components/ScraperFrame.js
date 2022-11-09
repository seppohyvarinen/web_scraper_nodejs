import { useEffect, useState } from "react";

const axios = require("axios").default;

const ScraperFrame = () => {
  const [scraped, setScraped] = useState("scrape here");

  const scrape = async () => {};

  return (
    <div>
      <button onClick={() => scrape()}>scrape</button>
      <div>{scraped}</div>;
    </div>
  );
};

export default ScraperFrame;
