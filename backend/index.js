const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

const main = async (greetings) => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com/results?search_query=gangnam+style");
  let element = await page.waitForSelector(
    "#video-title > yt-formatted-string"
  );
  var text = await page.evaluate((element) => element.textContent, element);
  console.log(text);

  console.log(greetings);
};
