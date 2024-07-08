import express from "express";
import puppeteer from "puppeteer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";
import { dummyReceipt } from "./dummyData";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/generate-pdf", async (_req, res) => {
  // Read the HTML template
  const templateHtml = fs.readFileSync(
    path.join(__dirname, "template.html"),
    "utf8"
  );

  // Compile the template with Handlebars
  const template = handlebars.compile(templateHtml);
  const html = template(dummyReceipt);

  // Launch Puppeteer and generate PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1200, height: 800 });

  await page.setContent(html);

  const dimensions = await page.evaluate(() => {
    const { width, height } = document.documentElement.getBoundingClientRect();
    return { width, height };
  });

  const pdf = await page.pdf({
    width: `${dimensions.width}px`,
    height: `${dimensions.height}px`,
  });

  await browser.close();

  // Set the response headers to download the PDF
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=receipt.pdf");
  res.send(pdf);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
