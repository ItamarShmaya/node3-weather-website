import express from "express";
import path from "path";
import hbs from "hbs";
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "asdas",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    name: "asdas",
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "asdas",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    location: "NY",
    forecast: "50",
  });
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});
