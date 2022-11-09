const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());
app.use(express.static("../frontend/build"));
const port = 8080;

const main = async (greetings) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/results?search_query=gangnam+style");
  let element = await page.waitForSelector(
    "#video-title > yt-formatted-string"
  );
  var text = await page.evaluate((element) => element.textContent, element);
  console.log(text);
  browser.close();

  console.log(greetings);
};

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
