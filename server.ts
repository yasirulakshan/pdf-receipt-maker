import express from "express";
import puppeteer from "puppeteer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  const { date, items, total } = req.body;

  // Read the HTML template
  const templateHtml = fs.readFileSync(
    path.join(__dirname, "template.html"),
    "utf8"
  );

  // Compile the template with Handlebars
  const template = handlebars.compile(templateHtml);
  const html = template({ date, items, total });

  // Launch Puppeteer and generate PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(html);
  const pdf = await page.pdf({ format: "A4" });

  await browser.close();

  // Set the response headers to download the PDF
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=receipt.pdf");
  res.send(pdf);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
