const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

let results = express.Router();

let cors = require("cors");
app.use(cors());
app.use(express.static("../frontend/build"));
const port = 8080;
app.use("/results", results);

results.get("/", async (req, res) => {
  var queryItem = req.query.tag;
  console.log(queryItem);
  try {
    let all = await main(queryItem);

    res.send(all);
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
});

const main = async (search_query) => {
  console.log(search_query);
  let formAddress =
    (await "https://www.youtube.com/results?search_query=") + search_query;
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  await page.goto(formAddress);
  console.log(formAddress);
  let element = await page.waitForSelector(
    "#video-title > yt-formatted-string"
  );
  let text = await page.evaluate((element) => element.textContent, element);

  browser.close();

  return text;
};

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
